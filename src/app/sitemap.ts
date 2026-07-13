import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const url = process.env.NEXT_PUBLIC_URL || 'https://www.prathamranka.in';
  return [{ url, lastModified: new Date(), changeFrequency: 'monthly', priority: 1 }];
}
