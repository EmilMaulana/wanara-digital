import { FiCode, FiLayout, FiSmartphone, FiArrowRight } from 'react-icons/fi';

export default function Home() {
  return (
    <div className="bg-black text-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-black bg-opacity-80 backdrop-blur-sm">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">
            wanara<span className="text-purple-500">.digital</span>
          </h1>
          <nav className="hidden md:flex space-x-8">
            <a href="#about" className="hover:text-purple-400 transition-colors">Tentang Kami</a>
            <a href="#services" className="hover:text-purple-400 transition-colors">Layanan</a>
            <a href="#portfolio" className="hover:text-purple-400 transition-colors">Portofolio</a>
            <a href="#contact" className="hover:text-purple-400 transition-colors">Kontak</a>
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
              Kami adalah partner teknologi Anda dalam menciptakan perangkat lunak yang andal, skalabel, dan modern.
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
        <section id="about" className="py-20 bg-gray-900">
          <div className="container mx-auto px-6 text-center">
            <h3 className="text-3xl font-bold mb-4">Tentang wanara.digital</h3>
            <div className="w-24 h-1 bg-purple-500 mx-auto mb-8"></div>
            <p className="text-gray-400 max-w-3xl mx-auto text-lg">
            PT Wanara Digital Indonesia didirikan dengan komitmen kuat untuk menjadi pemain kunci dalam pengembangan perangkat lunak inovatif dan penyedia solusi digital yang kompetitif.
            </p>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-20 bg-black">
          <div className="container mx-auto px-6">
            <h3 className="text-3xl font-bold text-center mb-4">Layanan Kami</h3>
            <div className="w-24 h-1 bg-purple-500 mx-auto mb-12"></div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Service Card 1 */}
              <div className="bg-gray-900 p-8 rounded-lg border border-gray-800 hover:border-purple-500 transition-all duration-300">
                <FiCode className="text-5xl text-purple-500 mb-4" />
                <h4 className="text-2xl font-bold mb-2">Web Development</h4>
                <p className="text-gray-400">
                  Pengembangan website custom, mulai dari landing page, company profile, hingga aplikasi web kompleks dengan teknologi terkini.
                </p>
              </div>
              {/* Service Card 2 */}
              <div className="bg-gray-900 p-8 rounded-lg border border-gray-800 hover:border-purple-500 transition-all duration-300">
                <FiSmartphone className="text-5xl text-purple-500 mb-4" />
                <h4 className="text-2xl font-bold mb-2">Mobile App Development</h4>
                <p className="text-gray-400">
                  Menciptakan aplikasi mobile (iOS & Android) yang intuitif, cepat, dan memberikan pengalaman pengguna terbaik.
                </p>
              </div>
              {/* Service Card 3 */}
              <div className="bg-gray-900 p-8 rounded-lg border border-gray-800 hover:border-purple-500 transition-all duration-300">
                <FiLayout className="text-5xl text-purple-500 mb-4" />
                <h4 className="text-2xl font-bold mb-2">UI/UX Design</h4>
                <p className="text-gray-400">
                  Merancang antarmuka yang tidak hanya indah secara visual, tetapi juga fungsional dan mudah digunakan oleh target pasar Anda.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Portfolio Section */}
        <section id="portfolio" className="py-20 bg-gray-900">
          <div className="container mx-auto px-6">
            <h3 className="text-3xl font-bold text-center mb-4">Portofolio Proyek</h3>
            <div className="w-24 h-1 bg-purple-500 mx-auto mb-12"></div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Ganti dengan data proyek Anda */}
              <div className="group relative overflow-hidden rounded-lg">
                <img src="https://via.placeholder.com/600x400/8B5CF6/FFFFFF?text=Proyek+A" alt="Proyek A" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                <div className="absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="text-center">
                    <h4 className="text-xl font-bold">Aplikasi Manajemen Proyek</h4>
                    <p className="text-sm text-gray-300">Web Development</p>
                  </div>
                </div>
              </div>
              <div className="group relative overflow-hidden rounded-lg">
                <img src="https://via.placeholder.com/600x400/8B5CF6/FFFFFF?text=Proyek+B" alt="Proyek B" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                <div className="absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                   <div className="text-center">
                    <h4 className="text-xl font-bold">Aplikasi E-Commerce</h4>
                    <p className="text-sm text-gray-300">Mobile Development</p>
                  </div>
                </div>
              </div>
              <div className="group relative overflow-hidden rounded-lg">
                <img src="https://via.placeholder.com/600x400/8B5CF6/FFFFFF?text=Proyek+C" alt="Proyek C" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                <div className="absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                   <div className="text-center">
                    <h4 className="text-xl font-bold">Desain Sistem Keuangan</h4>
                    <p className="text-sm text-gray-300">UI/UX Design</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 bg-black">
          <div className="container mx-auto px-6">
            <h3 className="text-3xl font-bold text-center mb-4">Hubungi Kami</h3>
            <div className="w-24 h-1 bg-purple-500 mx-auto mb-12"></div>
            <div className="max-w-xl mx-auto">
              <form className="space-y-6">
                <input type="text" placeholder="Nama Anda" className="w-full p-4 bg-gray-900 border border-gray-700 rounded-lg focus:outline-none focus:border-purple-500" />
                <input type="email" placeholder="Email Anda" className="w-full p-4 bg-gray-900 border border-gray-700 rounded-lg focus:outline-none focus:border-purple-500" />
                <textarea placeholder="Pesan Anda" rows="5" className="w-full p-4 bg-gray-900 border border-gray-700 rounded-lg focus:outline-none focus:border-purple-500"></textarea>
                <button type="submit" className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-8 rounded-lg transition-colors">
                  Kirim Pesan
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 border-t border-gray-800">
        <div className="container mx-auto px-6 py-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} wanara.digital. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
}