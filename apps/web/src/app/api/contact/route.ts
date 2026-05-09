import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { z } from 'zod';
import {
  CONTACT_EMAIL,
  SERVICE_LABELS,
} from '@/lib/contact';

const bodySchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().min(10),
  company: z.string().min(2),
  service: z.string().min(1),
  message: z.string().min(10),
});

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function buildBodies(data: z.infer<typeof bodySchema>) {
  const serviceLabel = SERVICE_LABELS[data.service] ?? data.service;
  const textBody = [
    'New contact form submission (hagestack.com)',
    '',
    `Name: ${data.name}`,
    `Email: ${data.email}`,
    `Phone: ${data.phone}`,
    `Company: ${data.company}`,
    `Service: ${serviceLabel}`,
    '',
    'Message:',
    data.message,
  ].join('\n');

  const htmlBody = `<pre style="font-family:system-ui,sans-serif;white-space:pre-wrap">${escapeHtml(textBody)}</pre>`;

  return { serviceLabel, textBody, htmlBody };
}

/** No API keys required — forwards to inbox via FormSubmit (first use may require email activation from FormSubmit). */
async function sendViaFormSubmit(
  toEmail: string,
  data: z.infer<typeof bodySchema>,
  serviceLabel: string,
  textBody: string,
): Promise<boolean> {
  const url = `https://formsubmit.co/ajax/${encodeURIComponent(toEmail)}`;
  const res = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({
      name: data.name,
      email: data.email,
      phone: data.phone,
      company: data.company,
      service: serviceLabel,
      message: textBody,
      _subject: `Contact: ${data.name} — ${serviceLabel}`,
      _replyto: data.email,
    }),
  });

  if (!res.ok) {
    const errText = await res.text();
    console.error('FormSubmit error:', res.status, errText);
    return false;
  }

  return true;
}

export async function GET() {
  const hasResend = Boolean(process.env.RESEND_API_KEY?.trim());
  const hasSmtp = Boolean(
    process.env.SMTP_HOST?.trim() &&
      process.env.SMTP_USER?.trim() &&
      process.env.SMTP_PASSWORD,
  );
  const inbox = process.env.CONTACT_EMAIL_TO ?? CONTACT_EMAIL;

  let delivery: 'resend' | 'smtp' | 'formsubmit';
  if (hasResend) delivery = 'resend';
  else if (hasSmtp) delivery = 'smtp';
  else delivery = 'formsubmit';

  return NextResponse.json({
    delivery,
    inbox,
    note:
      delivery === 'formsubmit'
        ? 'Uses FormSubmit as fallback (no Vercel env required). First submission may send an activation email from FormSubmit — click it once.'
        : delivery === 'resend'
          ? 'Uses Resend. Verify domain in Resend for production.'
          : 'Uses your Hostinger SMTP credentials from env.',
  });
}

export async function POST(request: Request) {
  let json: unknown;
  try {
    json = await request.json();
  } catch {
    return NextResponse.json({ error: 'Invalid request body' }, { status: 400 });
  }

  const parsed = bodySchema.safeParse(json);
  if (!parsed.success) {
    return NextResponse.json(
      { error: 'Validation failed', details: parsed.error.flatten() },
      { status: 400 },
    );
  }

  const data = parsed.data;
  const to = process.env.CONTACT_EMAIL_TO ?? CONTACT_EMAIL;
  const { serviceLabel, textBody, htmlBody } = buildBodies(data);

  const apiKey = process.env.RESEND_API_KEY?.trim();
  const fromResend =
    process.env.RESEND_FROM_EMAIL ?? 'HageStack <onboarding@resend.dev>';

  const smtpHost = process.env.SMTP_HOST;
  const smtpUser = process.env.SMTP_USER;
  const smtpPass = process.env.SMTP_PASSWORD;

  if (apiKey) {
    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: fromResend,
        to: [to],
        reply_to: data.email,
        subject: `Contact: ${data.name} — ${serviceLabel}`,
        text: textBody,
        html: htmlBody,
      }),
    });

    if (!res.ok) {
      const errText = await res.text();
      console.error('Resend error:', res.status, errText);
      return NextResponse.json({ error: 'Failed to send message' }, { status: 502 });
    }

    return NextResponse.json({ ok: true });
  }

  if (smtpHost && smtpUser && smtpPass) {
    const port = Number(process.env.SMTP_PORT ?? 587);
    const secure = process.env.SMTP_SECURE === 'true';

    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port,
      secure,
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
      connectionTimeout: 25_000,
      greetingTimeout: 25_000,
      socketTimeout: 25_000,
      requireTLS: !secure && port === 587,
      tls: { minVersion: 'TLSv1.2' as const },
    });

    const from =
      process.env.SMTP_FROM ?? `HageStack website <${smtpUser}>`;

    try {
      await transporter.sendMail({
        from,
        to,
        replyTo: data.email,
        subject: `Contact: ${data.name} — ${serviceLabel}`,
        text: textBody,
        html: htmlBody,
      });
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : String(err);
      console.error('SMTP error:', message);
      return NextResponse.json(
        {
          error:
            'Could not send email via SMTP. Check Vercel logs and SMTP_* env vars.',
          hint: message.includes('Invalid login')
            ? 'SMTP_USER / SMTP_PASSWORD rejected — update in Vercel.'
            : undefined,
        },
        { status: 502 },
      );
    }

    return NextResponse.json({ ok: true });
  }

  const ok = await sendViaFormSubmit(to, data, serviceLabel, textBody);
  if (ok) {
    return NextResponse.json({ ok: true });
  }

  return NextResponse.json(
    {
      error: 'Could not send message',
      mailtoFallback: true,
    },
    { status: 503 },
  );
}
