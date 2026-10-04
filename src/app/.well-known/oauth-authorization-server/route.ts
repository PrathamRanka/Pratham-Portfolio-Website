import { NextResponse } from 'next/server';

const siteUrl = (process.env.NEXT_PUBLIC_URL || 'https://www.prathamranka.in').replace(/\/$/, '');

export function GET() {
  return NextResponse.json({
    issuer: siteUrl,
    authorization_endpoint: `${siteUrl}/auth.md`,
    token_endpoint: `${siteUrl}/auth.md`,
    jwks_uri: `${siteUrl}/auth.md`,
    grant_types_supported: [],
    response_types_supported: [],
    scopes_supported: [],
    registration_endpoint: `${siteUrl}/auth.md`,
    agent_auth: {
      status: 'not_required',
      register_uri: null,
      supported_identity_types: [],
      credential_types: [],
      claims_uri: null,
      revocation_uri: null,
      policy: `${siteUrl}/auth.md`,
    },
  });
}
