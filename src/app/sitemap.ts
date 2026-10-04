import type { MetadataRoute } from 'next';

import { projects } from '@/data/portfolio';

const siteUrl = 'https://www.prathamranka.in';

type SitemapEntry = MetadataRoute.Sitemap[number];

function entry(
  path: string,
  options: Omit<SitemapEntry, 'url'> = {},
): SitemapEntry {
  return {
    url: `${siteUrl}${path}`,
    ...options,
  };
}

export default function sitemap(): MetadataRoute.Sitemap {
  const caseStudies = projects
    .filter((project) => project.caseStudy)
    .map((project) => entry(project.caseStudy!, {
      changeFrequency: 'monthly',
      priority: 0.8,
    }));

  return [
    // Only canonical, indexable HTML pages belong in Google's sitemap.
    entry('/', {
      changeFrequency: 'weekly',
      priority: 1,
      images: [`${siteUrl}/social/pratham-ranka-og.png`, `${siteUrl}/assets/pfp.webp`],
    }),
    ...caseStudies,
  ];
}
