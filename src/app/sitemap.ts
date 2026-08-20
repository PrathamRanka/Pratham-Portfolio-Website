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
  ];
}
