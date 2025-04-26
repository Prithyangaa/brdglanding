import React from 'react';
import './styles/globals.css';

// Import all components
import HeroSection from './components/HeroSection';
import CorePillars from './components/CorePillars';
import WhatYouCanDo from './components/WhatYouCanDo';
import WhatMakesBRDG from './components/WhatMakesBRDG';
import Governance from './components/Governance';
import XRating from './components/XRating';
import JoinTheWaitlist from './components/JoinTheWaitlist';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import FAQs from './components/FAQs';
import ScrollSection from './components/ScrollSection';


function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroSection />
      <ScrollSection />
      <CorePillars />
      <WhatYouCanDo />
      <WhatMakesBRDG />
      <Governance />
      <XRating />
      <JoinTheWaitlist /> 
      <FAQs />
      <Footer />
    </div>
  );
}

export default App;
