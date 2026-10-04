import { NextResponse } from 'next/server';

const siteUrl = (process.env.NEXT_PUBLIC_URL || 'https://www.prathamranka.in').replace(/\/$/, '');

export function GET() {
  return NextResponse.json({
    resource: siteUrl,
    authorization_servers: [],
    scopes_supported: [],
    bearer_methods_supported: [],
    resource_name: 'Pratham Ranka public portfolio APIs',
    authentication_required: false,
    resource_documentation: `${siteUrl}/auth.md`,
    documentation: `${siteUrl}/auth.md`,
  });
}
