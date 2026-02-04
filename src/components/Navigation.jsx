import { useState, useEffect } from 'react';
import './Navigation.css';

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <nav className={scrolled ? 'scrolled' : ''} aria-label="Main navigation">
      <div className="nav-container">
        <div className="logo" aria-label="Homepage">SM</div>

        <ul className={`nav-links ${mobileMenuOpen ? 'active' : ''}`}>
          <li>
            <a href="#hero" onClick={() => scrollToSection('hero')}>
              Home
            </a>
          </li>
          <li>
            <a href="#tech-stack" onClick={() => scrollToSection('tech-stack')}>
              Tech Stack
            </a>
          </li>
          <li>
            <a href="#projects" onClick={() => scrollToSection('projects')}>
              Projects
            </a>
          </li>
          <li>
            <a href="#contact" onClick={() => scrollToSection('contact')}>
              Contact
            </a>
          </li>
        </ul>

        <button
          className="mobile-menu-btn"
          aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileMenuOpen}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? '✕' : '☰'}
        </button>
      </div>
    </nav>
  );
};

export default Navigation;
