export default async function handler(req, res) {
  try {
    const token = process.env.TELEGRAM_BOT_TOKEN;
    const chatId = process.env.TELEGRAM_CHAT_ID;

    const message = "🚀 Test message from your Vercel bot. Telegram connection OK.";

    const url = `https://api.telegram.org/bot${token}/sendMessage`;

    await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: chatId,
        text: message,
      }),
    });

    return res.status(200).json({ status: "sent", message: "Telegram test sent" });
  } catch (err) {
    return res.status(500).json({ status: "error", error: err.toString() });
  }
}
