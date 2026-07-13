import { NextResponse } from 'next/server';

import { getGithubContributions, getGithubStats, githubUsername } from '@/lib/external-data';
import { renderGithubHeatmap } from '@/lib/github-heatmap';

export const revalidate = 300;

export async function GET() {
  const [contributions, stats] = await Promise.all([
    getGithubContributions(),
    getGithubStats(),
  ]);
  const svg = renderGithubHeatmap(contributions.days, stats, githubUsername);

  return new NextResponse(svg, {
    headers: {
      'Content-Type': 'image/svg+xml; charset=utf-8',
      'Cache-Control': 'public, s-maxage=300, stale-while-revalidate=60',
      'Content-Security-Policy': "default-src 'none'; style-src 'unsafe-inline'",
    },
  });
}
