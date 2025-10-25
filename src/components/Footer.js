import { FaGithub, FaInstagram, FaEnvelope } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-black text-white py-8 text-center border-t border-yellow-400/20">
      <div className="container mx-auto px-4">
        <div className="mb-4">
          <h3 className="text-xl font-bold bg-gradient-to-r from-yellow-400 to-yellow-200 bg-clip-text text-transparent mb-2">
            Neezar Abd.
          </h3>
          <p className="text-gray-400 text-sm">
            Fullstack Developer & Creative Visual Storyteller dari Kota Probolinggo, Indonesia.
          </p>
        </div>
        <div className="flex gap-6 justify-center mb-4">
          <a href="https://github.com/neezar-abd" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-yellow-400 transition flex items-center gap-2">
            <FaGithub className="text-xl" /> GitHub
          </a>
          <a href="https://www.instagram.com/neezar_abd" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-yellow-400 transition flex items-center gap-2">
            <FaInstagram className="text-xl" /> Instagram
          </a>
          <a href="mailto:neezar.tech@gmail.com" className="text-gray-400 hover:text-yellow-400 transition flex items-center gap-2">
            <FaEnvelope className="text-xl" /> Email
          </a>
        </div>
        <p className="text-gray-500 text-sm">
          © {new Date().getFullYear()} <span className="text-yellow-400 font-semibold">Neezar Abd.</span> All rights reserved.
          <br/>
          Built with Next.js, Tailwind CSS & React
        </p>
      </div>
    </footer>
  );
}