import { FaTrophy, FaTimes } from 'react-icons/fa';
import { useState } from 'react';

export default function Certificates() {
  const [selectedCert, setSelectedCert] = useState(null);

  const certificates = [
    {
      title: "Coding Camp Sertifikat",
      issuer: "DBS Foundation x Dicoding Indonesia",
      date: "2025",
      image: "/sertifikat/codingcamp.webp",
      detail: {
        fullTitle: "Coding Camp powered by DBS Foundation",
        year: "2025",
        description: "Program intensif hasil kolaborasi antara DBS Foundation dan Dicoding Indonesia. Saya berhasil menyelesaikan pelatihan Front-End dan Back-End Development yang berfokus pada penguasaan teknologi web modern, pengelolaan proyek digital, serta peningkatan soft skill seperti problem-solving, komunikasi, dan kolaborasi profesional.",
        period: "Januari – April 2025"
      }
    },
    {
      title: "GEMA Sertifikat",
      issuer: "GEMA Foundation",
      date: "2025",
      image: "/sertifikat/gema.png",
      detail: {
        fullTitle: "Upskilling Batch 3 – Hak Kekayaan Intelektual, Technopreneur, dan Artificial Intelligence",
        year: "2025",
        description: "Diselenggarakan oleh GEMA Foundation, program ini memperkenalkan konsep technopreneurship serta penerapan AI dalam bisnis modern. Saya mempelajari dasar hukum hak kekayaan intelektual serta strategi membangun inovasi digital yang berkelanjutan.",
        period: "Oktober 2025"
      }
    },
    {
      title: "Learning X Sertifikat",
      issuer: "LearningX",
      date: "2024",
      image: "/sertifikat/learningx.webp",
      detail: {
        fullTitle: "Xpresso ACP Lite – Web Programming",
        year: "2024",
        description: "Program LearningX yang membekali peserta dengan pemahaman praktis pengembangan web modern, mulai dari struktur HTML, CSS, JavaScript, hingga konsep responsive design dan manajemen proyek sederhana. Sertifikat disahkan oleh Jeong Kyu Kim, Head of LearningX.",
        period: "2024"
      }
    },
    {
      title: "Broadcasting Sertifikat",
      issuer: "Dinas Pendidikan Provinsi Jawa Timur",
      date: "2024",
      image: "/sertifikat/broadcasting.webp",
      detail: {
        fullTitle: "Pengembangan Media Broadcasting bagi Siswa",
        year: "2024",
        description: "Diselenggarakan oleh UPT TIKP Dinas Pendidikan Provinsi Jawa Timur, pelatihan ini fokus pada produksi dan penyuntingan media digital untuk keperluan edukasi dan publikasi sekolah. Saya belajar prinsip dasar broadcasting, video editing, serta storytelling visual untuk konten pendidikan.",
        period: "Oktober 2024"
      }
    }
  ];

  return (
    <section id="certificates" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
            Certificates & Achievements
          </h2>
          <p className="text-gray-600 text-lg">
            Sertifikasi dan pencapaian dalam perjalanan belajar saya
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {certificates.map((cert, i) => (
            <div 
              key={i} 
              onClick={() => setSelectedCert(cert)}
              className="group relative bg-white border-2 border-gray-200 rounded-xl overflow-hidden hover:border-yellow-400 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 cursor-pointer"
            >
              {/* Certificate Image */}
              <div className="relative h-56 bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden">
                <img 
                  src={cert.image} 
                  alt={cert.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  onError={(e) => {
                    const parent = e.target.parentElement;
                    e.target.style.display = 'none';
                    const fallbackDiv = document.createElement('div');
                    fallbackDiv.className = 'flex items-center justify-center h-full bg-gradient-to-br from-yellow-100 to-yellow-200';
                    fallbackDiv.innerHTML = '<div class="text-center p-4"><div class="text-xs font-semibold text-gray-700">Certificate</div></div>';
                    parent.appendChild(fallbackDiv);
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-yellow-400/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-black font-bold text-lg">Lihat Detail</span>
                </div>
              </div>

              {/* Certificate Info */}
              <div className="p-4 bg-white">
                <h3 className="font-bold text-gray-900 text-sm mb-1 line-clamp-2">{cert.title}</h3>
                <p className="text-xs text-gray-600 mb-1">{cert.issuer}</p>
                <p className="text-xs text-yellow-600 font-semibold">{cert.date}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {selectedCert && (
          <div 
            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fadeIn"
            onClick={() => setSelectedCert(null)}
          >
            <div 
              className="bg-white rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl animate-slideUp"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="sticky top-0 bg-gradient-to-r from-yellow-400 to-yellow-500 p-6 flex justify-between items-start">
                <div>
                  <h3 className="text-2xl font-bold text-black mb-2">{selectedCert.detail.fullTitle}</h3>
                  <p className="text-black/80 font-medium">{selectedCert.detail.year}</p>
                </div>
                <button 
                  onClick={() => setSelectedCert(null)}
                  className="text-black hover:text-white transition-colors p-2 hover:bg-black/10 rounded-full"
                >
                  <FaTimes size={24} />
                </button>
              </div>

              {/* Modal Content */}
              <div className="p-6">
                {/* Certificate Image */}
                <div className="mb-6 rounded-xl overflow-hidden shadow-lg">
                  <img 
                    src={selectedCert.image} 
                    alt={selectedCert.title}
                    className="w-full h-auto"
                  />
                </div>

                {/* Details */}
                <div className="space-y-4">
                  <div>
                    <h4 className="text-sm font-semibold text-gray-500 uppercase mb-2">Penyelenggara</h4>
                    <p className="text-lg font-medium text-gray-900">{selectedCert.issuer}</p>
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold text-gray-500 uppercase mb-2">Periode</h4>
                    <p className="text-lg font-medium text-gray-900">{selectedCert.detail.period}</p>
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold text-gray-500 uppercase mb-2">Deskripsi Program</h4>
                    <p className="text-gray-700 leading-relaxed">{selectedCert.detail.description}</p>
                  </div>
                </div>

                {/* Close Button */}
                <div className="mt-8 text-center">
                  <button 
                    onClick={() => setSelectedCert(null)}
                    className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-black px-8 py-3 rounded-full font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300"
                  >
                    Tutup
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* View All Button */}
        <div className="text-center mt-12">
          <a 
            href="#contact" 
            className="inline-block border-2 border-yellow-400 text-yellow-600 px-8 py-3 rounded-full hover:bg-yellow-400 hover:text-black transition-all duration-300 font-semibold"
          >
            Lihat Semua Sertifikat
          </a>
        </div>
      </div>
    </section>
  );
}
