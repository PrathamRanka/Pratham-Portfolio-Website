
import { NextRequest, NextResponse } from "next/server";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const ALLOWED_ORIGINS = new Set([
  "https://prathamranka.in",
  "https://www.prathamranka.in",
  ...(process.env.NODE_ENV !== "production"
    ? ["http://localhost:3000"]
    : []),
]);

function sanitizePage(value: unknown): string {
  if (
    typeof value !== "string" ||
    value.length > 300 ||
    !value.startsWith("/") ||
    value.startsWith("//") ||
    value.includes("\\")
  ) {
    return "/";
  }

  try {
    return new URL(
      value,
      "https://prathamranka.in"
    ).pathname.slice(0, 200);
  } catch {
    return "/";
  }
}

function sanitizeReferrer(value: unknown): string {
  if (typeof value !== "string" || !value) {
    return "Direct";
  }

  try {
    return new URL(value).hostname.slice(0, 150);
  } catch {
    return "Direct";
  }
}

export async function POST(request: NextRequest) {
  try {
    // Validate origin
    const origin = request.headers.get("origin");

    if (!origin || !ALLOWED_ORIGINS.has(origin)) {
      return NextResponse.json(
        { error: "Forbidden" },
        { status: 403 }
      );
    }

    // Validate request context
    const fetchSite = request.headers.get("sec-fetch-site");

    if (fetchSite && fetchSite !== "same-origin") {
      return NextResponse.json(
        { error: "Forbidden" },
        { status: 403 }
      );
    }

    // Validate content type
    const contentType = request.headers.get("content-type") || "";

    if (!contentType.toLowerCase().startsWith("application/json")) {
      return NextResponse.json(
        { error: "Invalid content type" },
        { status: 415 }
      );
    }

    // Enforce a small payload
    const contentLength = Number(
      request.headers.get("content-length") || 0
    );

    if (contentLength > 1024) {
      return NextResponse.json(
        { error: "Payload too large" },
        { status: 413 }
      );
    }

    const body: unknown = await request.json();

    if (!body || typeof body !== "object") {
      return NextResponse.json(
        { error: "Invalid payload" },
        { status: 400 }
      );
    }

    const data = body as Record<string, unknown>;

    const page = sanitizePage(data.page);
    const referrer = sanitizeReferrer(data.referrer);

    const token = process.env.TELEGRAM_BOT_TOKEN;
    const chatId = process.env.TELEGRAM_CHAT_ID;

    if (!token || !chatId) {
      console.error("Missing Telegram configuration");

      return NextResponse.json(
        { error: "Service unavailable" },
        { status: 503 }
      );
    }

    const message = [
      "👀 NEW PORTFOLIO VISITOR",
      "",
      "🌐 Website: prathamranka.in",
      `📄 Page: ${page}`,
      `🔗 Referrer: ${referrer}`,
      `🕒 Time: ${new Date().toLocaleString("en-IN", {
        timeZone: "Asia/Kolkata",
      })} IST`,
    ].join("\n");

    const response = await fetch(
      `https://api.telegram.org/bot${token}/sendMessage`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          chat_id: chatId,
          text: message,
          disable_web_page_preview: true,
        }),
        signal: AbortSignal.timeout(5000),
        cache: "no-store",
      }
    );

    if (!response.ok) {
      console.error("Telegram API error:", response.status);

      return NextResponse.json(
        { error: "Notification failed" },
        { status: 502 }
      );
    }

    const result = await response.json();

    if (!result.ok) {
      return NextResponse.json(
        { error: "Telegram rejected notification" },
        { status: 502 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Visitor API error:", error);

    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
