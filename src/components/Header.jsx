import React from 'react';
import { Menu } from 'lucide-react';

const Header = () => {
  const navLinks = ["Mission", "Technology", "ALS", "Investor Relationship", "Publications", "About Us"];

  return (
    <header className="fixed top-0 left-0 right-0 z-10 bg-transparent text-primary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <img className="h-12 w-auto" src="/assets/Logo.svg" alt="T-Regulus Logo" />
          </div>
          <nav className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navLinks.map((link) => (
                <a
                  key={link}
                  href="#"
                  className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700 hover:text-white"
                >
                  {link}
                </a>
              ))}
            </div>
          </nav>
          <div className="md:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <Menu className="block h-6 w-6" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;