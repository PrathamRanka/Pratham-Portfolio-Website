import { experience, projects } from '@/data/portfolio';

const siteUrl = (process.env.NEXT_PUBLIC_URL || 'https://prathamranka.in').replace(/\/$/, '');

function escapeXml(value: string) {
  return value.replace(/[<>&'"]/g, (character) => ({
    '<': '&lt;',
    '>': '&gt;',
    '&': '&amp;',
    "'": '&apos;',
    '"': '&quot;',
  }[character] || character));
}

export function GET() {
  const items = [
    ...projects.map((project) => ({
      title: project.name,
      description: project.description,
      link: project.caseStudy ? `${siteUrl}${project.caseStudy}` : project.github,
    })),
    ...experience.map((item) => ({
      title: `${item.role} — ${item.company}`,
      description: item.description,
      link: `${siteUrl}/#experience`,
    })),
  ];
  const updated = new Date().toUTCString();
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0"><channel>
<title>Pratham Ranka — Engineering updates</title>
<link>${siteUrl}</link>
<description>Public projects and engineering experience from Pratham Ranka.</description>
<language>en-IN</language><lastBuildDate>${updated}</lastBuildDate>
${items.map((item) => `<item><title>${escapeXml(item.title)}</title><description>${escapeXml(item.description)}</description><link>${escapeXml(item.link)}</link><guid>${escapeXml(item.link)}</guid><pubDate>${updated}</pubDate></item>`).join('')}
</channel></rss>`;
  return new Response(xml, {
    headers: {
      'Content-Type': 'application/rss+xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, s-maxage=86400',
    },
  });
}
