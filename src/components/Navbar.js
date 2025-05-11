import React, { useState, useEffect } from 'react';
import './Navbar.css';

export default function Navbar() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(window.scrollY);


  useEffect(() => {
    const controlNavbar = () => {
      if (typeof window !== 'undefined') {
        if (window.scrollY > lastScrollY) {
          // Scrolling down
          setShowNavbar(false);
        } else {
          // Scrolling up
          setShowNavbar(true);
        }
        setLastScrollY(window.scrollY);
      }
    };

    window.addEventListener('scroll', controlNavbar);

    return () => {
      window.removeEventListener('scroll', controlNavbar);
    };
  }, [lastScrollY]);

  return (
    <nav className={`navbar ${showNavbar ? 'active' : 'hidden'}`}>
      <div className="logo" onClick={() => scrollToSection('hero')}>
        BRDG.
      </div>
      <ul className="nav-links">
        <li>
          <span onClick={() => scrollToSection('what-section')}>What?</span>
        </li>
        <li>
          <span onClick={() => scrollToSection('why-section')}>Why?</span>
        </li>
        <li>
          <span onClick={() => scrollToSection('who-section')}>Who?</span>
        </li>
        <li>
          <span onClick={() => scrollToSection('work-section')}>Features</span>
        </li>
        <li>
          <span onClick={() => scrollToSection('faqs')}>FAQs</span>
        </li>
        <li>
          <button onClick={() => scrollToSection('footer')}>Join</button>
        </li>
      </ul>
    </nav>
  );
}
