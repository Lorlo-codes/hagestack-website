export const CONTACT_EMAIL = 'info@hagestack.com' as const;

export const SERVICE_LABELS: Record<string, string> = {
  website: 'Website Development',
  custom: 'Custom Systems',
  security: 'Security Solutions',
  attendance: 'Attendance Systems',
  access: 'Entry Pass Systems',
  hardware: 'Hardware Supplies',
  consulting: 'IT Consulting',
  other: 'Other',
};

export type ContactFormPayload = {
  name: string;
  email: string;
  phone: string;
  company: string;
  service: string;
  message: string;
};

/** Plain-text body for Resend / SMTP / mailto — single readable block, no duplicated fields. */
export function buildContactMessageBody(data: ContactFormPayload): {
  serviceLabel: string;
  textBody: string;
} {
  const serviceLabel = SERVICE_LABELS[data.service] ?? data.service;
  const textBody = [
    `hagestack.com contact form — ${serviceLabel}`,
    '',
    `${data.name} · ${data.email} · ${data.phone}`,
    `Company: ${data.company}`,
    '',
    data.message,
  ].join('\n');
  return { serviceLabel, textBody };
}

/** FormSubmit must run in the browser so Origin/referrer work; server-side fetch often fails on Vercel. */
export async function deliverContactViaFormSubmit(
  data: ContactFormPayload,
  inboxEmail: string,
): Promise<boolean> {
  const { serviceLabel } = buildContactMessageBody(data);
  const url = `https://formsubmit.co/ajax/${encodeURIComponent(inboxEmail)}`;
  /* One field per row — `message` is only the visitor’s text (no duplicate name/email block). */
  const res = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({
      Name: data.name,
      Email: data.email,
      Phone: data.phone,
      Company: data.company,
      Service: serviceLabel,
      Message: data.message,
      _subject: `hagestack.com · ${serviceLabel} · ${data.name}`,
      _replyto: data.email,
      _captcha: false,
      _template: 'table',
    }),
  });

  if (!res.ok) return false;
  try {
    const j = (await res.json()) as { success?: boolean | string; error?: string };
    if (j.success === false || j.error) return false;
  } catch {
    /* FormSubmit sometimes returns empty body on success */
  }
  return true;
}

export function buildContactMailto(data: ContactFormPayload): string {
  const { serviceLabel, textBody } = buildContactMessageBody(data);
  const subject = `Inquiry from ${data.name} (${serviceLabel})`;
  return `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(textBody)}`;
}
