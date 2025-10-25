export default function Navbar() {
  return (
    <nav className="bg-black/95 backdrop-blur-sm text-white py-5 sticky top-0 z-50 shadow-lg border-b border-yellow-400/20">
      <div className="container mx-auto flex justify-between items-center px-6">
        <h1 className="text-2xl font-bold bg-gradient-to-r from-yellow-400 to-yellow-200 bg-clip-text text-transparent">
          Neezar Abd.
        </h1>
        <ul className="flex gap-8">
          <li><a href="#about" className="hover:text-yellow-400 transition-all duration-300 font-medium">About</a></li>
          <li><a href="#projects" className="hover:text-yellow-400 transition-all duration-300 font-medium">Projects</a></li>
          <li><a href="#contact" className="hover:text-yellow-400 transition-all duration-300 font-medium">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
}