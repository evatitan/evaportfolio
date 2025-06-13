import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const location = useLocation();
  const isHomePage = location.pathname === '/' || location.pathname === '/home';

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="header-nav">
      <ul className="nav-list">
        <li>
          {isHomePage ? (
            <a
              href="#intro"
              onClick={e => {
                e.preventDefault();
                scrollToSection('intro');
              }}
            >
              Home
            </a>
          ) : (
            <Link to="/">Home</Link>
          )}
        </li>
        <li>
          {isHomePage ? (
            <a
              href="#about"
              onClick={e => {
                e.preventDefault();
                scrollToSection('about');
              }}
            >
              About
            </a>
          ) : (
            <Link to="/about">About</Link>
          )}
        </li>
        <li>
          {isHomePage ? (
            <a
              href="#contact"
              onClick={e => {
                e.preventDefault();
                scrollToSection('contact');
              }}
            >
              Contact
            </a>
          ) : (
            <Link to="/contact">Contact</Link>
          )}
        </li>
      </ul>
    </nav>
  );
};

export default Header;
