import { FaCode, FaPalette, FaVideo, FaCheckCircle } from 'react-icons/fa';

export default function About() {
  const services = [
    {
      title: "Full-Stack Development",
      desc: "Membangun aplikasi web end-to-end dengan teknologi modern dan arsitektur yang scalable.",
      skills: ["React, Next.js, TypeScript, Tailwind CSS", "MongoDB, Supabase, Firebase", "Responsive Design & Modern UI"],
      icon: FaCode
    },
    {
      title: "Frontend Development",
      desc: "Menciptakan user interface yang responsive, interactive, dan user-friendly dengan design modern.",
      skills: ["Component-based Architecture", "State Management & API Integration", "Performance Optimization"],
      icon: FaPalette
    },
    {
      title: "Video Production",
      desc: "Menghasilkan konten video berkualitas tinggi untuk YouTube, social media, dan dokumentasi project.",
      skills: ["Video Editing & Color Grading", "Motion Graphics & Animation", "Sound Design & Mixing"],
      icon: FaVideo
    }
  ];

  return (
    <section id="about" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
            Services & Expertise
          </h2>
          <p className="text-gray-600 text-lg">
            Kombinasi keahlian teknis dan kreativitas untuk solusi digital terbaik
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, i) => {
            const IconComponent = service.icon;
            return (
              <div key={i} className="group bg-gradient-to-br from-gray-50 to-white border-2 border-gray-200 rounded-2xl p-8 hover:border-yellow-400 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
                <div className="mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <IconComponent className="text-3xl text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.desc}</p>
                </div>
                <ul className="space-y-2">
                  {service.skills.map((skill, idx) => (
                    <li key={idx} className="text-sm text-gray-700 flex items-start">
                      <FaCheckCircle className="text-yellow-500 mr-2 mt-1 flex-shrink-0" />
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        <div className="mt-20 max-w-4xl mx-auto bg-gradient-to-br from-gray-900 to-black rounded-3xl p-12 text-white text-center">
          <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-yellow-400 to-yellow-200 bg-clip-text text-transparent">
            Tentang Saya
          </h3>
          <p className="text-gray-300 text-lg leading-relaxed">
            Saya adalah <span className="text-yellow-400 font-semibold">Software Engineer</span> dan <span className="text-yellow-400 font-semibold">Video Creator</span> yang passionate dalam membangun produk digital modern. 
            Dengan pengalaman lebih dari 5 tahun, saya fokus menciptakan solusi yang tidak hanya fungsional tetapi juga memberikan pengalaman pengguna yang luar biasa.
          </p>
          <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
            <div className="bg-white/10 backdrop-blur rounded-lg p-4">
              <p className="text-yellow-400 font-bold">Full-Stack</p>
              <p className="text-gray-400">Web Development</p>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-lg p-4">
              <p className="text-yellow-400 font-bold">Video</p>
              <p className="text-gray-400">Production</p>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-lg p-4">
              <p className="text-yellow-400 font-bold">UI/UX</p>
              <p className="text-gray-400">Design</p>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-lg p-4">
              <p className="text-yellow-400 font-bold">5+ Years</p>
              <p className="text-gray-400">Experience</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
