import { FaHandPaper } from 'react-icons/fa';

export default function Hero() {
  return (
    <section className="text-center py-32 bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-20"></div>
      <div className="relative z-10">
        <p className="text-sm uppercase tracking-wider text-yellow-400 mb-4 flex items-center justify-center gap-2">
          HI, I'M <FaHandPaper className="inline animate-pulse" />
        </p>
        <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-yellow-400 via-yellow-200 to-yellow-400 bg-clip-text text-transparent">
          Neezar Abd.
        </h1>
        <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
          Fullstack Developer & Creative Visual Storyteller yang membangun aplikasi web modern dengan 
          <span className="text-yellow-400"> Next.js</span>, 
          <span className="text-yellow-400"> Tailwind CSS</span>, dan 
          <span className="text-yellow-400"> scalable backend</span>.
        </p>
        <div className="flex gap-4 justify-center">
          <a href="#projects" className="inline-block bg-gradient-to-r from-yellow-400 to-yellow-500 text-black px-8 py-3 rounded-full hover:scale-105 hover:shadow-2xl hover:shadow-yellow-400/50 transition-all duration-300 font-semibold">
            Lihat Portfolio
          </a>
          <a href="#contact" className="inline-block border-2 border-yellow-400 text-yellow-400 px-8 py-3 rounded-full hover:bg-yellow-400 hover:text-black transition-all duration-300 font-semibold">
            Hubungi Saya
          </a>
        </div>
      </div>
    </section>
  );
}