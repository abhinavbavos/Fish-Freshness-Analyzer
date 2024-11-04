import React from 'react';

function Header() {
  return (
    <header>
      <div className="header-area header-area1 header-area-all d-none d-lg-block" id="header">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="header-elements">
                <div className="site-logo">
                  <a href="index.html">
                    <img src="assets/img/logo/header-logo1.png" alt="Logo" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
