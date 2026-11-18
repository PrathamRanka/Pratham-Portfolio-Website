
import { NextRequest, NextResponse } from "next/server";
import { sendTelegramMessage } from "@/lib/telegram";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const ALLOWED_ORIGINS = [
  "https://prathamranka.in",
  "https://www.prathamranka.in",
  ...(process.env.NODE_ENV !== "production"
    ? ["http://localhost:3000"]
    : []),
];

function clean(value: unknown, max = 200): string {
  if (typeof value !== "string") return "Unavailable";

  return value
    .replace(/[\r\n]/g, " ")
    .trim()
    .slice(0, max) || "Unavailable";
}

function getBrowser(userAgent: string) {
  let browser = "Other";
  let os = "Other";
  let device = "Desktop";

  if (/Edg/i.test(userAgent)) browser = "Edge";
  else if (/OPR|Opera/i.test(userAgent)) browser = "Opera";
  else if (/Chrome|Chromium/i.test(userAgent)) browser = "Chrome";
  else if (/Firefox/i.test(userAgent)) browser = "Firefox";
  else if (/Safari/i.test(userAgent)) browser = "Safari";

  if (/Windows/i.test(userAgent)) os = "Windows";
  else if (/Android/i.test(userAgent)) os = "Android";
  else if (/iPhone|iPad|iPod/i.test(userAgent)) os = "iOS";
  else if (/Mac OS X|Macintosh/i.test(userAgent)) os = "macOS";
  else if (/Linux/i.test(userAgent)) os = "Linux";

  if (/iPad|Tablet/i.test(userAgent)) device = "Tablet";
  else if (/Mobile|Android|iPhone|iPod/i.test(userAgent)) {
    device = "Mobile";
  }

  return { browser, os, device };
}

export async function POST(request: NextRequest) {
  // Check request origin.
  const origin = request.headers.get("origin");

  if (!origin || !ALLOWED_ORIGINS.includes(origin)) {
    return NextResponse.json(
      { error: "Forbidden" },
      { status: 403 },
    );
  }

  // Accept only JSON.
  if (
    !request.headers
      .get("content-type")
      ?.toLowerCase()
      .startsWith("application/json")
  ) {
    return NextResponse.json(
      { error: "Invalid content type" },
      { status: 415 },
    );
  }

  // Limit request size.
  const contentLength = Number(
    request.headers.get("content-length") || 0,
  );

  if (contentLength > 3000) {
    return NextResponse.json(
      { error: "Payload too large" },
      { status: 413 },
    );
  }

  let body: Record<string, unknown>;

  try {
    const text = await request.text();

    if (text.length > 3000) {
      return NextResponse.json(
        { error: "Payload too large" },
        { status: 413 },
      );
    }

    const parsed = JSON.parse(text);

    if (
      !parsed ||
      typeof parsed !== "object" ||
      Array.isArray(parsed)
    ) {
      throw new Error("Invalid body");
    }

    body = parsed;
  } catch {
    return NextResponse.json(
      { error: "Invalid JSON" },
      { status: 400 },
    );
  }

  // Validate visitor ID.
  if (
    typeof body.visitorId !== "string" ||
    !/^v_[a-zA-Z0-9_-]{8,100}$/.test(body.visitorId)
  ) {
    return NextResponse.json(
      { error: "Invalid visitor ID" },
      { status: 400 },
    );
  }

  if (!process.env.TELEGRAM_BOT_TOKEN || !process.env.TELEGRAM_CHAT_ID) {
    console.error("Telegram configuration is missing.");

    return NextResponse.json(
      { error: "Notification service unavailable" },
      { status: 503 },
    );
  }

  // Request information.
  const userAgent = clean(
    request.headers.get("user-agent"),
    400,
  );

  const { browser, os, device } = getBrowser(userAgent);

  const page =
    typeof body.page === "string" &&
    body.page.startsWith("/") &&
    !body.page.startsWith("//")
      ? clean(body.page, 200)
      : "/";

  const referrer = clean(body.referrer, 250);
  const browserInfo =
    body.browser && typeof body.browser === "object"
      ? (body.browser as Record<string, unknown>)
      : {};
  const acquisition =
    body.acquisition && typeof body.acquisition === "object"
      ? (body.acquisition as Record<string, unknown>)
      : {};

  // Approximate location from Vercel headers.
  const city = clean(
    request.headers.get("x-vercel-ip-city"),
  );

  const region = clean(
    request.headers.get("x-vercel-ip-country-region"),
  );

  const country = clean(
    request.headers.get("x-vercel-ip-country"),
  );

  const timezone = clean(
    request.headers.get("x-vercel-ip-timezone"),
  );

  const location = [city, region, country]
    .filter((value) => value !== "Unavailable")
    .join(", ") || "Unavailable";

  // Build Telegram message.
  const message = [
    "👀 NEW PORTFOLIO VISITOR",
    "",
    "VISITOR",
    `• ID: ${body.visitorId}`,
    `• Status: ${body.status === "Returning" ? "Returning" : "First-time"}`,
    `• Page: ${page}`,
    `• Time: ${new Date().toISOString()}`,
    "",
    "LOCATION",
    `• City: ${location}`,
    `• Timezone: ${timezone}`,
    "",
    "DEVICE",
    `• Device: ${device}`,
    `• Browser: ${browser}`,
    `• OS: ${os}`,
    `• Screen: ${clean(browserInfo.screen)}`,
    `• Language: ${clean(browserInfo.language)}`,
    `• Browser timezone: ${clean(browserInfo.timezone)}`,
    `• Platform: ${clean(browserInfo.platform)}`,
    "",
    "ACQUISITION",
    `• Referrer: ${referrer}`,
    `• Source: ${clean(acquisition.source)}`,
    `• Medium: ${clean(acquisition.medium)}`,
    `• Campaign: ${clean(acquisition.campaign)}`,
  ].join("\n");

  // Send Telegram notification.
  try {
    await sendTelegramMessage(message);
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Telegram error:", error);

    return NextResponse.json(
      { error: "Notification failed" },
      { status: 502 },
    );
  }
}
