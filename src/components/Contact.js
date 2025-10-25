import { FaGithub, FaInstagram, FaEnvelope } from 'react-icons/fa';

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-gradient-to-br from-gray-900 to-black text-center text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-20"></div>
      <div className="relative z-10">
        <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-yellow-400 to-yellow-200 bg-clip-text text-transparent">Mari Berkolaborasi</h2>
        <p className="text-gray-300 mb-8 text-lg">Punya project menarik atau ingin berdiskusi tentang ide Anda?<br/>Saya siap membantu mewujudkannya menjadi kenyataan.</p>
        <div className="flex gap-4 justify-center flex-wrap">
          <a href="mailto:neezar.tech@gmail.com" className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-400 to-yellow-500 text-black px-8 py-3 rounded-full hover:scale-105 hover:shadow-2xl hover:shadow-yellow-400/50 transition-all duration-300 font-semibold">
            <FaEnvelope /> neezar.tech@gmail.com
          </a>
          <a href="https://github.com/neezar-abd" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 border-2 border-yellow-400 text-yellow-400 px-8 py-3 rounded-full hover:bg-yellow-400 hover:text-black transition-all duration-300 font-semibold">
            <FaGithub /> GitHub
          </a>
          <a href="https://www.instagram.com/neezar_abd" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 border-2 border-yellow-400 text-yellow-400 px-8 py-3 rounded-full hover:bg-yellow-400 hover:text-black transition-all duration-300 font-semibold">
            <FaInstagram /> Instagram
          </a>
        </div>
      </div>
    </section>
  );
}