import type { ContributionDay, GithubStats } from './external-data';

const palette = ['#161b22', '#0e4429', '#006d32', '#26a641', '#39d353', '#69f0a0'];
const cell = 12;
const gap = 3;
const step = cell + gap;
const pad = 22;
const leftLabelWidth = 30;
const topLabelHeight = 20;
const titlebarHeight = 30;

type GridCell = ContributionDay | null;

function escapeXml(value: string) {
  return value.replace(/[<>&'"]/g, (character) => ({
    '<': '&lt;',
    '>': '&gt;',
    '&': '&amp;',
    "'": '&apos;',
    '"': '&quot;',
  })[character] ?? character);
}

function levelFor(count: number) {
  if (count === 0) return 0;
  if (count <= 5) return 1;
  if (count <= 15) return 2;
  if (count <= 30) return 3;
  if (count <= 50) return 4;
  return 5;
}

function buildGrid(days: ContributionDay[]) {
  const first = new Date(`${days[0].date}T00:00:00Z`);
  const grid: GridCell[][] = [];
  let column: GridCell[] = Array(first.getUTCDay()).fill(null);

  for (const day of days) {
    const weekday = new Date(`${day.date}T00:00:00Z`).getUTCDay();
    while (column.length < weekday) column.push(null);
    column.push(day);
    if (column.length === 7) {
      grid.push(column);
      column = [];
    }
  }

  if (column.length) {
    while (column.length < 7) column.push(null);
    grid.push(column);
  }
  return grid;
}

function formatDate(date: Date) {
  return date.toISOString().slice(0, 10);
}

function calculateStreaks(days: ContributionDay[]) {
  let longest = 0;
  let running = 0;
  for (const day of days) {
    running = day.count > 0 ? running + 1 : 0;
    longest = Math.max(longest, running);
  }

  const today = new Date();
  today.setUTCHours(0, 0, 0, 0);
  const yesterday = new Date(today);
  yesterday.setUTCDate(today.getUTCDate() - 1);
  const byDate = new Map(days.map((day) => [day.date, day.count]));
  let cursor = byDate.get(formatDate(today)) ? today : yesterday;
  let current = 0;
  while ((byDate.get(formatDate(cursor)) ?? 0) > 0) {
    current += 1;
    cursor = new Date(cursor);
    cursor.setUTCDate(cursor.getUTCDate() - 1);
  }

  return { current, longest };
}

export function renderGithubHeatmap(days: ContributionDay[], stats: GithubStats | null, username: string) {
  if (!days.length) return renderUnavailableHeatmap();

  const grid = buildGrid(days);
  const columns = grid.length;
  const artWidth = columns * step;
  const artHeight = 7 * step;
  const canvasWidth = pad + leftLabelWidth + artWidth + pad;
  const statsHeight = 112;
  const canvasHeight = titlebarHeight + topLabelHeight + artHeight + statsHeight + pad;
  const gridTop = titlebarHeight + topLabelHeight;
  const gridLeft = pad + leftLabelWidth;
  const streaks = calculateStreaks(days);
  const total = days.reduce((sum, day) => sum + day.count, 0);
  const best = days.reduce((winner, day) => day.count > winner.count ? day : winner, days[0]);
  const monthLabels: { column: number; label: string }[] = [];
  const seenMonths = new Set<string>();

  grid.forEach((column, columnIndex) => {
    const datedCell = column.find(Boolean);
    if (!datedCell) return;
    const date = new Date(`${datedCell.date}T00:00:00Z`);
    const key = `${date.getUTCFullYear()}-${date.getUTCMonth()}`;
    if (!seenMonths.has(key) && date.getUTCDate() <= 7) {
      seenMonths.add(key);
      monthLabels.push({
        column: columnIndex,
        label: date.toLocaleString('en-US', { month: 'short', timeZone: 'UTC' }),
      });
    }
  });

  const cells: string[] = [];
  grid.forEach((column, columnIndex) => {
    column.forEach((day, rowIndex) => {
      if (!day) return;
      const x = gridLeft + columnIndex * step;
      const y = gridTop + rowIndex * step;
      const delay = columnIndex * 0.018 + rowIndex * 0.045;
      const plural = day.count === 1 ? '' : 's';
      cells.push(
        `<rect class="c" x="${x}" y="${y}" width="${cell}" height="${cell}" rx="2.5" fill="${palette[levelFor(day.count)]}" style="animation-delay:${delay.toFixed(3)}s"><title>${day.date}: ${day.count} contribution${plural}</title></rect>`,
      );
    });
  });

  const legendY = gridTop + artHeight + 6;
  const legendX = canvasWidth - pad - (palette.length * (cell - 1) + 70);
  const separatorY = legendY + cell + 14;
  const statsY = separatorY + 24;
  const profileStats = stats
    ? `${stats.repositories} repos · ${stats.stars} stars · ${stats.followers} followers · ${stats.forks} forks`
    : 'public profile totals temporarily unavailable';

  return `<svg xmlns="http://www.w3.org/2000/svg" width="${canvasWidth}" height="${canvasHeight}" viewBox="0 0 ${canvasWidth} ${canvasHeight}" font-family="ui-monospace, SFMono-Regular, Menlo, Consolas, monospace" role="img" aria-labelledby="title description">
  <title id="title">${escapeXml(username)} GitHub contribution heatmap</title>
  <desc id="description">${total.toLocaleString('en-US')} public contributions from ${days[0].date} to ${days.at(-1)?.date}</desc>
  <style>@keyframes cell{0%{opacity:0;transform:translateY(-6px)}100%{opacity:1;transform:translateY(0)}}.c{opacity:0;animation:cell .42s cubic-bezier(.2,.8,.2,1) both}@media(prefers-reduced-motion:reduce){.c{opacity:1;animation:none}}</style>
  <defs><linearGradient id="hbg" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#0d1420"/><stop offset="1" stop-color="#0a0e14"/></linearGradient></defs>
  <rect width="${canvasWidth}" height="${canvasHeight}" rx="12" fill="url(#hbg)"/>
  <rect x=".5" y=".5" width="${canvasWidth - 1}" height="${canvasHeight - 1}" rx="12" fill="none" stroke="#1f6feb" stroke-width="1" stroke-opacity=".55"/>
  <line x1="0" y1="${titlebarHeight}" x2="${canvasWidth}" y2="${titlebarHeight}" stroke="#1f6feb" stroke-opacity=".35"/>
  ${['#ff5f56', '#ffbd2e', '#27c93f'].map((color, index) => `<circle cx="${pad + index * 16}" cy="${titlebarHeight / 2}" r="5" fill="${color}"/>`).join('')}
  <text x="${canvasWidth / 2}" y="${titlebarHeight / 2 + 4}" fill="#7d8590" font-size="12" text-anchor="middle">${escapeXml(username.toLowerCase())}@github: ~/contributions --graph</text>
  ${monthLabels.map(({ column, label }) => `<text x="${gridLeft + column * step}" y="${titlebarHeight + 14}" fill="#7d8590" font-size="10">${label}</text>`).join('')}
  ${[[1, 'Mon'], [3, 'Wed'], [5, 'Fri']].map(([weekday, label]) => `<text x="${pad}" y="${gridTop + Number(weekday) * step + cell * .78}" fill="#7d8590" font-size="9">${label}</text>`).join('')}
  ${cells.join('')}
  <text x="${legendX}" y="${legendY + cell * .8}" fill="#7d8590" font-size="10" text-anchor="end">Less</text>
  ${palette.map((color, index) => `<rect x="${legendX + 8 + index * cell}" y="${legendY}" width="${cell - 1}" height="${cell - 1}" rx="2.2" fill="${color}"/>`).join('')}
  <text x="${legendX + 8 + palette.length * cell + 4}" y="${legendY + cell * .8}" fill="#7d8590" font-size="10">More</text>
  <line x1="0" y1="${separatorY}" x2="${canvasWidth}" y2="${separatorY}" stroke="#1f6feb" stroke-opacity=".25"/>
  <text x="${pad}" y="${statsY}" font-size="13" fill="#39d353"><tspan font-weight="700">${total.toLocaleString('en-US')}</tspan><tspan fill="#7d8590"> public contributions in the last year</tspan></text>
  <text x="${canvasWidth - pad}" y="${statsY}" font-size="11" fill="#7d8590" text-anchor="end">${days[0].date} → ${days.at(-1)?.date}</text>
  <text x="${pad}" y="${statsY + 23}" font-size="12" fill="#7d8590">current streak <tspan fill="#22d3ee" font-weight="700">${streaks.current} days</tspan><tspan> · longest </tspan><tspan fill="#22d3ee" font-weight="700">${streaks.longest} days</tspan></text>
  <text x="${canvasWidth - pad}" y="${statsY + 23}" font-size="11" fill="#7d8590" text-anchor="end">best day <tspan fill="#f2cc60" font-weight="700">${best.count}</tspan> on ${best.date}</text>
  <text x="${pad}" y="${statsY + 48}" font-size="11" fill="#7d8590">${escapeXml(profileStats)}</text>
  <text x="${canvasWidth - pad}" y="${statsY + 48}" font-size="10" fill="#22d3ee" text-anchor="end">request-driven refresh · 5 minute cache</text>
  </svg>`;
}

export function renderUnavailableHeatmap() {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="900" height="210" viewBox="0 0 900 210" font-family="ui-monospace, SFMono-Regular, Menlo, Consolas, monospace" role="img" aria-label="GitHub activity temporarily unavailable"><defs><linearGradient id="bg" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#0d1420"/><stop offset="1" stop-color="#0a0e14"/></linearGradient></defs><rect width="900" height="210" rx="12" fill="url(#bg)"/><rect x=".5" y=".5" width="899" height="209" rx="12" fill="none" stroke="#1f6feb" stroke-opacity=".55"/><circle cx="22" cy="15" r="5" fill="#ff5f56"/><circle cx="38" cy="15" r="5" fill="#ffbd2e"/><circle cx="54" cy="15" r="5" fill="#27c93f"/><text x="450" y="19" fill="#7d8590" font-size="12" text-anchor="middle">pratham@github: ~/contributions --graph</text><text x="450" y="112" fill="#e6edf3" font-size="17" text-anchor="middle">public GitHub activity temporarily unavailable</text><text x="450" y="140" fill="#7d8590" font-size="11" text-anchor="middle">the next request will retry automatically</text></svg>`;
}
