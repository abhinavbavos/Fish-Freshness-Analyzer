import React from 'react';
import '../scss/main.scss'


function MobileHeader() {
  return (
    <div className="mobile-header mobile-header-main d-block d-lg-none">
      <div className="container-fluid">
        <div className="col-12">
          <div className="mobile-header-elements">
            <div className="mobile-logo">
              <a href="index1.html">
                <img src="assets/img/logo/mobile-menu-logo1.png" alt="Mobile Logo" />
              </a>
            </div>
            <div className="mobile-nav-icon">
              <i className="fa-duotone fa-bars-staggered"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MobileHeader;
