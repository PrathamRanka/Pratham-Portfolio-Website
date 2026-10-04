import type { MetadataRoute } from 'next';

import { projects } from '@/data/portfolio';

const siteUrl = (process.env.NEXT_PUBLIC_URL || 'https://www.prathamranka.in').replace(/\/$/, '');
const lastModified = new Date('2026-10-04T00:00:00.000Z');

type SitemapEntry = MetadataRoute.Sitemap[number];

function entry(
  path: string,
  options: Omit<SitemapEntry, 'url'> = {},
): SitemapEntry {
  return {
    url: `${siteUrl}${path}`,
    lastModified,
    ...options,
  };
}

export default function sitemap(): MetadataRoute.Sitemap {
  const caseStudies = projects
    .filter((project): project is typeof project & { caseStudy: string } => Boolean(project.caseStudy))
    .map((project) => entry(project.caseStudy, {
      changeFrequency: 'monthly',
      priority: 0.8,
    }));

  return [
    // Human-facing canonical pages.
    entry('/', {
      changeFrequency: 'weekly',
      priority: 1,
      images: [`${siteUrl}/social/pratham-ranka-og.png`, `${siteUrl}/assets/pfp.webp`],
    }),
    ...caseStudies,

    // Feeds and machine-readable resources for agents and LLMs.
    entry('/llms.txt', { changeFrequency: 'weekly', priority: 0.7 }),
    entry('/feed.xml', { changeFrequency: 'daily', priority: 0.5 }),
    entry('/updates.xml', { changeFrequency: 'daily', priority: 0.4 }),
    entry('/api/profile', { changeFrequency: 'weekly', priority: 0.6 }),
    entry('/api/projects', { changeFrequency: 'weekly', priority: 0.6 }),
    entry('/api/agent', { changeFrequency: 'weekly', priority: 0.6 }),
    entry('/.well-known/agent.json', { changeFrequency: 'weekly', priority: 0.7 }),
    entry('/.well-known/ai-catalog.json', { changeFrequency: 'weekly', priority: 0.6 }),
    entry('/.well-known/api-catalog', { changeFrequency: 'weekly', priority: 0.6 }),
    entry('/.well-known/agent-skills/index.json', { changeFrequency: 'monthly', priority: 0.4 }),
    entry('/.well-known/mcp/server-card.json', { changeFrequency: 'monthly', priority: 0.4 }),
    entry('/.well-known/security.txt', { changeFrequency: 'monthly', priority: 0.3 }),
    entry('/auth.md', { changeFrequency: 'monthly', priority: 0.4 }),
    entry('/.well-known/oauth-protected-resource', { changeFrequency: 'monthly', priority: 0.3 }),
    entry('/.well-known/oauth-authorization-server', { changeFrequency: 'monthly', priority: 0.3 }),
    entry('/.well-known/openid-configuration', { changeFrequency: 'monthly', priority: 0.3 }),
  ];
}
