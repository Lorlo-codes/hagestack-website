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

  const apiKey = process.env.RESEND_API_KEY;
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
    } catch (err) {
      console.error('SMTP error:', err);
      return NextResponse.json({ error: 'Failed to send message' }, { status: 502 });
    }

    return NextResponse.json({ ok: true });
  }

  return NextResponse.json(
    { error: 'Email delivery is not configured', mailtoFallback: true },
    { status: 503 },
  );
}
