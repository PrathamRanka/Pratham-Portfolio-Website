import { createHash } from 'node:crypto';
import { NextResponse } from 'next/server';

const siteUrl = (process.env.NEXT_PUBLIC_URL || 'https://www.prathamranka.in').replace(/\/$/, '');
const definitions = [
  ['profile-discovery', 'Read the structured public profile.', '/api/profile'],
  ['project-discovery', 'Read public software project details.', '/api/projects'],
  ['contact-draft', 'Prepare a human-reviewed contact email draft.', '/api/agent'],
].map(([name, description, path]) => {
  const digest = createHash('sha256').update(`${name}:${description}:${path}`).digest('hex');
  return { name, type: 'http', description, url: `${siteUrl}${path}`, sha256: digest };
});

export function GET() {
  return NextResponse.json({
    $schema: 'https://agentskills.io/schemas/agent-skills-index.json',
    skills: definitions,
  });
}
