import React from 'react';
import '../scss/main.scss';
// import preloaderLogo from '../../public/images/loader.png';

const preloaderLogo = process.env.PUBLIC_URL + '/images/icar.jpg';


function Preloader() {
  return (
    <div id="preloader" className="preloader1">
      <div className="progress-circle-all">
        <div className="circle-inner">
          <img src={preloaderLogo} alt="Fishin Logo" className="fish" /> {/* Use imported logo */}
        </div>
        <div className="circle-progress"></div>
      </div>
      <div className="text">Loading......</div>
    </div>
  );
}

export default Preloader;
