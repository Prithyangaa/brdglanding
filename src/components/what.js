// what.js
import React from 'react';
import './what.css';
import whatBrdgImg from '../assets/what-brdg.png';

export default function WhatBrdg() {
  return (
    <section id="what-section" className="scroll-section">
      <div className="left-column">
        <div className="text-block">
          <h2>THE SYSTEM BEHIND THE OPPORTUNITY</h2>
          <p>
            BRDG is the foundation for the next economy, replacing outdated systems with decentralized, trust-first infrastructure. In this ecosystem, profiles are proof, reputation is earned, payments are secured, communities grow, and users govern, not just consume. BRDG combines tools for work, financial empowerment, identity, and connection into one open, future-ready platform, enabling a more transparent and efficient way of engaging in the digital world.
          </p>
        </div>
      </div>
      <div className="right-column">
        <img src={whatBrdgImg} alt="What is BRDG" />
      </div>
    </section>
  );
}
