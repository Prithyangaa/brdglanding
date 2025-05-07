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
          <h2>WORK</h2>
          <p>Your BRDG Profile™ is your operating system for visibility.
          Video-first. Skill-tagged. Action-based.
          Designed to help people see what you can actually do — not what you claim.
          </p>
        </div>
        <div id="bank-section" ref={bankRef} className={`feature-block ${currentFeature === 'bank' ? 'active' : ''}`}>
          <h2>BANK</h2>
          <p>Vault™ secures every transaction — with milestone tracking and trust-first design.
          No late payments. No platform holds. Just fair, verified flow of value.
          </p>
        </div>
        <div id="play-section" ref={playRef} className={`feature-block ${currentFeature === 'play' ? 'active' : ''}`}>
          <h2>PLAY</h2>
          <p>BRDG Explorer and The Connection Lab™ help you find local and global spaces to build, connect and belong.
          You meet collaborators — not just contacts.
          You create experiences — not just profiles.
          </p>
        </div>
      </div>
    </section>
  );
}
