import React, { useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Preloader from './components/Preloader';
import MobileHeader from './components/MobileHeader';
import Hero from './components/Hero';
import CaseSection from './components/CaseSection';
import AOS from 'aos';
import 'aos/dist/aos.css';


function App() {
  useEffect(() => {
    AOS.init({
      duration: 800, // Customize the duration as needed
      once: true,    // Animation runs only once when scrolled into view
    });
  }, []);

  return (
    <div className="App">
      <Preloader />
      <Header />
      <MobileHeader />
      <Hero />
      <CaseSection />
      <Footer />
    </div>
  );
}


export default App;
