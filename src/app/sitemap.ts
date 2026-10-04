import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const url = process.env.NEXT_PUBLIC_URL || 'https://www.prathamranka.in';
  return [
    {
      url,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
      images: [`${url}/social/pratham-ranka-og.png`, `${url}/assets/pfp.webp`],
    },
    {
      url: `${url}/projects/agentpay`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${url}/feed.xml`,
      changeFrequency: 'daily',
      priority: 0.4,
    },
  ];
}
