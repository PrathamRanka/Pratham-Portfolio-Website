import { NextResponse } from 'next/server';

import { projects } from '@/data/portfolio';

export function GET() {
  return NextResponse.json({
    schemaVersion: '1.0',
    lastUpdated: new Date().toISOString(),
    projects,
  });
}
