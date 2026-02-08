import React, { useState } from 'react';
import Logo from '../../assets/Logo.svg';

function Header({ isScrolled }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // State for mobile menu
  const navItems = ["Mission", "Technology", "ALS", "Investor Relationship", "Publications", "About Us"];

  const handleScrollToSection = (event, item) => {
    event.preventDefault();
    const targetId = item.toLowerCase().replace(/ /g, '-');
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      const headerOffset = 50; // Adjust this value as needed for desired offset
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
      setIsMobileMenuOpen(false); // Close menu after clicking a link
    }
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="logo">
        <a href="#"><img src={Logo} alt="T-Regulus Logo" /></a>
      </div>
      <nav>
        <div className="hamburger-menu" onClick={toggleMobileMenu}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
        <ul className={isMobileMenuOpen ? 'mobile-open' : ''}> {/* Add mobile-open class */}
          {navItems.map(item => (
            <li key={item}>
              <a href={`#${item.toLowerCase().replace(/ /g, '-')}`} onClick={(e) => handleScrollToSection(e, item)}>
                {item}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Header;