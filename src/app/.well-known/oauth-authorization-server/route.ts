import { NextResponse } from 'next/server';

const siteUrl = (process.env.NEXT_PUBLIC_URL || 'https://www.prathamranka.in').replace(/\/$/, '');

export function GET() {
  return NextResponse.json({
    issuer: siteUrl,
    status: 'not_supported',
    message: 'This portfolio does not operate an OAuth 2.0 or OpenID Connect authorization server.',
    grant_types_supported: [],
    response_types_supported: [],
    scopes_supported: [],
    agent_auth: {
      status: 'not_supported',
      register_uri: null,
      supported_identity_types: [],
      credential_types: [],
      claims_uri: null,
      revocation_uri: null,
      policy: `${siteUrl}/auth.md`,
    },
  });
}
