import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  const url = process.env.NEXT_PUBLIC_URL || 'https://www.prathamranka.in';
  return {
    rules: [
      {
        userAgent: '*',
        allow: ['/', '/llms.txt', '/sitemap.xml', '/feed.xml', '/updates.xml', '/api/', '/.well-known/'],
        disallow: ['/api/github/'],
      },
      {
        userAgent: [
          'GPTBot',
          'OAI-SearchBot',
          'ChatGPT-User',
          'ClaudeBot',
          'Claude-SearchBot',
          'PerplexityBot',
          'Google-Extended',
          'Amazonbot',
          'Bytespider',
        ],
        allow: ['/', '/llms.txt', '/sitemap.xml', '/feed.xml', '/updates.xml', '/api/', '/.well-known/'],
        disallow: ['/api/github/'],
      },
      {
        userAgent: 'Googlebot-Image',
        allow: ['/assets/', '/icons/', '/social/'],
      },
    ],
    sitemap: `${url}/sitemap.xml`,
    host: url,
  };
}
