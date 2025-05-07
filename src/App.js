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


function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroSection />
      <ScrollSection />
      <CoreFeaturesSection/>
      <JoinTheWaitlist /> 
      <FAQs />
      <Footer />
    </div>
  );
}

export default App;
