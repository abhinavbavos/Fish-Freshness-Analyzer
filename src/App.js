import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './scss/main.scss';
import Preloader from './components/Preloader';
import Header from './components/Header';
import Hero from './components/Hero';
import Footer from './components/Footer';
import Pricing from './components/Pricing';
import ImageUploadPage from './components/ImageUploadPage'; // Import the new page

function App() {
  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  return (
    <Router>
      <div className="App">
        <Preloader />
        

        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header />
                <Hero />
                <Pricing />
                <Footer />
              </>
            }
          />
          <Route path="/image-upload" element={<ImageUploadPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
