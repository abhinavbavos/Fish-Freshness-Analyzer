import React, { useEffect } from "react";
import "aos/dist/aos.css"; // Import AOS CSS for animations
import AOS from "aos";
// import fishingImage from '../../public/images/fishing.jpg';

// Import images
// import spanIcon from "../../public/images/span-icon1.png";
// import shape1 from "../../public/images/pricing-image-shape1.png";
// import shape2 from "../../public/images/pricing-image-shape2.png";
// import pricingIcon from "../../public/images/pricing-icon.png";
// import secShape1 from "../../public/images/pricing-sec-shape1.png";
// import secShape2 from "../../public/images/pricing-sec-shape2.png";
// import Sardine from "../../public/images/Sardine.jpg";
// import Tilapia from "../../public/images/Tilapia.png";
// import Mackrel from "../../public/images/Mackrel.jpg";

const fishingImage = process.env.PUBLIC_URL + '/images/fishing.jpg';
const spanIcon = process.env.PUBLIC_URL + '/images/span-icon1.png';
const shape1 = process.env.PUBLIC_URL + '/images/pricing-image-shape1.png';
const shape2 = process.env.PUBLIC_URL + '/images/pricing-image-shape2.png';
const pricingIcon = process.env.PUBLIC_URL + '/images/pricing-icon.png';
const secShape1 = process.env.PUBLIC_URL + '/images/pricing-sec-shape1.png';
const secShape2 = process.env.PUBLIC_URL + '/images/pricing-sec-shape2.png';
const Sardine = process.env.PUBLIC_URL + '/images/Sardine.jpg';
const Tilapia = process.env.PUBLIC_URL + '/images/Tilapia.png';
const Mackrel = process.env.PUBLIC_URL + '/images/Mackrel.jpg';


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
                Using advanced AI and deep learning, our Fish Freshness Analyzer determines the quality and freshness of various fish species. Discover how it works by selecting a fish type below.
              </p>
            </div>
          </div>
        </div>

        <div className="space60"></div>
        <div className="row _relative">
          <div className="col-lg-4">
            <div className="images-area">
              <div className="image image-anime reveal">
                <img src={fishingImage} alt="Fishing" />
              </div>
              <img src={shape1} alt="" className="shape1" />
              <img src={shape2} alt="" className="shape2" />
            </div>
          </div>
          <div className="col-lg-8">
            <div className="pricing-box-area">
              {/* Sardine */}
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
                        Sardines are small, oily fish popular in cuisines worldwide. Our analyzer inspects sardine freshness, providing instant insights to ensure peak quality and flavor.                        </p>
                        <div className="space30"></div>
                        <a className="theme-btn1" href="/image-upload">
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
                        alt="Sardine Details"
                        className="fish-image"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Tilapia */}
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
                        Known for its mild flavor and firm texture, tilapia is a favorite in many dishes. Our tool evaluates its freshness to ensure optimal quality and taste in every meal.                        </p>
                        <div className="space30"></div>
                        <a className="theme-btn1" href="/image-upload">
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
                        alt="Tilapia Details"
                        className="fish-image"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Mackrel */}
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
                        Mackerel, known for its rich flavor and high omega-3 content, requires careful handling to maintain quality. Our analyzer assesses mackerel freshness, ensuring that consumers receive fish at its peak nutritional value and flavor.                        </p>
                        <div className="space30"></div>
                        <a className="theme-btn1" href="/image-upload">
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
                        alt="Mackrel Details"
                        className="fish-image"
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
