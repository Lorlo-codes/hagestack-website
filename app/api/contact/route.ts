import { NextResponse } from 'next/server';

const MAX_LEN = 8000;
const MAX_SUBJECT = 200;

function isNonEmptyString(v: unknown): v is string {
  return typeof v === 'string' && v.trim().length > 0;
}

function escapeHtml(s: string) {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

export async function POST(request: Request) {
  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.RESEND_FROM_EMAIL;
  const to = process.env.CONTACT_TO_EMAIL ?? 'info@hagestack.com';

  if (!apiKey || !from) {
    return NextResponse.json(
      {
        error:
          'Contact email is not configured. Set RESEND_API_KEY and RESEND_FROM_EMAIL in the server environment (e.g. Vercel).',
      },
      { status: 503 },
    );
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: 'Invalid request body.' }, { status: 400 });
  }

  if (!body || typeof body !== 'object') {
    return NextResponse.json({ error: 'Invalid payload.' }, { status: 400 });
  }

  const { name, email, company, message, needs } = body as Record<string, unknown>;

  if (!isNonEmptyString(name) || !isNonEmptyString(email)) {
    return NextResponse.json({ error: 'Name and email are required.' }, { status: 400 });
  }

  const emailTrim = email.trim();
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailTrim)) {
    return NextResponse.json({ error: 'Invalid email address.' }, { status: 400 });
  }

  const companyStr = typeof company === 'string' ? company.trim() : '';
  const messageStr = typeof message === 'string' ? message.trim() : '';
  const needsArr = Array.isArray(needs) ? needs.filter((n): n is string => typeof n === 'string') : [];

  if (messageStr.length > MAX_LEN) {
    return NextResponse.json({ error: 'Message is too long.' }, { status: 400 });
  }

  const text = [
    `Name: ${name.trim()}`,
    `Email: ${emailTrim}`,
    `Company: ${companyStr || '—'}`,
    `Selected needs: ${needsArr.length ? needsArr.join(', ') : '—'}`,
    '',
    'Message:',
    messageStr || '—',
  ].join('\n');

  const subjectBase = `Website contact: ${name.trim()}`;
  const subject =
    subjectBase.length > MAX_SUBJECT ? `${subjectBase.slice(0, MAX_SUBJECT - 1)}…` : subjectBase;

  const html = `<pre style="font-family:ui-monospace,system-ui,monospace;font-size:14px;line-height:1.5;white-space:pre-wrap">${escapeHtml(text)}</pre>`;

  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from,
      to: [to],
      reply_to: [emailTrim],
      subject,
      text,
      html,
    }),
  });

  if (!res.ok) {
    const errText = await res.text().catch(() => '');
    console.error('Resend API error', res.status, errText);
    return NextResponse.json({ error: 'Could not send your message. Please try again later.' }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
