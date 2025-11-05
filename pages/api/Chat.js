export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { message } = req.body;

  try {
    // Ambil API key dari file .env.local
    const apiKey = process.env.OPENAI_API_KEY;

    if (!apiKey) {
      return res.status(500).json({ reply: "❌ API Key tidak ditemukan di .env.local" });
    }

    // Kirim permintaan ke API OpenAI
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: "gpt-3.5-turbo",
        messages: [
          { role: "system", content: "Kamu adalah asisten AI ramah buatan Nouval." },
          { role: "user", content: message },
        ],
      }),
    });

    const data = await response.json();
    const reply = data.choices?.[0]?.message?.content || "⚠️ Tidak ada respons dari AI.";

    res.status(200).json({ reply });
  } catch (error) {
    console.error("Error AI:", error);
    res.status(500).json({ reply: "⚠️ Gagal memproses pesan dari AI." });
  }
}
