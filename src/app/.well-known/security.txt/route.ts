export function GET() {
  const siteUrl = (process.env.NEXT_PUBLIC_URL || 'https://prathamranka.in').replace(/\/$/, '');
  return new Response([
    'Contact: mailto:prathamworks06@gmail.com',
    `Policy: ${siteUrl}/#contact`,
    'Preferred-Languages: en',
    `Canonical: ${siteUrl}/.well-known/security.txt`,
    `Expires: ${new Date(Date.now() + 1000 * 60 * 60 * 24 * 365).toISOString()}`,
  ].join('\n'), {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=86400, s-maxage=604800',
    },
  });
}
