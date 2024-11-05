import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import '../scss/main.scss'


// Import assets for the hero section
import shape1 from '../assets/images/hero-image1-shape1.png';
import shape2 from '../assets/images/hero-image1-shape2.png';
import shape7 from '../assets/images/hero-image2-shape1.png';
import shape3 from '../assets/images/hero-sec-shape1.png';
import shape4 from '../assets/images/hero-sec-shape2.png';
import shape5 from '../assets/images/hero-sec-shape3.png';
import shape6 from '../assets/images/hero-sec-shape4.png';
import FishModel from './FishModel';

function Hero() {
  return (
    <div className="hero-area1">
      <div className="container">
        <div className="row align-items-center">
          {/* Left Column: Heading and Subheading */}
          <div className="col-lg-6 col-md-12 text-center text-lg-start">
            <div className="main-heading">
              <h1 className="text-anime-style-3">Fish Freshness Analyzer</h1>
              <div className="heading1-w">
                <p data-aos="zoom-in-up" data-aos-duration="700">
                  Our Fish Freshness Analyzer utilizes state-of-the-art 3D technology to evaluate fish freshness with precision and reliability.
                </p>
              </div>
              <div className="buttons" data-aos="zoom-in-up" data-aos-duration="900">
                <a className="theme-btn1" href="CaseSection.js" style={{ textDecoration: 'none' }}>
                  Get Started <span className="arrow"><i className="fa-solid fa-arrow-right"></i></span>
                </a>
              </div>
              {/* Shape animations */}
              <div className="image2 shape-animation4">
                <img src={shape1} alt="Decorative Shape 1" />
              </div>
              <div className="image3 animate2">
                <img src={shape2} alt="Decorative Shape 2" />
              </div>
            </div>
          </div>

          {/* Right Column: 3D Model */}
          <div className="col-lg-6 col-md-12 d-flex justify-content-center">
            <Canvas style={{ height: '500px', width: '100%' }}
              camera={{ position: [6, 1, 2], fov: 50 }}>
              <ambientLight intensity={0.5} />
              <directionalLight position={[2, 2, 5]} intensity={1} />
              <FishModel />
              <OrbitControls enableZoom={false} />
            </Canvas>
          </div>
        </div>
      </div>
      
      {/* Background Shapes */}
      <img className="sec-shape1" src={shape3} alt="Section Shape 1" />
      <img className="sec-shape2" src={shape4} alt="Section Shape 2" />
      <img className="sec-shape3 animate1" src={shape5} alt="Section Shape 3" />
      <img className="sec-shape4 animate3" src={shape6} alt="Section Shape 4" />

     
    </div>
  );
}

export default Hero;
