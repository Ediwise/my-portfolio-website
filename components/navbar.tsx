import { useState, useEffect } from 'react'; 
import { FaBars, FaTimes } from 'react-icons/fa';
import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleScroll = () => {
    const sections = ['home', 'about', 'skills', 'projects', 'contact'];
    const currentSection = sections.find((section) => {
      const element = document.getElementById(section);
      const rect = element?.getBoundingClientRect();
      return rect && rect.top <= window.innerHeight / 2;
    }) || 'home';
    setActiveSection(currentSection);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="bg-gray-900 text-white p-4 flex justify-between items-center sticky top-0 z-50 shadow-lg h-16">
      <div className="text-2xl font-bold flex items-center">
        <Link href="/">
          <Image 
            src="/logo.png" 
            alt="Logo" 
            width={250}  
            height={250} 
            className="object-contain max-h-[60px] max-w-[60px] p-2"
          />
        </Link>
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex space-x-6">
        {['about', 'skills', 'projects', 'contact'].map((section) => (
          <Link
            href={`#${section}`}  
            key={section}
            className={activeSection === section ? 'text-blue-500' : ''}
          >
            {section.charAt(0).toUpperCase() + section.slice(1)}
          </Link>
        ))}
      </div>

      {/* Mobile Menu (Hamburger) */}
      <div className="md:hidden">
        <button onClick={toggleMenu}>
          {isOpen ? <FaTimes className="text-2xl" /> : <FaBars className="text-2xl" />}
        </button>
      </div>

      {/* Mobile Menu Links */}
      {isOpen && (
        <div className="absolute top-16 right-0 bg-gray-900 text-white p-4 w-full flex flex-col space-y-4 md:hidden">
          {['about', 'skills', 'projects', 'contact'].map((section) => (
            <Link
              href={`#${section}`}
              onClick={toggleMenu}
              key={section}
              className={activeSection === section ? 'text-blue-500' : ''}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
