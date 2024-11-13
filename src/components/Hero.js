import React from 'react';
import '../scss/main.scss';

// Import assets for the hero section
// import shape1 from '../../public/images/hero-image1-shape1.png';
// import shape2 from '../../public/images/hero-image1-shape2.png';
// import shape3 from '../../public/images/hero-sec-shape1.png';
// import shape4 from '../../public/images/hero-sec-shape2.png';
// import shape5 from '../../public/images/hero-sec-shape3.png';
// import shape6 from '../../public/images/hero-sec-shape4.png';
// import heroImage1 from '../../public/images/freshfish.png';
// import heroImage2 from '../../public/images/freshmackerel.jpg';

const shape1 = process.env.PUBLIC_URL + '/images/hero-image1-shape1.png';
const shape2 = process.env.PUBLIC_URL + '/images/hero-image1-shape2.png';
const shape3 = process.env.PUBLIC_URL + '/images/hero-sec-shape1.png';
const shape4 = process.env.PUBLIC_URL + '/images/hero-sec-shape2.png';
const shape5 = process.env.PUBLIC_URL + '/images/hero-sec-shape3.png';
const shape6 = process.env.PUBLIC_URL + '/images/hero-sec-shape4.png';
const heroImage1 = process.env.PUBLIC_URL + '/images/freshfish.png';
const heroImage2 = process.env.PUBLIC_URL + '/images/freshmackerel.jpg';



function Hero() {
  return (
    <div className="hero-area1">
      <div className="container">
        <div className="row">
          {/* Left Column */}
          <div className="col-lg-5">
            <div className="main-heading">
              {/* Images and shapes */}
              <div className="image1 image-anime reveal">
                <img src={heroImage2} alt="Fresh Mackerel" />
              </div>
              <div className="image2 shape-animation4">
                <img src={shape1} alt="" aria-hidden="true" />
              </div>
              <div className="image3 animate2">
                <img src={shape2} alt="" aria-hidden="true" />
              </div>

              {/* Text Content */}
              <div className="space30"></div>
              <div className="heading1-w">
                <p data-aos="zoom-in-up" data-aos-duration="700">
                  Our solution leverages advanced artificial intelligence (AI) techniques, incorporating deep learning models, to accurately analyze and predict fish freshness. Experience cutting-edge technology that ensures precision and reliability.
                </p>
              </div>

              {/* Buttons */}
              <div className="space30"></div>
              <div className="buttons" data-aos="zoom-in-up" data-aos-duration="900">
                <a className="theme-btn1" href="#pricing" style={{ textDecoration: 'none' }}>
                  Get Started <span className="arrow"><i className="fa-solid fa-arrow-right"></i></span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="col-lg-7">
            <div className="main-heading">
              <h1 className="text-anime-style-3">Fish Freshness Analysis with AI</h1>
              <div className="space60"></div>
              <div className="main-image">
                <div className="reveal image-anime">
                  <img src={heroImage1} alt="Fresh Fish" />
                </div>
                <div className="shape animate4">
                  <img src={shape3} alt="" aria-hidden="true" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Background Shapes */}
      <img className="sec-shape1" src={shape3} alt="" aria-hidden="true" />
      <img className="sec-shape2" src={shape4} alt="" aria-hidden="true" />
      <img className="sec-shape3 animate1" src={shape5} alt="" aria-hidden="true" />
      <img className="sec-shape4 animate3" src={shape6} alt="" aria-hidden="true" />
    </div>
  );
}

export default Hero;
