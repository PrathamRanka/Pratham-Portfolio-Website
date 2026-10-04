import { NextResponse } from 'next/server';

const siteUrl = (process.env.NEXT_PUBLIC_URL || 'https://www.prathamranka.in').replace(/\/$/, '');

export function GET() {
  return NextResponse.json({
    linkset: [
      {
        anchor: `${siteUrl}/api/agent`,
        serviceDesc: [{ href: `${siteUrl}/.well-known/agent.json`, type: 'application/json' }],
        serviceDoc: [{ href: `${siteUrl}/llms.txt`, type: 'text/plain' }],
        status: [{ href: `${siteUrl}/api/agent`, type: 'application/json' }],
      },
      {
        anchor: `${siteUrl}/api/profile`,
        serviceDesc: [{ href: `${siteUrl}/api/profile`, type: 'application/json' }],
        serviceDoc: [{ href: `${siteUrl}/llms.txt`, type: 'text/plain' }],
        status: [{ href: `${siteUrl}/api/profile`, type: 'application/json' }],
      },
      {
        anchor: `${siteUrl}/api/projects`,
        serviceDesc: [{ href: `${siteUrl}/api/projects`, type: 'application/json' }],
        serviceDoc: [{ href: `${siteUrl}/llms.txt`, type: 'text/plain' }],
        status: [{ href: `${siteUrl}/api/projects`, type: 'application/json' }],
      },
    ],
  }, { headers: { 'Content-Type': 'application/linkset+json; charset=utf-8' } });
}
