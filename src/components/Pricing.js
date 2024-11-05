import React, { useEffect } from "react";
import "aos/dist/aos.css"; // Import AOS CSS for animations
import AOS from "aos";

// Import images
import spanIcon from "../assets/images/span-icon1.png";
import pricingImg from "../assets/images/pricing-img.png";
import shape1 from "../assets/images/pricing-image-shape1.png";
import shape2 from "../assets/images/pricing-image-shape2.png";
import pricingIcon from "../assets/images/pricing-icon.png";
import secShape1 from "../assets/images/pricing-sec-shape1.png";
import secShape2 from "../assets/images/pricing-sec-shape2.png";
import Sardine from "../assets/images/Sardine.jpg";
import Tilapia from "../assets/images/Tilapia.png";
import Mackrel from "../assets/images/Mackrel.jpg";

const Pricing = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="pricing sp">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 m-auto text-center">
            <div className="heading1-w">
              <span
                className="span"
                data-aos="zoom-in-left"
                data-aos-duration="700"
              >
                <img src={spanIcon} alt="" /> Fish Freshness Analyzer
              </span>
              <div className="space16"></div>
              <p data-aos="fade-left" data-aos-duration="800">
                Join us & embark on your next outdoor adventure with confidence,
                knowing <br />
                that your membership unlocks a world of possibilities in the
                wild.
              </p>
            </div>
          </div>
        </div>

        <div className="space60"></div>
        <div className="row _relative">
          <div className="col-lg-4">
            <div className="images-area">
              <div className="image image-anime reveal">
                <img src={pricingImg} alt="" />
              </div>
              <img src={shape1} alt="" className="shape1" />
              <img src={shape2} alt="" className="shape2" />
            </div>
          </div>
          <div className="col-lg-8">
            <div className="pricing-box-area">
              {/* Weekly Pass */}
              <div className="single-box">
                <div className="row">
                  <div className="col-lg-8">
                    <div className="left-side">
                      <div className="icon">
                        <img src={pricingIcon} alt="" />
                      </div>
                      <div className="heading1">
                        <h3>SARDINE</h3>
                        <div className="space16"></div>
                        <p>
                          Whether you're an avid angler, a seasoned hunter, or
                          simply someone who revels in the great outdoors, we
                          have the perfect plan for you
                        </p>
                        <div className="space30"></div>
                        <a className="theme-btn1" href="pricing.html">
                          Scan Now{" "}
                          <span className="arrow">
                            <i className="fa-solid fa-arrow-right"></i>
                          </span>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="pricing-list">
                      <img
                        src={Sardine}
                        alt="Weekly Pass Details"
                        className="weekly-pass-image"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Monthly Pass */}
              <div className="single-box">
                <div className="row">
                  <div className="col-lg-8">
                    <div className="left-side">
                      <div className="icon">
                        <img src={pricingIcon} alt="" />
                      </div>
                      <div className="heading1">
                        <h3>TILAPIA</h3>
                        <div className="space16"></div>
                        <p>
                          Whether you're an avid angler, a seasoned hunter, or
                          simply someone who revels in the great outdoors, we
                          have the perfect plan for you
                        </p>
                        <div className="space30"></div>
                        <a className="theme-btn1" href="pricing.html">
                          Scan Now{" "}
                          <span className="arrow">
                            <i className="fa-solid fa-arrow-right"></i>
                          </span>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="pricing-list">
                      <img
                        src={Tilapia}
                        alt="Weekly Pass Details"
                        className="weekly-pass-image"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Yearly Pass */}
              <div className="single-box">
                <div className="row">
                  <div className="col-lg-8">
                    <div className="left-side">
                      <div className="icon">
                        <img src={pricingIcon} alt="" />
                      </div>
                      <div className="heading1">
                        <h3>MACKREL</h3>
                        <div className="space16"></div>
                        <p>
                          Whether you're an avid angler, a seasoned hunter, or
                          simply someone who revels in the great outdoors, we
                          have the perfect plan for you
                        </p>
                        <div className="space30"></div>
                        <a className="theme-btn1" href="pricing.html">
                          Scan Now{" "}
                          <span className="arrow">
                            <i className="fa-solid fa-arrow-right"></i>
                          </span>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="pricing-list">
                      <img
                        src={Mackrel}
                        alt="Weekly Pass Details"
                        className="weekly-pass-image"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <img src={secShape1} alt="" className="sec-shape1" />
      <img src={secShape2} alt="" className="sec-shape2" />
    </div>
  );
};

export default Pricing;
