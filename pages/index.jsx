import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Github, Linkedin, Mail, ChevronLeft, ChevronRight, X } from "lucide-react";

export default function App() {
  const [page, setPage] = useState("home");
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);
  const [bg, setBg] = useState("linear-gradient(to bottom right, #ebf8ff, #ffffff)");

  const karyaList = [
    { title: "Desain 3D Background Panggung Gembira 625", desc: "Desain Background 3D untuk pagelaran seni akbar - Panggung Gembira 625 -.", img: "https://lh3.googleusercontent.com/d/1Q0YWmEJMs2dAOf_QdwSY0vuqGfFxXzCj=s600" },
    { title: "Logo dan Maskot Panggung Gembira 625", desc: "Logo dan maskot iconic untuk pagelaran seni akbar - Panggung Gembira 625 -.", img: "https://lh3.googleusercontent.com/d/1-IjJRj9S0A4LXrxBQv94ZHQ6X_duY8xX=s600" },
    { title: "Lambang Angkatan", desc: "Lambang angkatan Lulusan Pesantren Al Ishlah Tajug Tahun 2025 Dignified Generation.", img: "https://lh3.googleusercontent.com/d/1hJqSX8SIBbsMZ2OD0aapVNhKSJraD6qF" },
    { title: "Desain Feed Instagram @dignifiedgeneration", desc: "Konsep konten visual untuk media sosial Instagram Dignified Generation.", img: "https://lh3.googleusercontent.com/d/1bD3pIjGgq_OGI1x31_BaRkSJp2cwg-MQ=s600" },
  ];

  const prestasiList = [
    { title: "Peraih medali perak National Olympiad of Academic (NOA) 2024 bidang Biologi", img: "https://lh3.googleusercontent.com/d/1gUWVC-yJPlH3TkSWRI8dGINUoPDmF9s8=s600" },
    { title: "Peraih medali perunggu Pekan Kompetisi Akademik Nasional (PKAN) 2024 bidang Informatika", img: "https://lh3.googleusercontent.com/d/1tSMsajVxkGjsCCs0Nv8_LBGqre5CDXzF=s600" },
    { title: "Peraih medali emas Olimpiade Siswa Tingkat Nasional (OSTN) 2024 bidang Kimia", img: "https://lh3.googleusercontent.com/d/1Nc_uc_jGXn7tWOMRwavzqz8vnsCb6Dgo=s600" },
    { title: "Peraih medali perak Olimpiade Siswa Tingkat Nasional (OSTN) 2024 bidang Fisika", img: "https://lh3.googleusercontent.com/d/1QZzmJ4ZOWZ62mn9hsFv0Rkm3gj_7pMi1=s600" },
    { title: "Peraih medali perak Olimpiade Nasional Sains dan Bahasa (ONSB) 2025 bidang Matematika", img: "https://lh3.googleusercontent.com/d/15VK-kYNfmHvPamg57dKAxqRYXcKlcjWo=s600" },
    { title: "Peraih medali Emas Pekan Olimpiade Sains, Bahasa dan Agama Nasional (POSBASNAS) 2025 bidang Fisika", img: "https://lh3.googleusercontent.com/d/1xypJOs0N2_4P3Gm5herpW5PjI73H0FYh=s600" },
    { title: "Peraih medali Perunggu Pekan Olimpiade Sains, Bahasa dan Agama Nasional (POSBASNAS) 2025 bidang Matematika", img: "https://lh3.googleusercontent.com/d/1WSMzp26r0CoExmftsPv5aLCw9QmiDRNI=s600" },
    { title: "Peraih medali emas Indonesian Science Academic Competition (ISAC) 2025 bidang Biologi", img: "https://lh3.googleusercontent.com/d/1vbuuVCYXttExdauAqzrJHaV0-x508fu8=s600" },
    { title: "Peraih medali emas Olimpiade Pelajar (OPN) 2025 bidang Kimia", img: "https://lh3.googleusercontent.com/d/1jcUo6IfuWe649ZoCj59wvspdCvideNcw=s600" },
    { title: "Peraih medali emas Olimpiade Pelajar (OPN) 2025 bidang Bahasa Inggris", img: "https://lh3.googleusercontent.com/d/1F0IVt2FB7jjqnFkXiaZ-pq115PXbITf_=s600" },
  ];

  const skills = [
    { name: "Adobe Photoshop", level: 85 },
    { name: "Adobe Illustrator", level: 75 },
    { name: "Canva", level: 95 },
    { name: "CorelDraw", level: 95 },
    { name: "C++", level: 80 },
    { name: "Javascript", level: 80 },
  ];

  const galleryImages = [...karyaList.map(k => k.img), ...prestasiList.map(p => p.img)];

  const pageVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
  };

  const navigate = (p) => {
    setPage(p);
    const bgMap = {
      home: "linear-gradient(to bottom right, #ebf8ff, #ffffff)",
      tentang: "linear-gradient(to bottom right, #f0f4ff, #ffffff)",
      karya: "linear-gradient(to bottom right, #fff8f0, #ffffff)",
      project: "linear-gradient(to bottom right, #f0fff4, #ffffff)",
      prestasi: "linear-gradient(to bottom right, #fff0f8, #ffffff)",
    };
    setBg(bgMap[p] || "#fff");
  };

  const nextImage = () => {
    if (selectedImageIndex !== null)
      setSelectedImageIndex((selectedImageIndex + 1) % galleryImages.length);
  };

  const prevImage = () => {
    if (selectedImageIndex !== null)
      setSelectedImageIndex((selectedImageIndex - 1 + galleryImages.length) % galleryImages.length);
  };

  const [menuOpen, setMenuOpen] = useState(false);

   return (
    <div className="min-h-screen transition-colors duration-500" style={{ background: bg }}>
      {/* HEADER */}
      <header className="flex justify-between items-center p-4 fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md shadow z-50">
        <h1 className="text-lg font-bold text-blue-700">MUHAMMAD NOUVAL AR-RIZQY</h1>

        {/* DESKTOP NAV */}
        <nav className="hidden md:flex space-x-3">
          {["home", "tentang", "karya", "project", "prestasi"].map((p) => (
            <Button key={p} variant={page === p ? "default" : "outline"} onClick={() => navigate(p)}>
              {p.charAt(0).toUpperCase() + p.slice(1)}
            </Button>
          ))}
        </nav>

        {/* MOBILE MENU BUTTON */}
        <button
          onClick={() => setMenuOpen((s) => !s)}
          aria-label="Toggle menu"
          className="md:hidden p-2 border rounded-lg"
        >
          <span className="block w-6 h-[2px] bg-gray-800 mb-1"></span>
          <span className="block w-6 h-[2px] bg-gray-800 mb-1"></span>
          <span className="block w-6 h-[2px] bg-gray-800"></span>
        </button>
      </header>

      {/* MOBILE NAV MENU */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            className="md:hidden bg-white shadow p-4 space-y-3 fixed top-16 left-0 right-0 z-40"
          >
            {["home", "tentang", "karya", "project", "prestasi"].map((p) => (
              <Button key={p} variant={page === p ? "default" : "outline"} onClick={() => navigate(p)} className="w-full">
                {p.charAt(0).toUpperCase() + p.slice(1)}
              </Button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* MAIN CONTENT */}
      <AnimatePresence mode="wait">
        <motion.main
          key={page}
          variants={pageVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          className="pt-28 p-8"
        >
          {/* ==== HOME ==== */}
          {page === "home" && (
            <section className="text-center">
              <motion.img
                src="https://lh3.googleusercontent.com/d/14ZF3H8DsBOR-C_xlYD4GvGcL8D5qSrLa=s600"
                alt="Profil"
                className="w-40 h-40 rounded-full mx-auto border-4 border-blue-300 shadow-md"
              />
              <h1 className="text-3xl font-bold mt-4">Halo, Saya Muhammad Nouval Ar-Rizqy</h1>
              <p className="text-gray-600 max-w-2xl mx-auto mt-2">
                Seorang Desainer grafis asal Indramayu yang berfokus pada penciptaan identitas visual dan karya desain yang berkarakter.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mt-8">
                {[
                  { title: "Tentang Saya", desc: "Pelajari lebih lanjut tentang latar belakang dan pengalaman saya.", to: "tentang" },
                  { title: "Portofolio", desc: "Lihat karya desain grafis yang telah saya buat.", to: "karya" },
                  { title: "Project", desc: "Beberapa proyek kreatif yang telah saya kerjakan.", to: "project" },
                ].map((card) => (
                  <Card key={card.title} className="hover:shadow-lg transition">
                    <CardContent className="p-6 text-center">
                      <h3 className="text-xl font-semibold mb-2">{card.title}</h3>
                      <p className="text-gray-600 mb-4">{card.desc}</p>
                      <Button onClick={() => navigate(card.to)} className="bg-blue-600 text-white hover:bg-blue-700">Lihat</Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>
          )}

          {/* ==== TENTANG ==== */}
          {page === "tentang" && (
            <section className="max-w-4xl mx-auto text-center space-y-8">
              <motion.img src="https://lh3.googleusercontent.com/d/14ZF3H8DsBOR-C_xlYD4GvGcL8D5qSrLa=s600" alt="Foto Profil" className="mx-auto rounded-full w-40 h-40 object-cover shadow-lg" />
              <div>
                <h2 className="text-3xl font-bold mb-2">Muhammad Nouval Ar-Rizqy</h2>
                <p className="text-gray-600 max-w-2xl mx-auto">Seorang Desainer Grafis asal Indramayu yang berfokus pada penciptaan identitas visual dan karya desain yang kuat serta berkarakter.</p>
              </div>

              {/* Pendidikan */}
              <Card className="p-6 text-left">
                <h3 className="text-xl font-semibold mb-3 text-blue-700">Pendidikan</h3>
                <ul className="list-disc ml-6 space-y-1 text-gray-700">
                  <li>SDN 2 Tegalsembadra (2013 - 2019)</li>
                  <li>SMP Islam Al Ishlah Boarding School (2019 - 2022)</li>
                  <li>SMAS Al Ishlah Boarding School (2022 - 2025)</li>
                  <li>Universitas Negeri Semarang - S1 Teknik Informatika (2025 - Sekarang)</li>
                </ul>
              </Card>

              {/* Pengalaman */}
              <Card className="p-6 text-left">
                <h3 className="text-xl font-semibold mb-3 text-blue-700">Pengalaman Organisasi</h3>
                <ul className="list-disc ml-6 space-y-1 text-gray-700">
                 <li>Sekretaris Organisasi Santri Ma'had Al-Ishlah (OSMI) (Januari - Desember 2024)</li>
                  <li>Divisi Dokumentasi OSMI (Januari - Desember 2024)</li>
                  <li>Andalan Koordinator Urusan Perlengkapan (Ankuperkap) (Januari - Desember 2024)</li>
                </ul>
              </Card>

              {/* Pengalaman */}
              <Card className="p-6 text-left">
                <h3 className="text-xl font-semibold mb-3 text-blue-700">Kepanitiaan</h3>
                <ul className="list-disc ml-6 space-y-1 text-gray-700">
                  <li>Sekretaris Musabaqoh Tarik Suara Al-Ishlah XI (Januari 2024)</li>
                  <li>Sekretaris Hiking in The Village III (Januari - Februari 2024)</li>
                  <li>Sekretaris Drama Contest VI (Februari 2024)</li>
                  <li>Sekretaris Musabaqoh lil-Khitobah Al-Mimbariyah Al-Kubra VI (April - Mei 2024)</li>
                  <li>Koordinator Divisi Dekorasi Panggung Gembira 625 (Juni - Oktober 2024)</li>
                  <li>Sekretaris The Voice Contest of Al-Ishlah V (Juli - Agustus 2024)</li>
                  <li>Sekretaris Language Olympiad (Oktober - November 2024)</li>
                  <li>Sekretaris Pergantian OSMI dan Koordinator Gerakan Pramuka tahun 2024/2025 (Desember 2024)</li>
                </ul>
              </Card>

              <Card className="p-6 text-left">
                <h3 className="text-xl font-semibold mb-3 text-blue-700">Keahlian</h3>
                <div className="space-y-4">
                  {skills.map((skill, i) => (
                    <div key={i}>
                      <div className="flex justify-between mb-1">
                        <span className="text-gray-800 font-medium">{skill.name}</span>
                        <span className="text-gray-600 text-sm">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-3">
                        <div className="bg-blue-600 h-3 rounded-full" style={{ width: `${skill.level}%` }}></div>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>

          <Card className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-blue-700">Prestasi</h3>
                <div className="grid md:grid-cols-3 gap-4">
                  {prestasiList.slice(0, 3).map((p, i) => (
                    <div key={i} className="border rounded-lg overflow-hidden cursor-pointer" onClick={() => setSelectedImageIndex(karyaList.length + i)}>
                      <motion.img whileHover={{ scale: 1.03 }} src={p.img} alt={p.title} className="w-full h-40 object-cover" />
                      <p className="p-2 text-sm font-medium text-gray-700">{p.title}</p>
                    </div>
                  ))}
                </div>
                <Button className="mt-4 bg-blue-600 text-white hover:bg-blue-700" onClick={() => navigate('prestasi')}>
                  Lihat Semua Prestasi
                </Button>
              </Card>
            </section>
          )}

          {/* ==== KARYA ==== */}
          {page === "karya" && (
            <section className="max-w-5xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-8 text-blue-700">Karya Desain</h2>
              <div className="grid md:grid-cols-3 gap-6">
                {karyaList.map((k, i) => (
                  <Card key={i} className="hover:shadow-lg transition cursor-pointer" onClick={() => setSelectedImageIndex(i)}>
                    <motion.img whileHover={{ scale: 1.03 }} src={k.img} alt={k.title} className="w-full h-40 object-cover rounded-t-lg" />
                    <CardContent className="p-4">
                      <h4 className="font-semibold mb-2">{k.title}</h4>
                      <p className="text-gray-600 text-sm">{k.desc}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>
          )}

          {/* ==== PROJECT ==== */}
{page === "project" && (
  <motion.section
    key="project"
    className="min-h-screen flex flex-col items-center justify-center px-6 py-20 bg-gradient-to-b from-white to-gray-100 text-gray-800"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    transition={{ duration: 0.5 }}
  >
    <h2 className="text-4xl font-bold mb-10 text-center">Project Kreatif</h2>

    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl">
      {[
        {
          img: "https://lh3.googleusercontent.com/d/1XPnjlzl-7YXCH0vTLN35hJ2JjPqsr1gZ=s600",
          title: "Sistem Portofolio Pribadi",
          desc: "Website portofolio modern dengan animasi halus dan navigasi dinamis.",
          href: "https://nouvalarrizqy12-hg3u.vercel.app/",
        },{
          img: "https://lh3.googleusercontent.com/d/1aZJ2m67_8OVYy7e8mDxIpO_RJijt9oGX=s600",
          title: "Undangan Digital",
          desc: "Platform Undangan digital untuk pernikahan, khitanan, wisuda, ulang tahun dan ucapan hari besar.",
          href: "https://vintation.com/catalog/galbi%20invitation",
          isLocal: true,
        },
      ].map((proj, i) => (
        <motion.div
          key={i}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
        >
          <Card className="hover:shadow-xl transition-all duration-300 cursor-pointer overflow-hidden flex flex-col justify-between h-full">
            <div>
              <img
                src={proj.img}
                alt={proj.title}
                className="rounded-t-lg w-full h-48 object-cover transform group-hover:scale-105 transition-transform duration-300"
              />
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-semibold mb-2">{proj.title}</h3>
                <p className="text-gray-600 mb-4">{proj.desc}</p>
                <a
                  href={proj.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-full transition"
                  >
                    Lihat Project
                  </Button>
                </a>
              </CardContent>
            </div>
          </Card>
        </motion.div>
      ))}
    </div>
  </motion.section>
)}

          {/* ==== PRESTASI ==== */}
          {page === "prestasi" && (
            <section className="max-w-5xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-8 text-blue-700">Prestasi Lengkap</h2>
              <div className="grid md:grid-cols-3 gap-6">
                {prestasiList.map((p, i) => (
                  <Card key={i} className="hover:shadow-lg transition cursor-pointer" onClick={() => setSelectedImage(p.img)}>
                    <img src={p.img} alt={p.title} className="w-full h-48 object-contain rounded-t-lg" />
                    <CardContent className="p-4">
                      <p className="font-semibold text-gray-700">{p.title}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>
          )}
        </motion.main>
      </AnimatePresence>

      {/* ==== CONTACT ==== */}
      <section className="py-16 text-center">
        <h2 className="text-3xl font-semibold mb-4">Hubungi Saya</h2>
        <p className="text-gray-600 mb-6">Tertarik bekerja sama atau ingin berdiskusi?</p>
        <div className="flex justify-center gap-6">
          <a href="mailto:bagobago955.com"><Mail className="w-6 h-6" /></a>
          <a href="https://github.com/bagobago955-desainer" target="_blank"><Github className="w-6 h-6" /></a>
          <a href="https://www.linkedin.com/in/muhammad-nouval-ar-rizqy-9ba777378" target="_blank"><Linkedin className="w-6 h-6" /></a>
        </div>
      </section>

      {/* ==== IMAGE MODAL ==== */}
      <AnimatePresence>
        {selectedImageIndex !== null && (
          <motion.div
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4 cursor-zoom-out"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImageIndex(null)}
          >
            <motion.img
              src={galleryImages[selectedImageIndex]}
              alt="Preview"
              className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-lg cursor-zoom-in"
              onClick={(e) => e.stopPropagation()}
              whileTap={{ scale: 1.15 }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
            />

            <button onClick={(e) => { e.stopPropagation(); prevImage(); }} className="absolute left-4 text-white hover:text-gray-300">
              <ChevronLeft className="w-10 h-10" />
            </button>
            <button onClick={(e) => { e.stopPropagation(); nextImage(); }} className="absolute right-4 text-white hover:text-gray-300">
              <ChevronRight className="w-10 h-10" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
