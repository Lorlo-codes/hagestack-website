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

/** Plain-text body used by API + FormSubmit (must stay in sync). */
export function buildContactMessageBody(data: ContactFormPayload): {
  serviceLabel: string;
  textBody: string;
} {
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
  return { serviceLabel, textBody };
}

/** FormSubmit must run in the browser so Origin/referrer work; server-side fetch often fails on Vercel. */
export async function deliverContactViaFormSubmit(
  data: ContactFormPayload,
  inboxEmail: string,
): Promise<boolean> {
  const { serviceLabel, textBody } = buildContactMessageBody(data);
  const url = `https://formsubmit.co/ajax/${encodeURIComponent(inboxEmail)}`;
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
      _captcha: false,
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
