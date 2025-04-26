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
    <section id="what-is-brdg" className="scroll-section">
      <div className="left-column">
        <div ref={whatRef} id="what-section" className="text-block">
          <h2>What is brdg?</h2>
          <p>brdg is not another platform. It’s the foundation for the next economy.</p>
        </div>

        <div ref={whyRef} id="why-section" className="text-block">
          <h2>Why brdg Exists</h2>
          <p>brdg rebuilds trust and income around action, not credentials.</p>
        </div>

        <div ref={whoRef} id="who-section" className="text-block">
          <h2>Who brdg Is For</h2>
          <p>Builders, creators, learners, collaborators — anyone ready to build value.</p>
        </div>
      </div>

      <div className="right-column">
        {currentSection === 'what-is-brdg' && <img src={whatBrdgImg} alt="What is BRDG" />}
        {currentSection === 'why-brdg' && <img src={whyBrdgImg} alt="Why BRDG Exists" />}
        {currentSection === 'who-is-for' && <img src={whoForImg} alt="Who BRDG is For" />}
      </div>
    </section>
  );
}
