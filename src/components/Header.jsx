import React from 'react';
import Logo from '../../assets/Logo.svg';

function Header({ isScrolled }) {
  const navItems = ["Mission", "Technology", "ALS", "Investor Relationship", "Publications", "About Us"];

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="logo">
        <a href="#"><img src={Logo} alt="T-Regulus Logo" /></a>
      </div>
      <nav>
        <ul>
          {navItems.map(item => (
            <li key={item}><a href={`#${item.toLowerCase().replace(/ /g, '-')}`}>{item}</a></li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
