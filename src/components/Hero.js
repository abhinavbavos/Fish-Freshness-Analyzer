import React from 'react';
import shape1 from '../assets/images/hero-image1-shape1.png';
import shape2 from '../assets/images/hero-image1-shape2.png';
import shape7 from '../assets/images/hero-image2-shape1.png';
import shape3 from '../assets/images/hero-sec-shape1.png';
import shape4 from '../assets/images/hero-sec-shape2.png';
import shape5 from '../assets/images/hero-sec-shape3.png';
import shape6 from '../assets/images/hero-sec-shape4.png';

function Hero() {
  return (
    <div className="hero-area1">
      <div className="container">
        <div className="row">
          <div className="col-lg-5">
            <div className="main-heading">
              <div className="image2 shape-animaiton4">
                <img src={shape1} alt="Shape 1" />
              </div>
              <div className="image3 animate2">
                <img src={shape2} alt="Shape 2" />
              </div>
              <div className="space30"></div>
              <div className="heading1-w">
                <p data-aos="zoom-in-up" data-aos-duration="700">
                  At our club, we bring together a community of passionate outdoor adventurers, offering unparalleled experiences in the wild. Whether you're casting a line in tranquil waters or tracking...
                </p>
              </div>
              <div className="space30"></div>
              <div className="buttons" data-aos="zoom-in-up" data-aos-duration="900">
                <a className="theme-btn1" href="contact.html">
                  Get Started <span className="arrow"><i className="fa-solid fa-arrow-right"></i></span>
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-7">
            <div className="main-heading">
              <h1 className="text-anime-style-3">Experience Thrill Of The Hunt & The Joy Of The Catch</h1>
              <div className="space60"></div>
              <div className="main-image">
                <div className="shape animate4">
                  <img src={shape7} alt="Shape 3" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <img className="sec-shape1" src={shape3} alt="Section Shape 1" />
      <img className="sec-shape2" src={shape4} alt="Section Shape 2" />
      <img className="sec-shape3 animate1" src={shape5} alt="Section Shape 3" />
      <img className="sec-shape4 animate3" src={shape6} alt="Section Shape 4" />
    </div>
  );
}

export default Hero;
