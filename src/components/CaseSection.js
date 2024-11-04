import React, { useEffect } from 'react';
import spanIcon from '../assets/images/span-icon1.png';
import caseImg4 from '../assets/images/case-study-img4.png';
import caseImg5 from '../assets/images/case-study-img5.png';
import caseImg6 from '../assets/images/case-study-img6.png';


function CaseSection() {
  return (
    <div className="case1-section-area sp">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 m-auto">
            <div className="heading1 text-center">
              <span className="span" data-aos="zoom-in-left" data-aos-duration="700">
                <img src={spanIcon} alt="Freshness Analyzer Icon" /> Freshness Analyzer
              </span>
              <div className="space16"></div>
              <p data-aos="fade-left" data-aos-duration="800">
                Whether you're a seasoned pro or a newcomer to the wild, our expert guided <br />
                fishing tours and professional hunting expeditions provide thrilling
              </p>
            </div>
          </div>
        </div>
        <div className="space60"></div>
        <div className="row">
          <div className="col-lg-12" data-aos="zoom-out" data-aos-duration="1200">
            <div className="cs_case_study_1_list">
              <div className="cs_case_study cs_style_1 cs_hover_active" data-aos="fade-up" data-aos-duration="1100">
                <a href="case-single.html" className="cs_case_study_thumb cs_case_study_thumb4 cs_bg_filed">
                  <img src={caseImg4} alt="Sardine Fish Analyzer" />
                </a>
                <div className="content-area1">
                  <a href="case-single.html">Sardine Fish Analyzer</a>
                  <a href="#" className="circle-arrow"><i className="fa-solid fa-arrow-right"></i></a>
                </div>
              </div>
              <div className="cs_case_study cs_style_1 cs_hover_active" data-aos="fade-up" data-aos-duration="1200">
                <a href="case-single.html" className="cs_case_study_thumb cs_case_study_thumb5 cs_bg_filed">
                  <img src={caseImg5} alt="Tilapia Fish Analyzer" />
                </a>
                <div className="content-area1">
                  <a href="case-single.html">Tilapia Fish Analyzer</a>
                  <a href="#" className="circle-arrow"><i className="fa-solid fa-arrow-right"></i></a>
                </div>
              </div>
              <div className="cs_case_study cs_style_1 cs_hover_active" data-aos="fade-up" data-aos-duration="1300">
                <a href="case-single.html" className="cs_case_study_thumb cs_case_study_thumb6 cs_bg_filed">
                  <img src={caseImg6} alt="Mackrel Fish Analyzer" />
                </a>
                <div className="content-area1">
                  <a href="case-single.html">Mackrel Fish Analyzer</a>
                  <a href="#" className="circle-arrow"><i className="fa-solid fa-arrow-right"></i></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CaseSection;
