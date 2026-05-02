import { pageMetadata, siteConfig } from '@/config/Meta';
import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const routes: MetadataRoute.Sitemap = Object.keys(pageMetadata).map(
    (route) => ({
      url: `${siteConfig.url}${route === '/' ? '' : route}`,
      lastModified: new Date(),
      changeFrequency: route === '/' ? 'weekly' : 'monthly',
      priority: route === '/' ? 1 : 0.8,
    })
  );

  return routes;
}
