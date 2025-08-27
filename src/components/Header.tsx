import React, { useState, useEffect } from "react";
import logo from "../assets/logo.png";

interface HeaderProps {
  activePage: string;
}

const navItems = ["Beranda", "Tentang Kami", "Merek", "Katalog", "Pelayanan", "Kontak"];

const Header: React.FC<HeaderProps> = ({ activePage }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-gray-900/80 backdrop-blur-md shadow-lg pt-4 pb-4" : "pt-6"}`}>
      <div className="container mx-auto px-6 font-poppins">
        <nav className="flex justify-between items-center">
          {/* Logo */}
          <a href="#beranda" className="h-8">
            <img src={logo} alt="Jagoan Underwear Logo" className="h-full w-auto" />
          </a>
          <ul className="hidden lg:flex items-center bg-black/20 p-2 rounded-full space-x-1">
            {navItems.map((item) => {
              const isActive = item === activePage;
              return (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase().replace(" ", "-")}`}
                    className={`block rounded-full px-5 py-2 text-sm font-semibold transition-colors duration-300
                      ${isActive ? "bg-white text-primary" : "text-white hover:bg-white/20"}`}
                  >
                    {item}
                  </a>
                </li>
              );
            })}
          </ul>
          <div className="lg:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white focus:outline-none">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                {isMenuOpen ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /> : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />}
              </svg>
            </button>
          </div>
        </nav>
        <div className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${isMenuOpen ? "max-h-96 mt-4" : "max-h-0"}`}>
          <ul className="bg-gray-800/90 backdrop-blur-md rounded-lg p-4 space-y-2">
            {navItems.map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase().replace(" ", "-")}`}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block rounded-md px-4 py-2 text-base font-medium transition-colors
                    ${activePage === item ? "bg-blue-600 text-white" : "text-gray-300 hover:bg-gray-700 hover:text-white"}`}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
