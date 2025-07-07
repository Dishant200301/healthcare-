import React, { useState } from 'react';
import { Link } from 'react-router-dom';
interface Props {
  href: string;
  children: React.ReactNode;
  className?: string;
}

const NavLink: React.FC<Props> = ({ href, children, className = "" }) => (
  <a href={href} className={`text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium ${className}`}>
    {children}
  </a>
);

interface ArrowIconProps {
  className?: string;
}

const ArrowIcon: React.FC<ArrowIconProps> = ({ className = "" }) => (
  <svg className={`w-4 h-4 ${className}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
  </svg>
);

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white shadow-sm border-b ">
      <nav className="fixed top-0 left-0 w-full bg-white shadow z-50 bg-transparent-100" role="banner">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link to="/" className="flex-shrink-0 flex items-center">
              <img
                src="https://cdn.prod.website-files.com/6737288294995c3cfebf9e63/677389227ed72fbbbc9cd950_brand.svg"
                alt="Vaxet"
                className="h-10 w-auto"
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-10">
              <Link to="/about-us">About us</Link>
              <Link to="/services">Services</Link>
              <Link to="/doctors">Doctors</Link>
              <Link to="/blogs">Blogs</Link>
              <Link to="/contact">Contact us</Link>
              
              {/* Appointment Button */}
              <Link
                to="/appointment"
                className="group relative inline-flex items-center gap-3 bg-cyan-800/90 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition-all duration-300 overflow-hidden font-medium text-sm"
              >
                <span>Make an Appointment</span>
                <div className="relative">
                  <ArrowIcon className="transform group-hover:translate-x-1 transition-transform duration-300" />
                  <ArrowIcon className="absolute inset-0 transform -translate-x-4 translate-y-4 opacity-0 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300" />
                </div>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="lg:hidden relative w-8 h-8 flex flex-col justify-center items-center"
              aria-label="Toggle mobile menu"
            >
              <span
                className={`block w-6 h-0.5 bg-gray-700 transition-all duration-300 ${
                  isMenuOpen ? 'rotate-45 translate-y-0.5' : ''
                }`}
              />
              <span
                className={`block w-6 h-0.5 bg-gray-700 transition-all duration-300 mt-1 ${
                  isMenuOpen ? 'opacity-0' : ''
                }`}
              />
              <span
                className={`block w-6 h-0.5 bg-gray-700 transition-all duration-300 mt-1 ${
                  isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''
                }`}
              />
            </button>
          </div>

         
        </div>
      </nav>
    </header>
  );
};

export default Navbar;