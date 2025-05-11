import React from 'react';
import './styles/globals.css';

// Import all components
import HeroSection from './components/HeroSection';
import JoinTheWaitlist from './components/JoinTheWaitlist';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import FAQs from './components/FAQs';
import ScrollSection from './components/ScrollSection';
import CoreFeaturesSection from './components/CoreFeaturesSection';
import WhatBrdg from './components/what';
import WhyBrdg from './components/why';
import WhoBrdg from './components/who';

function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroSection />
      <WhatBrdg />
      <WhyBrdg />
      <WhoBrdg />
      <CoreFeaturesSection/>
      <JoinTheWaitlist /> 
      <FAQs />
      <Footer />
    </div>
  );
}

export default App;
