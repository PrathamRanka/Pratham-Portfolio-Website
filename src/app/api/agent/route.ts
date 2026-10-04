import { NextResponse } from 'next/server';

const siteUrl = (process.env.NEXT_PUBLIC_URL || 'https://www.prathamranka.in').replace(/\/$/, '');
const email = 'prathamworks06@gmail.com';

const capabilities = {
  name: 'Pratham Ranka portfolio agent interface',
  version: '1.0',
  description: 'Machine-readable profile discovery and human-approved contact handoff.',
  profile: `${siteUrl}/llms.txt`,
  structuredProfile: `${siteUrl}/api/profile`,
  projects: `${siteUrl}/api/projects`,
  homepage: siteUrl,
  capabilities: [
    {
      name: 'get_profile',
      method: 'GET',
      url: `${siteUrl}/llms.txt`,
      description: 'Read the canonical public profile and portfolio data.',
    },
    {
      name: 'get_capabilities',
      method: 'GET',
      url: `${siteUrl}/api/agent`,
      description: 'Discover available machine-callable actions.',
    },
    {
      name: 'get_structured_profile',
      method: 'GET',
      url: `${siteUrl}/api/profile`,
      description: 'Read structured profile, experience, project, skill, and contact data.',
    },
    {
      name: 'get_projects',
      method: 'GET',
      url: `${siteUrl}/api/projects`,
      description: 'Read the public project index.',
    },
    {
      name: 'contact',
      method: 'POST',
      url: `${siteUrl}/api/agent`,
      description: 'Create a prefilled email handoff for a professional inquiry. Does not send email.',
      input: {
        type: 'object',
        properties: {
          subject: { type: 'string', maxLength: 160 },
          message: { type: 'string', maxLength: 4000 },
        },
        required: ['message'],
      },
    },
  ],
  contact: {
    email,
    page: `${siteUrl}/#contact`,
  },
};

export function GET() {
  return NextResponse.json(capabilities);
}

export async function POST(request: Request) {
  let body: { action?: unknown; subject?: unknown; message?: unknown };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: 'Request body must be valid JSON.' }, { status: 400 });
  }

  if (body.action !== 'contact') {
    return NextResponse.json(
      { error: 'Unsupported action. Use action "contact".', actions: ['contact'] },
      { status: 400 },
    );
  }

  if (typeof body.message !== 'string' || body.message.trim().length === 0 || body.message.length > 4000) {
    return NextResponse.json(
      { error: 'A non-empty message up to 4000 characters is required.' },
      { status: 400 },
    );
  }

  const subject = typeof body.subject === 'string' && body.subject.trim().length > 0
    ? body.subject.trim().slice(0, 160)
    : 'Professional inquiry for Pratham Ranka';
  const mailto = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body.message.trim())}`;

  return NextResponse.json({
    action: 'contact',
    status: 'ready_for_human_confirmation',
    message: 'Draft created. Open the mailto URL to review and send it.',
    recipient: email,
    mailto,
  });
}
