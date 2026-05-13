import type { MetadataRoute } from 'next';

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, '') ?? 'https://hagestack.com';

const routes = [
  { path: '/', changeFrequency: 'weekly' as const, priority: 1 },
  { path: '/services', changeFrequency: 'monthly' as const, priority: 0.9 },
  { path: '/about', changeFrequency: 'monthly' as const, priority: 0.85 },
  { path: '/portfolio', changeFrequency: 'monthly' as const, priority: 0.85 },
  { path: '/contact', changeFrequency: 'monthly' as const, priority: 0.9 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map(({ path, changeFrequency, priority }) => ({
    url: path === '/' ? `${siteUrl}/` : `${siteUrl}${path}`,
    lastModified: new Date(),
    changeFrequency,
    priority,
  }));
}
