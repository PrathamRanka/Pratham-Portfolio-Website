import { NextResponse, type NextRequest } from 'next/server';

const homepageMarkdown = `# Pratham Ranka — Backend Engineer

Pratham Ranka is a software engineer in India building distributed systems, production infrastructure, developer tools, and open-source software.

## Machine-readable resources

- Profile: https://www.prathamranka.in/api/profile
- Projects: https://www.prathamranka.in/api/projects
- Agent capabilities: https://www.prathamranka.in/api/agent
- Discovery manifest: https://www.prathamranka.in/.well-known/agent.json
- API catalog: https://www.prathamranka.in/.well-known/api-catalog
- Contact: mailto:prathamworks06@gmail.com
`;

const robots = `User-agent: *
Allow: /
Allow: /llms.txt
Allow: /sitemap.xml
Allow: /feed.xml
Allow: /updates.xml
Allow: /api/
Allow: /.well-known/
Disallow: /api/github/

User-agent: GPTBot
Allow: /
Allow: /api/
Allow: /.well-known/
Disallow: /api/github/

User-agent: OAI-SearchBot
Allow: /
Allow: /api/
Allow: /.well-known/
Disallow: /api/github/

User-agent: ClaudeBot
Allow: /
Allow: /api/
Allow: /.well-known/
Disallow: /api/github/

User-agent: PerplexityBot
Allow: /
Allow: /api/
Allow: /.well-known/
Disallow: /api/github/

Content-Signal: ai-train=no, search=yes, ai-input=yes
Sitemap: https://www.prathamranka.in/sitemap.xml
`;

export function middleware(request: NextRequest) {
  if (request.nextUrl.pathname === '/robots.txt') {
    return new NextResponse(robots, {
      headers: { 'Content-Type': 'text/plain; charset=utf-8' },
    });
  }

  const acceptsMarkdown = request.headers.get('accept')?.includes('text/markdown');
  if (acceptsMarkdown && request.nextUrl.pathname === '/') {
    return new NextResponse(homepageMarkdown, {
      headers: {
        'Content-Type': 'text/markdown; charset=utf-8',
        'X-Markdown-Tokens': String(homepageMarkdown.length),
        'Vary': 'Accept',
        'Link': '</api/profile>; rel="service-desc", </.well-known/api-catalog>; rel="service-doc"',
      },
    });
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/robots.txt', '/'],
};
