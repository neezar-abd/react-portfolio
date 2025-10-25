import { FaRobot, FaBriefcase, FaHandPeace, FaArrowRight, FaTimes, FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { useState } from 'react';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  const data = [
    { 
      name: "Quiz Generator – SMK Students", 
      desc: "Platform AI-powered untuk generate quiz interaktif dengan machine learning dan auto-grading system.", 
      tech: ["Next.js", "TypeScript", "Supabase", "Shadcn/UI", "Gemini AI"],
      image: "/project/Soalin-AI-Quiz.webp",
      githubLink: "https://github.com/neezar-abd/Quiz-Generator---SMK-Students",
      detail: {
        fullTitle: "Quiz Generator – SMK Students",
        description: "Aplikasi web berbasis Next.js dan Supabase untuk membuat dan mengelola kuis otomatis bagi siswa SMK. Proyek ini dikembangkan untuk membantu guru dan siswa dalam membuat soal interaktif berbasis AI.",
        features: [
          "Autogenerate soal kuis dengan bantuan AI",
          "Manajemen data menggunakan Supabase Database",
          "Sistem autentikasi login siswa dan guru",
          "Dashboard untuk melihat hasil dan statistik kuis",
          "Desain UI yang bersih dan mudah digunakan, dengan komponen dari Shadcn/UI"
        ],
        purpose: "Proyek ini berfokus pada penerapan AI dan database real-time dalam konteks pendidikan SMK.",
        techStack: "Next.js, Tailwind CSS, Supabase, TypeScript, Shadcn/UI, Gemini AI API"
      }
    },
    { 
      name: "Next.js Website Portfolio", 
      desc: "Portfolio website personal dengan design modern, dark mode, dan integrasi GitHub & LinkedIn.", 
      tech: ["Next.js", "TypeScript", "Tailwind CSS", "Shadcn/UI"],
      image: "/project/website-portfolio.webp",
      githubLink: "https://github.com/neezar-abd/Next.js-Website-Portfolio-",
      detail: {
        fullTitle: "Next.js Website Portfolio",
        description: "Sebuah personal portfolio website yang dirancang menggunakan Next.js dan Tailwind CSS dengan pendekatan modern UI/UX design. Website ini menampilkan profil, proyek, dan sertifikasi saya sebagai web developer.",
        features: [
          "Tampilan responsif dengan desain profesional bergaya minimalis",
          "Dark/Light mode otomatis",
          "Integrasi dengan GitHub dan LinkedIn",
          "Struktur folder modular dengan App Router Next.js terbaru",
          "Optimasi SEO dan performa menggunakan metadata dinamis"
        ],
        purpose: "Tujuan proyek ini adalah membangun personal branding profesional yang bisa menampilkan keahlian saya di bidang front-end dan back-end development.",
        techStack: "Next.js 15, Tailwind CSS, Shadcn/UI, TypeScript, Vercel Hosting"
      }
    },
    { 
      name: "Hello World - First Project", 
      desc: "Project pertama dalam perjalanan belajar web development dengan HTML, CSS, dan JavaScript vanilla.", 
      tech: ["HTML", "CSS", "JavaScript"],
      image: "/project/Hello-world.webp",
      githubLink: "#",
      detail: {
        fullTitle: "Hello World - First Project",
        description: "Project pertama dalam perjalanan belajar web development dengan HTML, CSS, dan JavaScript vanilla. Ini adalah langkah awal saya untuk memahami dasar-dasar pemrograman web.",
        features: [
          "Struktur HTML semantik",
          "Styling dengan CSS murni",
          "Interaktivitas dengan JavaScript vanilla",
          "Responsive design sederhana"
        ],
        purpose: "Proyek ini menjadi fondasi pembelajaran saya dalam dunia web development.",
        techStack: "HTML, CSS, JavaScript"
      }
    },
  ];

  return (
    <section id="projects" className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto text-center px-6 md:px-12 lg:px-16">
        <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">Featured Projects</h2>
        <p className="text-gray-600 mb-12">Beberapa proyek terbaik yang telah saya kerjakan dengan hasil yang memuaskan</p>
        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {data.map((p, i) => {
            const icons = [FaRobot, FaBriefcase, FaHandPeace];
            const IconComponent = icons[i];
            
            return (
              <div key={i} className="group relative bg-white border-2 border-gray-200 rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl hover:border-yellow-400 hover:-translate-y-2 transition-all duration-300">
                {/* Project Image */}
                <div className="relative h-48 bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden">
                  <img 
                    src={p.image} 
                    alt={p.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    onError={(e) => {
                      const parent = e.target.parentElement;
                      e.target.style.display = 'none';
                      const iconDiv = document.createElement('div');
                      iconDiv.className = 'flex items-center justify-center h-full text-gray-400';
                      parent.appendChild(iconDiv);
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
              
                {/* Project Content */}
                <div className="p-8 text-left">
                  <h3 className="text-2xl font-bold mb-3 text-gray-900">{p.name}</h3>
                  <p className="text-gray-600 mb-4 text-sm">{p.desc}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {p.tech.map((tech, idx) => (
                      <span key={idx} className="text-xs px-3 py-1 bg-yellow-100 text-yellow-700 rounded-full font-medium">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <button 
                    onClick={() => setSelectedProject(p)}
                    className="inline-flex items-center gap-2 text-yellow-500 hover:text-yellow-600 font-semibold transition-all"
                  >
                    Lihat Detail 
                    <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Modal */}
        {selectedProject && (
          <div 
            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fadeIn"
            onClick={() => setSelectedProject(null)}
          >
            <div 
              className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl animate-slideUp"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="sticky top-0 bg-gradient-to-r from-yellow-400 to-yellow-500 p-6 flex justify-between items-start z-10">
                <div>
                  <h3 className="text-2xl font-bold text-black mb-2">{selectedProject.detail.fullTitle}</h3>
                  <div className="flex gap-3">
                    {selectedProject.githubLink !== "#" && (
                      <a 
                        href={selectedProject.githubLink} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-black hover:text-white transition-colors text-sm font-medium bg-black/10 hover:bg-black/20 px-3 py-1 rounded-full"
                      >
                        <FaGithub /> GitHub
                      </a>
                    )}
                  </div>
                </div>
                <button 
                  onClick={() => setSelectedProject(null)}
                  className="text-black hover:text-white transition-colors p-2 hover:bg-black/10 rounded-full"
                >
                  <FaTimes size={24} />
                </button>
              </div>

              {/* Modal Content */}
              <div className="p-6">
                {/* Project Image */}
                <div className="mb-6 rounded-xl overflow-hidden shadow-lg">
                  <img 
                    src={selectedProject.image} 
                    alt={selectedProject.name}
                    className="w-full h-auto"
                  />
                </div>

                {/* Details */}
                <div className="space-y-6">
                  <div>
                    <h4 className="text-sm font-semibold text-gray-500 uppercase mb-2">Deskripsi</h4>
                    <p className="text-gray-700 leading-relaxed">{selectedProject.detail.description}</p>
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold text-gray-500 uppercase mb-3">Fitur Utama</h4>
                    <ul className="space-y-2">
                      {selectedProject.detail.features.map((feature, idx) => (
                        <li key={idx} className="text-gray-700 flex items-start">
                          <span className="text-yellow-500 mr-2 mt-1">✓</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold text-gray-500 uppercase mb-2">Tujuan Proyek</h4>
                    <p className="text-gray-700 leading-relaxed">{selectedProject.detail.purpose}</p>
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold text-gray-500 uppercase mb-2">Tech Stack</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.detail.techStack.split(', ').map((tech, idx) => (
                        <span key={idx} className="text-sm px-4 py-2 bg-yellow-100 text-yellow-700 rounded-full font-medium">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="mt-8 flex gap-4 justify-center">
                  {selectedProject.githubLink !== "#" && (
                    <a 
                      href={selectedProject.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-black text-white px-6 py-3 rounded-full font-semibold hover:bg-gray-800 transition-all duration-300"
                    >
                      <FaGithub /> View on GitHub
                    </a>
                  )}
                  <button 
                    onClick={() => setSelectedProject(null)}
                    className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-black px-8 py-3 rounded-full font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300"
                  >
                    Tutup
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}