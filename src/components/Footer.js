import React from 'react';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-content">
        <div className="footer-brand">
          <h2>BRDG.</h2>
          <p>The future of freelancing is here. Decentralised. Verified. Yours.</p>
        </div>

        <div className="footer-links">
          <div>
            <h4>Explore</h4>
            <ul>
              <li><a href="#hero">Home</a></li>
              <li><a href="#what-is-brdg">Why BRDG</a></li>
              <li><a href="#core-pillars">How It Works</a></li>
              <li><a href="#governance">Features</a></li>
              <li><a href="#faqs">FAQs</a></li>
            </ul>
          </div>

          <div>
            <h4>Connect</h4>
            <ul>
              <li><a href="#footer">Join Waitlist</a></li>
              <li><a href="mailto:contact@brdgthegap.com">Contact Us</a></li>
            </ul>
          </div>

          <div>
            <h4>Follow</h4>
            <p style={{ fontSize: '14px' }}>Social icons coming soon</p>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} BRDG. All rights reserved.</p>
      </div>
    </footer>
  );
}
