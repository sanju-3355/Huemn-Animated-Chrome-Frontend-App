import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import FeaturesSection from './components/FeaturesSection';
import Footer from './components/Footer';
import './styles/main.scss';
import UpdatesSection from './components/UpdatesSection';
import SafeSection from './components/SafeSection';

function App() {
  return (
    <div className="App">
      <Header />
      <HeroSection />
      <UpdatesSection />
      <SafeSection />
      <FeaturesSection />
      
      <Footer />
    </div>
  );
}

export default App;
