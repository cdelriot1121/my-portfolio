import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu } from "lucide-react";

const sections = ["Home", "About", "Projects", "Contact"];

export default function Portfolio() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [text, setText] = useState("");
  const fullText = "Carlos Andres";
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < fullText.length) {
      const timeout = setTimeout(() => {
        setText((prev) => prev + fullText[index]);
        setIndex(index + 1);
      }, 150);
      return () => clearTimeout(timeout);
    }
  }, [index]);

  return (
    <div className="font-sans bg-gray-900 text-gray-200 min-h-screen">
      {/* Header */}
      <header className="flex justify-between items-center p-6 shadow-lg bg-gray-800 fixed w-full top-0 left-0 z-50">
        <h1 className="text-xl font-bold text-white">Mi Portafolio</h1>
        <nav className="hidden md:flex gap-6">
          {sections.map((section) => (
            <a key={section} href={`#${section.toLowerCase()}`} className="hover:text-blue-400 transition-colors">
              {section}
            </a>
          ))}
        </nav>
        <button className="md:hidden text-white" onClick={() => setMenuOpen(!menuOpen)}>
          <Menu size={24} />
        </button>
      </header>

      {/* Mobile Menu */}
      {menuOpen && (
        <motion.nav 
          initial={{ opacity: 0, y: -10 }} 
          animate={{ opacity: 1, y: 0 }} 
          className="fixed top-16 left-0 w-full bg-gray-800 shadow-md p-4 flex flex-col gap-4 md:hidden">
          {sections.map((section) => (
            <a key={section} href={`#${section.toLowerCase()}`} className="block text-lg text-white hover:text-blue-400">
              {section}
            </a>
          ))}
        </motion.nav>
      )}

      {/* Hero Section */}
      <section id="home" className="h-screen flex flex-col justify-center items-center text-center px-4">
        <h2 className="text-4xl font-bold">
          Hola, soy <span className="text-blue-400">{text}</span><span className="animate-blink">|</span>
        </h2>
        <p className="text-lg text-gray-400 mt-4">Desarrollador Web | Desarrollador Backend</p>
      </section>
    </div>
  );
}
