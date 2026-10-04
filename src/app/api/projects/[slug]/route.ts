import { NextResponse } from 'next/server';

import { projects } from '@/data/portfolio';

export async function GET(
  _request: Request,
  context: { params: Promise<{ slug: string }> },
) {
  const { slug } = await context.params;
  const project = projects.find((item) => item.name.toLowerCase().replace(/\s+/g, '-') === slug);

  if (!project) {
    return NextResponse.json({ error: 'Project not found.' }, { status: 404 });
  }

  return NextResponse.json({
    schemaVersion: '1.0',
    lastUpdated: new Date().toISOString(),
    project,
  });
}
