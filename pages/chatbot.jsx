import React, { useState } from "react";
import { motion } from "framer-motion";

export default function Chatbot() {
  const [messages, setMessages] = useState([
    { from: "bot", text: "Halo! Saya AI Chatbot, salah satu project yang diproduksi oleh Nouval 👋. Ada yang bisa saya bantu?" },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const sendMessage = async () => {
    if (!input.trim()) return;
    const userMessage = { from: "user", text: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: userMessage.text }),
      });
      const data = await response.json();
      setMessages((prev) => [...prev, { from: "bot", text: data.reply }]);
    } catch {
      setMessages((prev) => [...prev, { from: "bot", text: "⚠️ Terjadi kesalahan saat memproses pesan." }]);
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-500 via-blue-400 to-teal-300 flex flex-col items-center justify-center p-6 text-gray-900">
      <motion.div
        className="w-full max-w-md bg-white/80 backdrop-blur-lg rounded-2xl shadow-lg p-4 flex flex-col"
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
      >
        <h1 className="text-2xl font-semibold text-center mb-4">💬 AI Chatbot Project</h1>
        <div className="flex-1 overflow-y-auto mb-4 space-y-3 h-80 p-2">
          {messages.map((msg, idx) => (
            <motion.div
              key={idx}
              className={`p-3 rounded-xl max-w-[80%] ${
                msg.from === "user"
                  ? "bg-gradient-to-r from-teal-400 to-blue-400 self-end text-white ml-auto"
                  : "bg-gray-100 text-gray-800 self-start"
              }`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
            >
              {msg.text}
            </motion.div>
          ))}
          {loading && <div className="text-center text-gray-500 text-sm">Mengetik...</div>}
        </div>
        <div className="flex gap-2">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && sendMessage()}
            placeholder="Ketik pesan..."
            className="flex-1 border border-gray-300 rounded-lg px-3 py-2"
          />
          <button
            onClick={sendMessage}
            className="bg-gradient-to-r from-purple-500 to-blue-400 text-white px-4 py-2 rounded-lg"
          >
            Kirim
          </button>
        </div>
      </motion.div>
    </div>
  );
}