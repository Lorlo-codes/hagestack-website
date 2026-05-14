import { resolvePublicSiteUrl } from '@/lib/site-url';

function getBaseUrl(): string {
  

  return "https://hagestack.com";
}

export default function sitemap() {
  const base = getBaseUrl();
  const now = new Date();

  const paths = [
    { path: '', priority: 1, changeFrequency: 'weekly' as const },
    { path: '/services', priority: 0.9, changeFrequency: 'weekly' as const },
    { path: '/about', priority: 0.85, changeFrequency: 'monthly' as const },
    { path: '/portfolio', priority: 0.85, changeFrequency: 'weekly' as const },
    { path: '/contact', priority: 0.9, changeFrequency: 'monthly' as const },
  ];

  return paths.map(({ path, priority, changeFrequency }) => ({
    url: path === '' ? `${base}/` : `${base}${path}`,
    lastModified: now,
    changeFrequency,
    priority,
  }));
}
