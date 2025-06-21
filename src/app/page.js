"use client"; // <--- WAJIB ADA untuk menggunakan Hooks React (useState, useEffect) dan client-side libraries

import {
  FiCode,
  FiLayout,
  FiSmartphone,
  FiArrowRight,
  FiMenu,
  FiX,
  FiCalendar,
  FiCreditCard,
  FiUsers,
  FiBarChart,
} from "react-icons/fi";

import { useState, useEffect } from "react";
import { ParallaxProvider, Parallax } from "react-scroll-parallax";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const customStyles = {
    "--dark-blue-bg": "#0D0F1F",
    "--light-blue-text": "#E0E7FF",
    "--accent-blue": "#4F46E5",
    "--accent-green": "#10B981",
    "--accent-purple": "#8B5CF6",
    "--subtle-gray": "#374151",
    "--card-bg": "#1A1F31",
    "--card-border": "#4B5563",
    "--highlight-card-border": "#6D28D9",
    "--gradient-primary": "linear-gradient(45deg, #4F46E5, #8B5CF6)",
    "--gradient-secondary": "linear-gradient(45deg, #10B981, #3B82F6)",
  };

  return (
    <ParallaxProvider>
      {/* Container utama halaman, tentukan background default */}
      <div
        className="min-h-screen bg-[var(--dark-blue-bg)] text-white"
        style={customStyles}
      >
        {/* Header */}
        <header
          className={`fixed top-0 left-0 right-0 z-50 bg-[var(--dark-blue-bg)] transition-all duration-300 ${
            isScrolled
              ? "bg-opacity-90 backdrop-blur-sm shadow-md"
              : "bg-opacity-80"
          }`}
        >
          <div className="container mx-auto px-6 py-4 flex justify-between items-center">
            <h1 className="text-2xl font-bold">
              WANARA<span className="text-purple-500"> DIGITAL</span>
            </h1>
            <nav className="hidden md:flex space-x-8">
              <a
                href="#about"
                className="hover:text-purple-400 transition-colors"
              >
                Tentang Kami
              </a>
              <a
                href="#services"
                className="hover:text-purple-400 transition-colors"
              >
                Layanan
              </a>
              <a
                href="#portfolio"
                className="hover:text-purple-400 transition-colors"
              >
                Portofolio
              </a>
              <a
                href="#contact"
                className="hover:text-purple-400 transition-colors"
              >
                Kontak
              </a>
            </nav>
            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-white focus:outline-none"
              >
                {isMenuOpen ? (
                  <FiX className="w-7 h-7" />
                ) : (
                  <FiMenu className="w-7 h-7" />
                )}
              </button>
            </div>
          </div>
          {/* Mobile Menu Content (dengan transisi) */}
          <div
            className={`md:hidden absolute top-full left-0 w-full bg-[var(--dark-blue-bg)] border-t border-gray-700 shadow-lg py-4 px-6 transition-all duration-300 ease-in-out ${
              isMenuOpen
                ? "block opacity-100 translate-y-0"
                : "hidden opacity-0 -translate-y-4"
            }`}
          >
            <a
              href="#about"
              onClick={() => setIsMenuOpen(false)}
              className="block text-white font-medium py-2 hover:text-gray-300"
            >
              Tentang Kami
            </a>
            <a
              href="#services"
              onClick={() => setIsMenuOpen(false)}
              className="block text-white font-medium py-2 hover:text-gray-300"
            >
              Layanan
            </a>
            <a
              href="#portfolio"
              onClick={() => setIsMenuOpen(false)}
              className="block text-white font-medium py-2 hover:text-gray-300"
            >
              Portofolio
            </a>
            <a
              href="#contact"
              onClick={() => setIsMenuOpen(false)}
              className="block text-white font-medium py-2 hover:text-gray-300"
            >
              Kontak
            </a>
          </div>
        </header>

        {/* Main Content Wrapper (relative z-10 agar konten di atas background parallax) */}
        <main className="relative z-10">
          {/* Kontainer Absolute untuk Elemen Background Parallax */}
          {/* inset-0 membuat div ini mengisi seluruh area parent (main) */}
          {/* z-0 agar berada di paling belakang */}
          {/* overflow-hidden untuk memastikan elemen paralaks tidak keluar dari area main */}
          {/* pointer-events-none agar tidak mengganggu interaksi dengan konten di atasnya */}
          <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
            {/* Semua elemen latar belakang dibungkus Parallax dan memiliki posisi 'absolute' */}
            {/* Posisi (top, left, dll.) kini relatif terhadap kontainer absolute ini */}
            <Parallax speed={-15}>
              <span className="absolute w-5 h-5 top-[10%] left-[15%] rounded-full opacity-60 blur-sm bg-[var(--gradient-primary)]"></span>
            </Parallax>
            <Parallax speed={10}>
              <div className="absolute w-px h-64 top-[5%] left-[5%] transform rotate-45 opacity-30 bg-[var(--gradient-secondary)]"></div>
            </Parallax>
            <Parallax speed={-5}>
              <div className="absolute w-24 h-24 top-[20%] right-[15%] transform rotate-12 opacity-30 border border-purple-500 blur-sm"></div>
            </Parallax>
            <Parallax speed={5}>
              <span className="absolute w-5 h-5 top-[40%] right-[5%] rounded-full opacity-60 blur-sm bg-[var(--gradient-primary)]"></span>
            </Parallax>
            <Parallax speed={-10}>
              <div className="absolute w-px h-80 top-[30%] left-[80%] transform rotate-90 opacity-30 bg-[var(--gradient-secondary)]"></div>
            </Parallax>
            <Parallax speed={15}>
              <div className="absolute w-16 h-16 bottom-[15%] left-[10%] transform -rotate-24 opacity-30 border border-purple-500 blur-sm"></div>
            </Parallax>
            <Parallax speed={-20}>
              <span className="absolute w-5 h-5 bottom-[20%] left-[5%] rounded-full opacity-60 blur-sm bg-[var(--gradient-primary)]"></span>
            </Parallax>
            <Parallax speed={20}>
              <div className="absolute w-px h-52 bottom-[10%] left-[40%] transform -rotate-45 opacity-30 bg-[var(--gradient-secondary)]"></div>
            </Parallax>
            <Parallax speed={-5}>
              <div className="absolute w-32 h-32 top-[50%] left-[5%] transform rotate-45 opacity-20 border border-purple-500 blur-sm"></div>
            </Parallax>
            <Parallax speed={10}>
              <span className="absolute w-5 h-5 top-[70%] left-[30%] rounded-full opacity-60 blur-sm bg-[var(--gradient-primary)]"></span>
            </Parallax>
            <Parallax speed={-15}>
              <div className="absolute w-px h-72 top-[15%] right-[10%] opacity-30 bg-[var(--gradient-secondary)]"></div>
            </Parallax>
            <Parallax speed={5}>
              <div className="absolute w-20 h-20 top-[5%] left-[50%] transform -rotate-30 opacity-30 border border-purple-500 blur-sm"></div>
            </Parallax>
            <Parallax speed={-10}>
              <span className="absolute w-5 h-5 bottom-[10%] right-[25%] rounded-full opacity-60 blur-sm bg-[var(--gradient-primary)]"></span>
            </Parallax>
            <Parallax speed={15}>
              <div className="absolute w-px h-96 bottom-[5%] right-[45%] transform rotate-60 opacity-30 bg-[var(--gradient-secondary)]"></div>
            </Parallax>
            <Parallax speed={-5}>
              <div className="absolute w-28 h-28 bottom-[5%] right-[5%] transform rotate-55 opacity-30 border border-purple-500 blur-sm"></div>
            </Parallax>
          </div>{" "}
          {/* Penutup div parallax container */}
          {/* Hero Section - Pastikan memiliki z-index yang lebih tinggi dan background solid */}
          <section
            id="home"
            className="min-h-screen flex items-center bg-cover bg-center relative pt-16 bg-black z-10" // background solid dan z-index
            style={{ backgroundImage: "url('/hero-bg.jpg')" }}
          >
            {/* Overlay di dalam hero section */}
            <div className="absolute inset-0 bg-black bg-opacity-80 backdrop-blur-sm z-[1]"></div>
            {/* Konten Hero */}
            <div className="container mx-auto px-6 text-center relative z-10">
              <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-6 drop-shadow-lg">
                Membangun Solusi Digital <br className="hidden md:block" />{" "}
                Inovatif untuk Masa Depan
              </h1>
              <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed">
                PT Wanara Digital Indonesia adalah mitra teknologi Anda dalam
                menciptakan solusi perangkat lunak modern, handal, dan siap
                bersaing di era digital.
              </p>
              <a
                href="#contact"
                className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-8 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105 inline-flex items-center"
              >
                Diskusikan Proyek Anda <FiArrowRight className="ml-2 text-xl" />
              </a>
            </div>
          </section>
          {/* About Us Section - Tambahkan relative z-10 dan background solid */}
          <section
            id="about"
            className="py-20 bg-[var(--dark-blue-bg)] text-gray-300 relative z-10"
          >
            <div className="container mx-auto px-6 text-center">
              <h3 className="text-4xl font-bold text-white mb-4 leading-tight">
                TENTANG <br />
                <span className="text-purple-500">
                  Wanara Digital Indonesia
                </span>
              </h3>
              <div className="w-20 h-1 bg-purple-500 mx-auto mb-6 rounded-full"></div>
              <p className="max-w-3xl mx-auto text-lg leading-relaxed">
                <strong>PT Wanara Digital Indonesia</strong> adalah perusahaan
                startup digital yang berfokus pada pengembangan perangkat lunak
                dan solusi teknologi modern. Kami hadir untuk membantu bisnis
                bertransformasi ke era digital melalui layanan yang inovatif,
                efisien, dan scalable. Dengan tim yang berpengalaman dan
                semangat untuk berinovasi, kami siap menjadi mitra digital
                terbaik untuk perusahaan, institusi, dan startup di Indonesia.
              </p>
            </div>
          </section>
          {/* Services Section - Tambahkan relative z-10 dan background solid */}
          <section
            id="services"
            className="py-20 bg-[var(--card-bg)] relative z-10"
          >
            <div className="container mx-auto px-6">
              <h3 className="text-3xl font-bold text-center mb-4 text-white">
                LAYANAN KAMI
              </h3>
              <div className="w-24 h-1 bg-purple-500 mx-auto mb-12 rounded-full"></div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="simple-card-border p-8 rounded-lg border border-gray-800 hover:border-purple-500 transition-all duration-300">
                  <FiCode className="text-5xl text-purple-500 mb-4" />
                  <h4 className="text-2xl font-bold mb-2 text-white">
                    Web Development
                  </h4>
                  <p className="text-gray-400">
                    Pengembangan website custom, mulai dari landing page,
                    company profile, hingga aplikasi web kompleks dengan
                    teknologi terkini.
                  </p>
                </div>
                <div className="simple-card-border p-8 rounded-lg border border-gray-800 hover:border-purple-500 transition-all duration-300">
                  <FiSmartphone className="text-5xl text-purple-500 mb-4" />
                  <h4 className="text-2xl font-bold mb-2 text-white">
                    Mobile App Development
                  </h4>
                  <p className="text-gray-400">
                    Menciptakan aplikasi mobile (iOS & Android) yang intuitif,
                    cepat, dan memberikan pengalaman pengguna terbaik.
                  </p>
                </div>
                <div className="simple-card-border p-8 rounded-lg border border-gray-800 hover:border-purple-500 transition-all duration-300">
                  <FiLayout className="text-5xl text-purple-500 mb-4" />
                  <h4 className="text-2xl font-bold mb-2 text-white">
                    UI/UX Design
                  </h4>
                  <p className="text-gray-400">
                    Merancang antarmuka yang tidak hanya indah secara visual,
                    tetapi juga fungsional dan mudah digunakan oleh target pasar
                    Anda.
                  </p>
                </div>
              </div>
            </div>
          </section>
          {/* Section: Solusi Digital Inovatif - Tambahkan relative z-10 dan background solid */}
          <section className="py-20 px-6 md:px-12 bg-[var(--dark-blue-bg)] relative z-10">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-white">
                Solusi Digital
              </h2>
              <h3
                className="text-4xl md:text-5xl font-extrabold text-center mb-16"
                style={{
                  background: "linear-gradient(45deg, #4F46E5, #8B5CF6)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  color: "transparent",
                }}
              >
                Inovatif & Terintegrasi
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                <div className="simple-card-border p-6 flex flex-col space-y-4">
                  <div className="flex items-center space-x-4">
                    <FiCode className="w-9 h-9 text-purple-500" />
                    <h4 className="text-xl font-semibold text-white">
                      Kustomisasi & Fleksibilitas
                    </h4>
                  </div>
                  <p className="text-gray-300 leading-relaxed">
                    Kami membangun solusi yang disesuaikan dengan kebutuhan unik
                    bisnis Anda, memastikan skalabilitas dan adaptabilitas di
                    masa depan.
                  </p>
                </div>
                <div className="simple-card-border p-6 flex flex-col space-y-4">
                  <div className="flex items-center space-x-4">
                    <FiLayout className="w-9 h-9 text-teal-400" />
                    <h4 className="text-xl font-semibold text-white">
                      Pengalaman Pengguna Optimal
                    </h4>
                  </div>
                  <p className="text-gray-300 leading-relaxed">
                    Fokus pada UI/UX yang intuitif dan menarik untuk memastikan
                    pengguna Anda memiliki interaksi yang menyenangkan dan
                    efisien.
                  </p>
                </div>
                <div className="simple-card-border p-6 flex flex-col space-y-4">
                  <div className="flex items-center space-x-4">
                    <FiUsers className="w-9 h-9 text-blue-400" />
                    <h4 className="text-xl font-semibold text-white">
                      Keamanan Data Terjamin
                    </h4>
                  </div>
                  <p className="text-gray-300 leading-relaxed">
                    Mengimplementasikan standar keamanan tertinggi untuk
                    melindungi data dan informasi sensitif bisnis serta pengguna
                    Anda.
                  </p>
                </div>
                <div className="simple-card-border p-6 flex flex-col space-y-4">
                  <div className="flex items-center space-x-4">
                    <FiBarChart className="w-9 h-9 text-green-400" />
                    <h4 className="text-xl font-semibold text-white">
                      Dukungan Berkelanjutan
                    </h4>
                  </div>
                  <p className="text-gray-300 leading-relaxed">
                    Kami tidak hanya membangun, tetapi juga menyediakan dukungan
                    teknis dan pemeliharaan untuk memastikan sistem Anda selalu
                    berjalan optimal.
                  </p>
                </div>
              </div>
            </div>
          </section>
          {/* Portfolio Section - Tambahkan relative z-10 dan background solid */}
          <section
            id="portfolio"
            className="py-20 bg-[var(--card-bg)] relative z-10"
          >
            <div className="container mx-auto px-6">
              <h3 className="text-3xl font-bold text-center mb-4 text-white">
                PORTFOLIO PROYEK
              </h3>
              <div className="w-24 h-1 bg-purple-500 mx-auto mb-12 rounded-full"></div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="group relative overflow-hidden rounded-lg simple-card-border">
                  <img
                    src="./img/proyek 1.jpeg"
                    alt="Proyek A"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="text-center">
                      <h4 className="text-xl font-bold text-white">
                        Al-Quran Online
                      </h4>
                      <p className="text-sm text-gray-300">Web Development</p>
                    </div>
                  </div>
                </div>
                <div className="group relative overflow-hidden rounded-lg simple-card-border">
                  <img
                    src="./img/proyek 2.jpeg"
                    alt="Proyek B"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="text-center">
                      <h4 className="text-xl font-bold text-white">
                        Company Website
                      </h4>
                      <p className="text-sm text-gray-300">Web Application</p>
                    </div>
                  </div>
                </div>
                <div className="group relative overflow-hidden rounded-lg simple-card-border">
                  <img
                    src="./img/proyek 4.jpeg"
                    alt="Proyek C"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="text-center">
                      <h4 className="text-xl font-bold text-white">
                        Website Absensi
                      </h4>
                      <p className="text-sm text-gray-300">Web Application</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* Section: Mengapa Memilih Kami? - Tambahkan relative z-10 dan background solid */}
          <section className="py-20 px-6 md:px-12 bg-[var(--dark-blue-bg)] relative z-10">
            <div className="max-w-7xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Mengapa Memilih
              </h2>
              <h3
                className="text-4xl md:text-5xl font-extrabold mb-16"
                style={{
                  background: "linear-gradient(45deg, #10B981, #3B82F6)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  color: "transparent",
                }}
              >
                Wanara Digital?
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="simple-card-border p-6 flex flex-col items-center justify-center">
                  <FiCode className="text-5xl text-purple-500 mb-4" />
                  <h4 className="text-xl font-bold text-white mb-2">
                    Tim Ahli Berpengalaman
                  </h4>
                  <p className="text-gray-400 text-sm">
                    Didukung oleh tim developer, desainer, dan analis
                    berpengalaman yang siap mewujudkan ide Anda.
                  </p>
                </div>
                <div className="simple-card-border p-6 flex flex-col items-center justify-center">
                  <FiLayout className="text-5xl text-blue-500 mb-4" />
                  <h4 className="text-xl font-bold text-white mb-2">
                    Pendekatan Inovatif
                  </h4>
                  <p className="text-gray-400 text-sm">
                    Selalu mengikuti tren teknologi terbaru untuk memberikan
                    solusi yang relevan dan futuristik.
                  </p>
                </div>
                <div className="simple-card-border p-6 flex flex-col items-center justify-center">
                  <FiSmartphone className="text-5xl text-green-500 mb-4" />
                  <h4 className="text-xl font-bold text-white mb-2">
                    Transparansi & Komunikasi
                  </h4>
                  <p className="text-gray-400 text-sm">
                    Kami percaya pada komunikasi terbuka dan laporan progres
                    yang transparan di setiap tahap proyek.
                  </p>
                </div>
                <div className="simple-card-border p-6 flex flex-col items-center justify-center">
                  <FiCreditCard className="text-5xl text-yellow-500 mb-4" />
                  <h4 className="text-xl font-bold text-white mb-2">
                    Harga Kompetitif
                  </h4>
                  <p className="text-gray-400 text-sm">
                    Menawarkan kualitas terbaik dengan harga yang bersaing,
                    sesuai dengan budget dan kebutuhan Anda.
                  </p>
                </div>
              </div>
            </div>
          </section>
          {/* CTA Section: Siap Diskusi Proyek? - Tambahkan relative z-10 dan background solid */}
          <section className="py-20 px-6 md:px-12 bg-[var(--card-bg)] relative z-10">
            <div className="max-w-4xl mx-auto bg-purple-900 bg-opacity-40 rounded-xl p-10 text-center border border-purple-700 shadow-xl">
              <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-6 leading-tight">
                Mari Bangun Masa Depan Digital Bersama Kami!
              </h2>
              <p className="text-lg text-gray-300 mb-8">
                Tim ahli kami siap mendengarkan ide-ide brilian Anda dan
                mengubahnya menjadi kenyataan. Jangan ragu untuk menghubungi
                kami untuk konsultasi gratis.
              </p>
              <a
                href="#contact"
                className="inline-flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105"
              >
                Hubungi Kami Sekarang <FiArrowRight className="ml-2 text-xl" />
              </a>
            </div>
          </section>
          {/* Contact Section - Tambahkan relative z-10 dan background solid */}
          <section
            id="contact"
            className="py-20 bg-[var(--dark-blue-bg)] relative z-10"
          >
            <div className="container mx-auto px-6">
              <h3 className="text-3xl font-bold text-center mb-4 text-white">
                HUBUNGI KAMI
              </h3>
              <div className="w-24 h-1 bg-purple-500 mx-auto mb-12 rounded-full"></div>
              <div className="max-w-xl mx-auto">
                <form className="space-y-6">
                  <input
                    type="text"
                    placeholder="Nama Anda"
                    className="w-full p-4 bg-[var(--card-bg)] border border-[var(--card-border)] rounded-lg focus:outline-none focus:border-purple-500 text-white"
                  />
                  <input
                    type="email"
                    placeholder="Email Anda"
                    className="w-full p-4 bg-[var(--card-bg)] border border-[var(--card-border)] rounded-lg focus:outline-none focus:border-purple-500 text-white"
                  />
                  <textarea
                    placeholder="Pesan Anda"
                    rows="5"
                    className="w-full p-4 bg-[var(--card-bg)] border border-[var(--card-border)] rounded-lg focus:outline-none focus:border-purple-500 text-white"
                  ></textarea>
                  <button
                    type="submit"
                    className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-8 rounded-lg transition-colors"
                  >
                    Kirim Pesan
                  </button>
                </form>
              </div>
            </div>
          </section>
        </main>
        {/* Footer */}
        <footer className="bg-[var(--card-bg)] border-t border-[var(--card-border)] text-gray-400 relative z-10">
          {" "}
          {/* Tambahkan relative z-10 */}
          <div className="container mx-auto px-6 py-10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
              <div>
                <h3 className="text-white text-lg font-semibold mb-2">
                  PT. WANARA DIGITAL INDONESIA
                </h3>
                <p className="text-sm">
                  Inovasi digital untuk masa depan. Kami mengembangkan solusi
                  teknologi yang berdampak dan berkelanjutan.
                </p>
              </div>
              <div>
                <h4 className="text-white text-md font-semibold mb-2">
                  Navigasi
                </h4>
                <ul className="space-y-2 text-sm">
                  <li>
                    <a href="#about" className="hover:text-white">
                      Tentang Kami
                    </a>
                  </li>
                  <li>
                    <a href="#services" className="hover:text-white">
                      Layanan
                    </a>
                  </li>
                  <li>
                    <a href="#portfolio" className="hover:text-white">
                      Portofolio
                    </a>
                  </li>
                  <li>
                    <a href="#contact" className="hover:text-white">
                      Kontak
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-white text-md font-semibold mb-2">
                  Hubungi Kami
                </h4>
                <p className="text-sm">
                  Email:{" "}
                  <a
                    href="mailto:halo@wanaradigital.id"
                    className="hover:text-white"
                  >
                    halo@wanaradigital.id
                  </a>
                  <br />
                  WhatsApp:{" "}
                  <a
                    href="https://wa.me/6285176983548"
                    className="hover:text-white"
                  >
                    +62 851-7698-3548
                  </a>
                </p>
              </div>
            </div>
            <div className="border-t border-gray-800 mt-10 pt-6 text-center text-sm text-gray-500">
              &copy; {new Date().getFullYear()} PT. WANARA DIGITAL INDONESIA.
              <br /> All Rights Reserved.
            </div>
          </div>
        </footer>
      </div>
    </ParallaxProvider>
  );
}
