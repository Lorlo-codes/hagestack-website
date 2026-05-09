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

export function buildContactMailto(data: ContactFormPayload): string {
  const serviceLabel = SERVICE_LABELS[data.service] ?? data.service;
  const subject = `Inquiry from ${data.name} (${serviceLabel})`;
  const body = [
    `Name: ${data.name}`,
    `Email: ${data.email}`,
    `Phone: ${data.phone}`,
    `Company: ${data.company}`,
    `Service interest: ${serviceLabel}`,
    '',
    'Message:',
    data.message,
  ].join('\n');
  return `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}
