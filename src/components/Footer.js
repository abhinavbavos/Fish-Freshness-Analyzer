import React from 'react';
import footerShape1 from '../assets/images/footer-shape1.png';
import footerShape2 from '../assets/images/footer-shape2.png';
import '../scss/main.scss'


function Footer() {
  return (
    <div className="footer1">
      <div className="container">
        <div className="space50"></div>
        <div className="footer-border"></div>
        <div className="row">
          <div className="col-md-6">
            <div className="copyright-area">
              <p>© Copyright 2024 - CIFT. All Rights Reserved</p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="copyright-area right">
              <a href="#">Privacy Policy</a>
              <a href="#"> Terms & Conditions</a>
            </div>
          </div>
        </div>
      </div>

      <img className="sec-shape1" src={footerShape1} alt="Footer Shape 1" />
      <img className="sec-shape2" src={footerShape2} alt="Footer Shape 2" />
    </div>
  );
}

export default Footer;
