const DEFAULT_SITE_URL = 'https://hagestack.com';

/**
 * Canonical public site URL for metadata, sitemap, and Open Graph.
 * Accepts env values with or without `https://`, and ignores empty strings.
 */
export function resolvePublicSiteUrl(): string {
  const raw = process.env.NEXT_PUBLIC_SITE_URL?.trim().replace(/\/$/, '');
  if (!raw) return DEFAULT_SITE_URL;
  if (/^https?:\/\//i.test(raw)) return raw;
  return `https://${raw}`;
}
