import type { MetadataRoute } from "next";

function baseUrl(): string {
  return "https://hagestack.com";
}

export default function sitemap(): MetadataRoute.Sitemap {
  const root = baseUrl();
  const now = new Date();

  const paths: { path: string; changeFrequency: MetadataRoute.Sitemap[0]["changeFrequency"]; priority: number }[] = [
    { path: "/", changeFrequency: "weekly", priority: 1 },
    { path: "/services", changeFrequency: "monthly", priority: 0.9 },
    { path: "/portfolio", changeFrequency: "monthly", priority: 0.9 },
    { path: "/pricing", changeFrequency: "monthly", priority: 0.8 },
    { path: "/about", changeFrequency: "monthly", priority: 0.8 },
    { path: "/contact", changeFrequency: "monthly", priority: 0.8 },
  ];

  return paths.map(({ path, changeFrequency, priority }) => ({
    url: `${root}${path === "/" ? "" : path}`,
    lastModified: now,
    changeFrequency,
    priority,
  }));
}
