// why.js
import React from 'react';
import './why.css';

export default function WhyBrdg() {
  return (
    <section id="why-section" className="why-full-section">
      <div className="why-full-content">
        <h2>Why BRDG Exists</h2>
        <div className="why-table-container">
          <div className="why-column traditional">
            <h3>Traditional Platforms</h3>
            <ul>
              <li>❌ 20–25% commissions</li>
              <li>❌ Slow payout cycles</li>
              <li>❌ Review-based bias</li>
              <li>❌ No ownership</li>
              <li>❌ No off-platform value</li>
            </ul>
          </div>
          <div className="why-column brdg">
            <h3>BRDG</h3>
            <ul>
              <li>✅ ~9–13% all-in (infra only)</li>
              <li>✅ Instant payment upon task approval</li>
              <li>✅ AI-driven X Rating based on real work</li>
              <li>✅ You're the DAO. You vote.</li>
              <li>✅ X Rating is portable and verified</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
