import React from 'react';
import Logo from '../../assets/Logo.svg';

function Header({ isScrolled }) {
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
    }
  };

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="logo">
        <a href="#"><img src={Logo} alt="T-Regulus Logo" /></a>
      </div>
      <nav>
        <ul>
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
