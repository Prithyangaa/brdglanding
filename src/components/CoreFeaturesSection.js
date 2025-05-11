// CoreFeaturesSection.js
import React, { useRef, useEffect, useState } from 'react';
import './CoreFeaturesSection.css';
import FeatureAnimation from './FeatureAnimation';

export default function CoreFeaturesSection() {
  const workRef = useRef(null);
  const bankRef = useRef(null);
  const playRef = useRef(null);

  const [currentFeature, setCurrentFeature] = useState('work');

  useEffect(() => {
    const handleScroll = () => {
      const workTop = workRef.current?.offsetTop || 0;
      const bankTop = bankRef.current?.offsetTop || 0;
      const playTop = playRef.current?.offsetTop || 0;
      const scrollPos = window.scrollY + window.innerHeight / 2;

      if (scrollPos >= playTop) {
        setCurrentFeature('play');
      } else if (scrollPos >= bankTop) {
        setCurrentFeature('bank');
      } else {
        setCurrentFeature('work');
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="core-features-wrapper">
      <div className="feature-left">
        <FeatureAnimation activeFeature={currentFeature} />
      </div>
      <div className="feature-right">
        <div id="work-section" ref={workRef} className={`feature-block ${currentFeature === 'work' ? 'active' : ''}`}>
          <h2>Proof, Not Promises.</h2>
          <p>Your BRDG Profile™ is your operating system for visibility. Video-first. Skill-tagged. Action-based. Designed to help people see what you can actually do — not what you claim.
          </p>
        </div>
        <div id="bank-section" ref={bankRef} className={`feature-block ${currentFeature === 'bank' ? 'active' : ''}`}>
          <h2>You Vote. You Own.</h2>
          <p>Every task, rule, or reward on BRDG is shaped by contributors. Propose, discuss, and vote on upgrades — from feature changes to funding — through decentralised governance.


          </p>
        </div>
        <div id="play-section" ref={playRef} className={`feature-block ${currentFeature === 'play' ? 'active' : ''}`}>
          <h2>Growth Through Doing.</h2>
          <p>BRDG verifies your skills through action — not checkboxes. Complete tasks, share results, and level up through contribution, not credentials or inflated endorsements.
          </p>
        </div>
      </div>
    </section>
  );
}
