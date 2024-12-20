import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("home");

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleScroll = () => {
    const sections = ["home", "about", "skills", "projects", "contact"];
    const currentSection =
      sections.find((section) => {
        const element = document.getElementById(section);
        if (!element) return false;
        const rect = element.getBoundingClientRect();
        return rect.top <= window.innerHeight / 2 && rect.bottom >= 0;
      }) || "home";
    setActiveSection(currentSection);
  };

  const handleLinkClick = (section: string) => {
    setActiveSection(section);
    const sectionElement = document.getElementById(section);
    if (sectionElement) {
      sectionElement.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="bg-gray-900 text-white sm:px-16 p-4 lg:pl-[183px] lg:pr-[200px] flex justify-between items-center sticky top-0 z-50 shadow-lg h-16 font-inter">
      <div className="flex items-center pt-2 sm:pt-0 gap-4">
        <Link href="/">
          <Image
            src="/logo.png"
            alt="Logo"
            width={63}
            height={62}
            className="object-contain max-h-[60px] max-w-[60px] p-2"
          />
        </Link>
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex space-x-8">
        {["about", "skills", "projects", "contact"].map((section) => (
          <Link
            href={`#${section}`}
            key={section}
            onClick={() => handleLinkClick(section)}
            className={`text-[#FFF] font-inter text-[16px] font-normal leading-[24px] hover:text-blue-500 ${
              activeSection === section ? "text-blue-500" : ""
            }`}
          >
            {section.charAt(0).toUpperCase() + section.slice(1)}
          </Link>
        ))}
      </div>

      {/* Mobile Menu (Hamburger) */}
      <div className="md:hidden pt-4 pr-2">
        <button onClick={toggleMenu}>
          {isOpen ? (
            <FaTimes className="text-2xl" />
          ) : (
            <FaBars className="text-2xl" />
          )}
        </button>
      </div>

      {/* Mobile Menu Links */}
      {isOpen && (
        <div className="absolute top-16 right-0 bg-gray-900 text-white p-4 w-full flex flex-col space-y-4 md:hidden">
          {["about", "skills", "projects", "contact"].map((section) => (
            <Link
              href={`#${section}`}
              onClick={() => handleLinkClick(section)}
              key={section}
              className={`text-[#FFF] font-inter text-[16px] font-normal leading-[24px] hover:text-blue-500 ${
                activeSection === section ? "text-blue-500" : ""
              }`}
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
