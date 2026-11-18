export async function sendTelegramMessage(message: string): Promise<void> {
  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;

  if (!token || !chatId) {
    throw new Error("Telegram configuration is missing.");
  }

  const response = await fetch(
    `https://api.telegram.org/bot${token}/sendMessage`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: chatId,
        text: message.slice(0, 3900),
        disable_web_page_preview: true,
      }),
      signal: AbortSignal.timeout(5000),
      cache: "no-store",
    },
  );

  const result = (await response.json().catch(() => null)) as
    | { ok?: boolean }
    | null;

  if (!response.ok || !result?.ok) {
    throw new Error(`Telegram notification failed (${response.status})`);
  }
}
