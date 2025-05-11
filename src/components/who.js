// who.js
import React from 'react';
import './who.css';
import whoForImg from '../assets/who-brdg.png';

export default function WhoBrdg() {
  return (
    <section id="who-section" className="scroll-section">
      <div className="left-column">
        <div className="text-block">
          <h2>Who BRDG Is For?</h2>
          <p>
            We don’t ask who you are — we ask what you can do. If you’re building,
            learning, offering, or ready for something greater, BRDG is for you.
            Whether you're starting your journey, scaling your skills, seeking
            collaborators, hiring with purpose, or building an authentic reputation,
            BRDG gives you the tools to grow.
          </p>
        </div>
      </div>
      <div className="right-column">
        <img src={whoForImg} alt="Who BRDG is For" />
      </div>
    </section>
  );
}
