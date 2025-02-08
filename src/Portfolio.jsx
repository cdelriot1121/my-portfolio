import { useState } from "react";
import { motion } from "framer-motion";
import { Menu } from "lucide-react";

const sections = ["Home", "About", "Projects", "Contact"];

export default function Portfolio() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="font-sans bg-gray-100 text-gray-900 min-h-screen">
      {/* Header */}
      <header className="flex justify-between items-center p-6 shadow-md bg-white fixed w-full">
        <h1 className="text-xl font-bold">Mi Portafolio</h1>
        <nav className="hidden md:flex gap-6">
          {sections.map((section) => (
            <a key={section} href={`#${section.toLowerCase()}`} className="hover:text-gray-500">
              {section}
            </a>
          ))}
        </nav>
        <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
          <Menu size={24} />
        </button>
      </header>

      {/* Mobile Menu */}
      {menuOpen && (
        <motion.nav 
          initial={{ opacity: 0, y: -10 }} 
          animate={{ opacity: 1, y: 0 }} 
          className="fixed top-16 left-0 w-full bg-white shadow-md p-4 flex flex-col gap-4 md:hidden">
          {sections.map((section) => (
            <a key={section} href={`#${section.toLowerCase()}`} className="block text-lg">
              {section}
            </a>
          ))}
        </motion.nav>
      )}

      {/* Hero Section */}
      <section id="home" className="h-screen flex flex-col justify-center items-center text-center px-4">
        <h2 className="text-4xl font-bold">Hola, soy [Tu Nombre]</h2>
        <p className="text-lg text-gray-600 mt-4">Desarrollador Web | React | Minimalismo</p>
      </section>
    </div>
  );
}
