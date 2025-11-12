// components/IntroScreen.jsx
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

export default function IntroScreen({ onFinish }) {
  const [lang, setLang] = useState(null); // "id" | "en"
  const [step, setStep] = useState(0);

  // Simpan pilihan bahasa agar bisa dipakai di seluruh situs
  const handleLanguage = (selected) => {
    setLang(selected);
    localStorage.setItem("lang", selected);
    setTimeout(() => setStep(1), 400);
  };

  // Setelah naratif selesai → tombol "Mulai Jelajahi"
  const handleExplore = () => {
    // Efek fade out kecil sebelum masuk halaman utama
    setStep(2);
    setTimeout(() => onFinish && onFinish(), 800);
  };

  const particlesInit = async (engine) => {
    await loadFull(engine);
  };

  return (
    <AnimatePresence>
      {step < 2 && (
        <motion.div
          key="intro"
          className="fixed inset-0 flex flex-col items-center justify-center bg-gradient-to-b from-blue-50 to-white text-gray-800 z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.8 } }}
        >
          {/* Efek Partikel */}
          <Particles
            id="tsparticles"
            init={particlesInit}
            options={{
              background: { color: "transparent" },
              fpsLimit: 60,
              particles: {
                color: { value: "#93C5FD" },
                move: { enable: true, speed: 1.5, direction: "none", outModes: "out" },
                number: { value: 40, density: { enable: true, area: 800 } },
                opacity: { value: 0.6 },
                shape: { type: "circle" },
                size: { value: { min: 2, max: 6 } },
              },
            }}
            className="absolute inset-0"
          />

          {/* Konten Intro */}
          <motion.div
            className="relative z-10 text-center px-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            {lang === null && (
              <>
                <motion.h1
                  className="text-2xl md:text-3xl font-semibold mb-6"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  🌍 Pilih Bahasa / Choose Language
                </motion.h1>
                <div className="flex gap-4 justify-center">
                  <button
                    onClick={() => handleLanguage("id")}
                    className="px-5 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition"
                  >
                    🇮🇩 Bahasa Indonesia
                  </button>
                  <button
                    onClick={() => handleLanguage("en")}
                    className="px-5 py-2 bg-blue-100 text-blue-600 rounded-full hover:bg-blue-200 transition"
                  >
                    🇬🇧 English
                  </button>
                </div>
              </>
            )}

            {lang && step === 1 && (
              <motion.div
                key="narrative"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
              >
                <p className="text-xl md:text-2xl font-medium mb-3">
                  {lang === "id"
                    ? "Halo, saya Muhammad Nouval Ar-Rizqy."
                    : "Hi, I'm Muhammad Nouval Ar-Rizqy."}
                </p>
                <p className="text-lg text-gray-600 mb-3">
                  {lang === "id"
                    ? "Desainer grafis yang menciptakan karya visual penuh makna."
                    : "A graphic designer who creates meaningful visual works."}
                </p>
                <p className="text-lg text-gray-600 mb-6">
                  {lang === "id"
                    ? "Siap untuk menjelajahi portofolio saya?"
                    : "Ready to explore my portfolio?"}
                </p>
                <motion.button
                  onClick={handleExplore}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-2 rounded-full bg-blue-500 text-white font-medium shadow hover:shadow-lg transition"
                >
                  {lang === "id" ? "✨ Mulai Jelajahi" : "✨ Start Exploring"}
                </motion.button>
              </motion.div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
