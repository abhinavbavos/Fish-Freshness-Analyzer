import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './scss/main.scss';
import Preloader from './components/Preloader';
import Header from './components/Header';
import MobileHeader from './components/MobileHeader';
import Hero from './components/Hero';
import CaseSection from './components/CaseSection';
import Footer from './components/Footer';
import Pricing from './components/Pricing';

function App() {
  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  return (
    <div className="App">
      <Preloader />
      <Header />
      <MobileHeader />
      <Hero />
      <Pricing/>
      {/* <CaseSection /> */}
      <Footer />
    </div>
  );
}

export default App;
