import React, { useState, useEffect, useRef } from 'react';
import whatBrdgImg from '../assets/what-brdg.png';
import whyBrdgImg from '../assets/why-brdg.png';
import whoForImg from '../assets/who-brdg.png';
import './ScrollSection.css';

export default function ScrollSection() {
  const [currentSection, setCurrentSection] = useState('what-is-brdg');

  const whatRef = useRef(null);
  const whyRef = useRef(null);
  const whoRef = useRef(null);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.4, // when 40% visible
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (entry.target.id === 'what-section') {
            setCurrentSection('what-is-brdg');
          } else if (entry.target.id === 'why-section') {
            setCurrentSection('why-brdg');
          } else if (entry.target.id === 'who-section') {
            setCurrentSection('who-is-for');
          }
        }
      });
    }, options);

    if (whatRef.current) observer.observe(whatRef.current);
    if (whyRef.current) observer.observe(whyRef.current);
    if (whoRef.current) observer.observe(whoRef.current);

    return () => {
      if (whatRef.current) observer.unobserve(whatRef.current);
      if (whyRef.current) observer.unobserve(whyRef.current);
      if (whoRef.current) observer.unobserve(whoRef.current);
    };
  }, []);

  return (
    <section className="scroll-section">
      <div className="left-column">
        <div ref={whatRef} id="what-section" className="text-block">
          <h2>THE SYSTEM BEHIND THE OPPORTUNITY</h2>
          <p>BRDG is the foundation for the next economy, replacing outdated systems with decentralized, trust-first infrastructure. In this ecosystem, profiles are proof, reputation is earned, payments are secured, communities grow, and users govern, not just consume. BRDG combines tools for work, financial empowerment, identity, and connection into one open, future-ready platform, enabling a more transparent and efficient way of engaging in the digital world.</p>
        </div>

        <div ref={whyRef} id="why-section" className="text-block">
          <h2>Why brdg Exists?</h2>
          <p>The world needs a way to work without relying on a CV, to earn without fear of fraud or delay, to grow without depending on who you know, to connect through value rather than vanity, and a system that isn’t owned by Big Tech but by you. BRDG isn’t just a marketplace; it’s the infrastructure for independence.</p>
        </div>

        <div ref={whoRef} id="who-section" className="text-block">
          <h2>Who brdg Is For?</h2>
          <p>We don’t ask who you are — we ask what you can do. If you’re building, learning, offering, or ready for something greater, BRDG is for you. Whether you're starting your journey, scaling your skills, seeking collaborators, hiring with purpose, or building an authentic reputation, BRDG gives you the tools to grow.</p>
        </div>
      </div>

      <div className="right-column">
        {currentSection === 'what-is-brdg' && <img src={whatBrdgImg} alt="What is BRDG" />}
        {currentSection === 'why-brdg' && <img src={whyBrdgImg} alt="Why BRDG Exists" />}
        {currentSection === 'who-is-for' && <img src={whoForImg} alt="Who BRDG is For" />}
      </div>
      <div className="bg-particles">
        {[...Array(12)].map((_, i) => (
          <span key={i} className="particle" style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 20}s`,
            backgroundColor: i % 2 === 0 ? '#00AFFF66' : '#172A3B33'
          }} />
        ))}
      </div>

    </section>
  );
}
