import React from 'react';
import './HeroSection.css';
import NetBackground from './NetBackground';
import sampleCard from '../assets/sample.png'; // replace with real image

export default function HeroSection() {
  return (
    <section id="hero" className="hero-container">
      <div className="hero-net-wrapper">
        <NetBackground />
      </div>

      <div className="hero-content">
        <div className="hero-left">
          <h1>THE NEW INFRASTRUCTURE <n>FOR OPPORTUNITY.</n></h1>
          <p>
            BRDG helps you earn, connect, grow and govern! <br />
            The decentralised ecosystem where skill, value, and trust drives your reputation, not credentials.
          </p>
          <button>Join the Waitlist</button>
        </div>

        <div className="hero-right">
          <img src={sampleCard} alt="Sample Preview" />
        </div>
      </div>
    </section>
  );
}
