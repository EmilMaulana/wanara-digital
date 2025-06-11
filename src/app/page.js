import { FiCode, FiLayout, FiSmartphone, FiArrowRight } from "react-icons/fi";

export default function Home() {
  return (
    <div className="bg-black text-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-black bg-opacity-80 backdrop-blur-sm">
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
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section
          id="home"
          className="min-h-screen flex items-center bg-cover bg-center"
          style={{ backgroundImage: "url('/hero-bg.jpg')" }}
        >
          <div className="absolute inset-0 bg-black opacity-70"></div>
          <div className="container mx-auto px-6 text-center relative z-10">
            <h2 className="text-4xl md:text-6xl font-extrabold leading-tight mb-4">
              Membangun Solusi Digital <br /> Inovatif untuk Masa Depan
            </h2>
            <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Kami adalah partner teknologi Anda dalam menciptakan perangkat
              lunak yang andal, skalabel, dan modern.
            </p>
            <a
              href="#contact"
              className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-8 rounded-full transition-transform transform hover:scale-105 inline-flex items-center"
            >
              Diskusikan Proyek Anda <FiArrowRight className="ml-2" />
            </a>
          </div>
        </section>

        {/* About Us Section */}
        <section id="about" className="py-20 bg-gray-900 text-gray-300">
          <div className="container mx-auto px-6 text-center">
            <h3 className="text-4xl font-bold text-white mb-4 leading-tight">
              TENTANG <br />
              <span className="text-purple-500">Wanara Digital Indonesia</span>
            </h3>
            <div className="w-20 h-1 bg-purple-500 mx-auto mb-6 rounded-full"></div>
            <p className="max-w-3xl mx-auto text-lg leading-relaxed">
              <strong>PT Wanara Digital Indonesia</strong> adalah perusahaan
              startup digital yang berfokus pada pengembangan perangkat lunak
              dan solusi teknologi modern. Kami hadir untuk membantu bisnis
              bertransformasi ke era digital melalui layanan yang inovatif,
              efisien, dan scalable. Dengan tim yang berpengalaman dan semangat
              untuk berinovasi, kami siap menjadi mitra digital terbaik untuk
              perusahaan, institusi, dan startup di Indonesia.
            </p>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-20 bg-black">
          <div className="container mx-auto px-6">
            <h3 className="text-3xl font-bold text-center mb-4">
              LAYANAN KAMI
            </h3>
            <div className="w-24 h-1 bg-purple-500 mx-auto mb-12 rounded-full"></div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Service Card 1 */}
              <div className="bg-gray-900 p-8 rounded-lg border border-gray-800 hover:border-purple-500 transition-all duration-300">
                <FiCode className="text-5xl text-purple-500 mb-4" />
                <h4 className="text-2xl font-bold mb-2">Web Development</h4>
                <p className="text-gray-400">
                  Pengembangan website custom, mulai dari landing page, company
                  profile, hingga aplikasi web kompleks dengan teknologi
                  terkini.
                </p>
              </div>
              {/* Service Card 2 */}
              <div className="bg-gray-900 p-8 rounded-lg border border-gray-800 hover:border-purple-500 transition-all duration-300">
                <FiSmartphone className="text-5xl text-purple-500 mb-4" />
                <h4 className="text-2xl font-bold mb-2">
                  Mobile App Development
                </h4>
                <p className="text-gray-400">
                  Menciptakan aplikasi mobile (iOS & Android) yang intuitif,
                  cepat, dan memberikan pengalaman pengguna terbaik.
                </p>
              </div>
              {/* Service Card 3 */}
              <div className="bg-gray-900 p-8 rounded-lg border border-gray-800 hover:border-purple-500 transition-all duration-300">
                <FiLayout className="text-5xl text-purple-500 mb-4" />
                <h4 className="text-2xl font-bold mb-2">UI/UX Design</h4>
                <p className="text-gray-400">
                  Merancang antarmuka yang tidak hanya indah secara visual,
                  tetapi juga fungsional dan mudah digunakan oleh target pasar
                  Anda.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Portfolio Section */}
        <section id="portfolio" className="py-20 bg-gray-900">
          <div className="container mx-auto px-6">
            <h3 className="text-3xl font-bold text-center mb-4">
              PORTFOLIO PROYEK
            </h3>
            <div className="w-24 h-1 bg-purple-500 mx-auto mb-12 rounded-full"></div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Ganti dengan data proyek Anda */}
              <div className="group relative overflow-hidden rounded-lg">
                <img
                  src="./img/proyek 1.jpeg"
                  alt="Proyek A"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="text-center">
                    <h4 className="text-xl font-bold">Al-Quran Online</h4>
                    <p className="text-sm text-gray-300">Web Development</p>
                  </div>
                </div>
              </div>
              <div className="group relative overflow-hidden rounded-lg">
                <img
                  src="./img/proyek 2.jpeg"
                  alt="Proyek B"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="text-center">
                    <h4 className="text-xl font-bold">Company Website</h4>
                    <p className="text-sm text-gray-300">Web Aplication</p>
                  </div>
                </div>
              </div>
              <div className="group relative overflow-hidden rounded-lg">
                <img
                  src="./img/proyek 4.jpeg"
                  alt="Proyek C"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="text-center">
                    <h4 className="text-xl font-bold">Website Absensi</h4>
                    <p className="text-sm text-gray-300">Web Aplication</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 bg-black">
          <div className="container mx-auto px-6">
            <h3 className="text-3xl font-bold text-center mb-4">
              HUBUNGI KAMI
            </h3>
            <div className="w-24 h-1 bg-purple-500 mx-auto mb-12 rounded-full"></div>
            <div className="max-w-xl mx-auto">
              <form className="space-y-6">
                <input
                  type="text"
                  placeholder="Nama Anda"
                  className="w-full p-4 bg-gray-900 border border-gray-700 rounded-lg focus:outline-none focus:border-purple-500"
                />
                <input
                  type="email"
                  placeholder="Email Anda"
                  className="w-full p-4 bg-gray-900 border border-gray-700 rounded-lg focus:outline-none focus:border-purple-500"
                />
                <textarea
                  placeholder="Pesan Anda"
                  rows="5"
                  className="w-full p-4 bg-gray-900 border border-gray-700 rounded-lg focus:outline-none focus:border-purple-500"
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
      <footer className="bg-gray-900 border-t border-gray-800 text-gray-400">
        <div className="container mx-auto px-6 py-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
            {/* Company Info */}
            <div>
              <h3 className="text-white text-lg font-semibold mb-2">
                PT. WANARA DIGITAL INDONESIA
              </h3>
              <p className="text-sm">
                Inovasi digital untuk masa depan. Kami mengembangkan solusi
                teknologi yang berdampak dan berkelanjutan.
              </p>
            </div>

            {/* Navigation */}
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
                    Portfolio
                  </a>
                </li>
                <li>
                  <a href="#contacts" className="hover:text-white">
                    Kontak
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
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

          {/* Copyright */}
          <div className="border-t border-gray-800 mt-10 pt-6 text-center text-sm text-gray-500">
            &copy; {new Date().getFullYear()} PT. WANARA DIGITAL INDONESIA.
            <br /> All Rights Reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
