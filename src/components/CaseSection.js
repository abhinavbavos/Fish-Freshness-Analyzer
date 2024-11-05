import React, { useState } from "react";
import "../scss/main.scss";
import "aos/dist/aos.css"; // Assuming AOS is installed for animations

import CaseImg1 from "../assets/images/case-study-img4.png";
import CaseImg2 from "../assets/images/case-study-img5.png";
import CaseImg3 from "../assets/images/case-study-img6.png";
import SpanIcon from "../assets/images/span-icon1.png";

const caseStudies = [
  { img: CaseImg1, title: "Sardine Fish Analyzer", link: "case-single.html" },
  { img: CaseImg2, title: "Tilapia Fish Analyzer", link: "case-single.html" },
  { img: CaseImg3, title: "Mackrel Fish Analyzer", link: "case-single.html" }
];

const CaseSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="case1-section-area sp">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 m-auto">
            <div className="heading1 text-center">
              <span className="span" data-aos="zoom-in-left" data-aos-duration="700">
                <img src={SpanIcon} alt="" /> Freshness Analyzer
              </span>
              <div className="space16"></div>
              <p data-aos="fade-left" data-aos-duration="800">
                Whether you're a seasoned pro or a newcomer to the wild, our
                expert guided <br />
                fishing tours and professional hunting expeditions provide thrilling
              </p>
            </div>
          </div>
        </div>
        
        <div className="space60"></div>
        
        <div className="row">
          <div className="col-lg-12" data-aos="zoom-out" data-aos-duration="1200">
            <div className="cs_case_study_1_list">
              {caseStudies.map((caseStudy, index) => (
                <div
                  key={index}
                  className={`cs_case_study cs_style_1 cs_hover_active ${index === activeIndex ? "active" : "inactive"}`}
                  onMouseEnter={() => setActiveIndex(index)}
                  data-aos-duration={`${1100 + index * 100}`}
                >
                  <a
                    href={caseStudy.link}
                    className="cs_case_study_thumb cs_case_study_thumb5 cs_bg_filed"
                    style={{ backgroundImage: `url(${caseStudy.img})` }}
                  ></a>
                  <div className="content-area1">
                    <a href={caseStudy.link}>{caseStudy.title}</a>
                    <a href="#" className="circle-arrow">
                      <i className="fa-solid fa-arrow-right"></i>
                    </a>
                  </div>
                  <div className="content-area">
                    <a href={caseStudy.link}>{caseStudy.title}</a>
                    <a href="#" className="learn">
                      <i className="fa-solid fa-arrow-right"></i>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseSection;
