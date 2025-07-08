import React, { useState } from 'react';
import { Link } from 'react-router-dom';

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

const NavLink: React.FC<NavLinkProps> = ({ href, children, className = "" }) => (
  <Link to={href} className={`text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium ${className}`}>
    {children}
  </Link>
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
    <header className="bg-white shadow-sm border-b">
      <nav className="fixed top-0 left-0 w-full bg-white shadow z-50 bg-transparent-100 px-1" role="banner">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link to="/" className="flex-shrink-0 flex items-center">
              <img
                src="https://cdn.prod.website-files.com/6737288294995c3cfebf9e63/677389227ed72fbbbc9cd950_brand.svg"
                alt="Vaxet"
                className="h-8 w-auto"
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-10">
              <NavLink href="/about-us">About us</NavLink>
              <NavLink href="/services">Services</NavLink>
              <NavLink href="/doctors">Doctors</NavLink>
              <NavLink href="/blogs">Blogs</NavLink>
              <NavLink href="/contact">Contact us</NavLink>

              <Link
                to="/appointment"
                className="group relative inline-flex items-center gap-3 bg-cyan-800/90 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-all duration-300 overflow-hidden font-medium text-sm"
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
              <span className={`block w-6 h-0.5 bg-gray-700 transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-0.5' : ''}`} />
              <span className={`block w-6 h-0.5 bg-gray-700 transition-all duration-300 mt-1 ${isMenuOpen ? 'opacity-0' : ''}`} />
              <span className={`block w-6 h-0.5 bg-gray-700 transition-all duration-300 mt-1 ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`} />
            </button>
          </div>

          {/* Mobile Navigation */}
          <div className={`lg:hidden transition-all duration-300 ${isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}>
            <div className="py-4 space-y-4">
              <NavLink href="/about-us" className="block py-2">About us</NavLink>
              <NavLink href="/services" className="block py-2">Services</NavLink>
              <NavLink href="/doctors" className="block py-2">Doctors</NavLink>
              <NavLink href="/blogs" className="block py-2">Blogs</NavLink>
              <NavLink href="/contact" className="block py-2">Contact us</NavLink>

              <Link
                to="/appointment"
                className="group inline-flex items-center gap-2 bg-cyan-800/90 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-all duration-300 mt-4 text-sm"
              >
                <span>Make an Appointment</span>
                <ArrowIcon className="transform group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
