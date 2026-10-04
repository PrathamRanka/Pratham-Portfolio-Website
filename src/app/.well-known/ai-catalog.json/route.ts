import { NextResponse } from 'next/server';

const siteUrl = (process.env.NEXT_PUBLIC_URL || 'https://www.prathamranka.in').replace(/\/$/, '');

export function GET() {
  return NextResponse.json({
    specVersion: '0.1',
    host: { name: 'Pratham Ranka', url: siteUrl },
    entries: [
      {
        id: 'urn:air:prathamranka.in:portfolio:profile',
        displayName: 'Structured portfolio profile',
        type: 'application/json',
        url: `${siteUrl}/api/profile`,
        representativeQueries: ['Who is Pratham Ranka?', 'What skills does Pratham Ranka have?', 'Where is Pratham Ranka based?'],
      },
      {
        id: 'urn:air:prathamranka.in:portfolio:projects',
        displayName: 'Portfolio projects',
        type: 'application/json',
        url: `${siteUrl}/api/projects`,
        representativeQueries: ['What projects has Pratham Ranka built?', 'Show AgentPay details.', 'Which projects use Go?'],
      },
      {
        id: 'urn:air:prathamranka.in:portfolio:agent',
        displayName: 'Portfolio agent actions',
        type: 'application/json',
        url: `${siteUrl}/api/agent`,
        representativeQueries: ['How can I contact Pratham Ranka?', 'Prepare a professional inquiry.', 'What actions does this portfolio support?'],
      },
    ],
  });
}
