import { useState, useEffect } from 'react';
import MyNavLink from '../../components/MyNavLink';
import './index.css';

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);

  const handleBurger = () => {
    setIsActive(!isActive);
  };

  const handleLinkClicked = () => {
    setIsActive(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.querySelector('.navbar');
      if (navbar) {
        if (window.scrollY > 20) {
          navbar.classList.add('scrolled');
        } else {
          navbar.classList.remove('scrolled');
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <button
          onClick={handleBurger}
          className="navbar-burger"
          aria-label="menu"
          aria-expanded="false"
        >
          <span aria-hidden="true" />
          <span aria-hidden="true" />
          <span aria-hidden="true" />
        </button>
      </div>
      <div className={'navbar-menu' + (isActive === true ? 'is-active' : '')}>
        <div className="navbar-start">
          <div className="navbar-item">
            <MyNavLink onClick={handleLinkClicked} to="/home" className="navbar-item">
              Home
            </MyNavLink>
            <MyNavLink onClick={handleLinkClicked} to="/tech-stack" className="navbar-item">
              Tech-stack
            </MyNavLink>
            <MyNavLink onClick={handleLinkClicked} to="/portfolio" className="navbar-item">
              Portfolio
            </MyNavLink>
            <MyNavLink onClick={handleLinkClicked} to="/travel" className="navbar-item">
              Travel
            </MyNavLink>
            <MyNavLink onClick={handleLinkClicked} to="/contact" className="navbar-item">
              Contact
            </MyNavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
