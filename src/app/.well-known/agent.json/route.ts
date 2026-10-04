import { NextResponse } from 'next/server';

export function GET() {
  const siteUrl = (process.env.NEXT_PUBLIC_URL || 'https://www.prathamranka.in').replace(/\/$/, '');
  return NextResponse.json({
    schema_version: '1.0',
    name: 'Pratham Ranka portfolio agent interface',
    description: 'Public machine-readable profile and human-approved professional contact actions.',
    endpoints: {
      profile: `${siteUrl}/llms.txt`,
      structuredProfile: `${siteUrl}/api/profile`,
      projects: `${siteUrl}/api/projects`,
      capabilities: `${siteUrl}/api/agent`,
      contact: `${siteUrl}/api/agent`,
      feed: `${siteUrl}/feed.xml`,
      security: `${siteUrl}/.well-known/security.txt`,
      apiCatalog: `${siteUrl}/.well-known/api-catalog`,
      aiCatalog: `${siteUrl}/.well-known/ai-catalog.json`,
      mcpServerCard: `${siteUrl}/.well-known/mcp/server-card.json`,
      agentSkills: `${siteUrl}/.well-known/agent-skills/index.json`,
      oauthProtectedResource: `${siteUrl}/.well-known/oauth-protected-resource`,
    },
    policy: {
      contact_requires_human_confirmation: true,
      no_email_is_sent_automatically: true,
      public_data_only: true,
    },
  });
}
