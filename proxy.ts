
import { NextResponse, type NextRequest } from "next/server";
import { sendTelegramMessage } from "@/lib/telegram";

// Format timestamps in Indian Standard Time.
function formatIST(date = new Date()): string {
  return (
    new Intl.DateTimeFormat("en-IN", {
      timeZone: "Asia/Kolkata",
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      hour: "numeric",
      minute: "2-digit",
      second: "2-digit",
      hour12: true,
    }).format(date) + " IST"
  );
}

// API rate limiting
const RATE_LIMIT = 30;
const RATE_WINDOW_MS = 60_000;
const buckets = new Map<string, { tokens: number; updatedAt: number }>();
const MAX_BUCKETS = 5000;
const BUCKET_TTL_MS = 300_000;

function cleanupOldBuckets(now: number) {
  if (buckets.size < MAX_BUCKETS) return;

  for (const [ip, bucket] of buckets.entries()) {
    if (now - bucket.updatedAt > BUCKET_TTL_MS) {
      buckets.delete(ip);
    }
  }
}

function allowRequest(ip: string): boolean {
  const now = Date.now();
  cleanupOldBuckets(now);

  const refillPerMs = RATE_LIMIT / RATE_WINDOW_MS;
  const bucket = buckets.get(ip);

  if (!bucket) {
    buckets.set(ip, { tokens: RATE_LIMIT - 1, updatedAt: now });
    return true;
  }

  bucket.tokens = Math.min(
    RATE_LIMIT,
    bucket.tokens + (now - bucket.updatedAt) * refillPerMs,
  );
  bucket.updatedAt = now;

  if (bucket.tokens >= 1) {
    bucket.tokens -= 1;
    return true;
  }

  return false;
}

// AI crawler detection
const AI_CRAWLERS = [
  { name: "GPTBot", pattern: /\bGPTBot\b/i },
  { name: "OAI-SearchBot", pattern: /\bOAI-SearchBot\b/i },
  { name: "ChatGPT-User", pattern: /\bChatGPT-User\b/i },
  { name: "ClaudeBot", pattern: /\bClaudeBot\b/i },
  { name: "Claude-SearchBot", pattern: /\bClaude-SearchBot\b/i },
  { name: "Claude-User", pattern: /\bClaude-User\b/i },
  { name: "PerplexityBot", pattern: /\bPerplexityBot\b/i },
  { name: "Perplexity-User", pattern: /\bPerplexity-User\b/i },
  { name: "Googlebot", pattern: /\bGooglebot\b/i },
  { name: "Amazonbot", pattern: /\bAmazonbot\b/i },
  { name: "Bytespider", pattern: /\bBytespider\b/i },
  { name: "cohere-ai", pattern: /\bcohere-ai\b/i },
  { name: "Meta-ExternalAgent", pattern: /\bMeta-ExternalAgent\b/i },
  { name: "Applebot", pattern: /\bApplebot\b/i },
  { name: "CCBot", pattern: /\bCCBot\b/i },
];

// Ignore static files and metadata endpoints, but keep actual pages
// and the two AI-readable text resources.
function shouldTrackCrawlerPath(pathname: string): boolean {
  if (
    pathname === "/llms.txt" ||
    pathname === "/llms-full.txt"
  ) {
    return true;
  }

  if (
    pathname.startsWith("/api/") ||
    pathname.startsWith("/_next/")
  ) {
    return false;
  }

  if (
    pathname === "/manifest.webmanifest" ||
    pathname === "/robots.txt" ||
    pathname === "/sitemap.xml" ||
    pathname === "/opengraph-image" ||
    pathname.endsWith("/opengraph-image")
  ) {
    return false;
  }

  // Ignore images, fonts, scripts, stylesheets, media and other files.
  if (
    /\.(avif|gif|ico|jpe?g|png|svg|webp|woff2?|ttf|otf|css|js|map|mp3|mp4|pdf|webmanifest|xml)$/i.test(
      pathname,
    )
  ) {
    return false;
  }

  return true;
}

const notified = new Map<string, number>();
const CRAWLER_COOLDOWN_MS = 2 * 60_000;

async function notifyCrawler(
  request: NextRequest,
  crawlerName: string,
  userAgent: string,
) {
  if (
    !process.env.TELEGRAM_BOT_TOKEN ||
    !process.env.TELEGRAM_CHAT_ID
  ) {
    return;
  }

  const key = `${crawlerName}:${request.nextUrl.pathname}`;
  const now = Date.now();

  for (const [entry, expiry] of notified) {
    if (expiry <= now) {
      notified.delete(entry);
    }
  }

  if (notified.has(key)) return;

  notified.set(key, now + CRAWLER_COOLDOWN_MS);

  const location = [
    request.headers.get("x-vercel-ip-city"),
    request.headers.get("x-vercel-ip-country"),
  ]
    .filter(Boolean)
    .join(", ") || "Unavailable";

  const message = [
    "🤖 AI / SEARCH CRAWLER VISITED",
    "",
    `• Crawler: ${crawlerName}`,
    `• URL: ${request.nextUrl.pathname}`,
    `• Location: ${location}`,
    `• Time: ${formatIST()}`,
    "",
    `User-Agent: ${userAgent.slice(0, 300)}`,
    "",
    "Note: User-Agent identity is not verified.",
  ].join("\n");

  try {
    await sendTelegramMessage(message);
  } catch (error) {
    notified.delete(key);
    console.error("Crawler notification failed:", error);
  }
}

export async function proxy(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  // Keep existing API rate limiting.
  if (pathname.startsWith("/api/")) {
    const ip =
      request.headers.get("x-forwarded-for")?.split(",").at(-1)?.trim() ||
      request.headers.get("x-real-ip") ||
      "unknown";

    if (!allowRequest(ip)) {
      return NextResponse.json(
        { error: "Too many requests. Please slow down." },
        { status: 429, headers: { "Retry-After": "60" } },
      );
    }

    return NextResponse.next();
  }

  // Only inspect GET requests for crawler notifications.
  if (
    request.method === "GET" &&
    shouldTrackCrawlerPath(pathname)
  ) {
    const userAgent = request.headers.get("user-agent") || "";

    const crawler = AI_CRAWLERS.find((bot) =>
      bot.pattern.test(userAgent),
    );

    if (crawler) {
      await notifyCrawler(request, crawler.name, userAgent);
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/api/:path*",
    "/((?!_next/static|_next/image|favicon.ico).*)",
  ],
};
