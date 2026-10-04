import { NextResponse } from 'next/server';

const siteUrl = (process.env.NEXT_PUBLIC_URL || 'https://prathamranka.in').replace(/\/$/, '');

export function GET() {
  return NextResponse.json({
    serverInfo: { name: 'Pratham Ranka Portfolio', version: '1.0.0' },
    description: 'Read public portfolio data and prepare a human-reviewed contact draft.',
    transport: { type: 'https', endpoint: `${siteUrl}/api/agent` },
    capabilities: {
      tools: {
        get_profile: { description: 'Read the structured public profile.' },
        get_projects: { description: 'Read public project data.' },
        prepare_contact_draft: { description: 'Prepare, but never send, a contact email draft.' },
      },
    },
    authentication: { required: false },
  });
}
