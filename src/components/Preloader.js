import React from 'react';

function Preloader() {
  return (
    <div id="preloader" className="preloader1">
      <div className="progress-circle-all">
        <div className="circle-inner">
          <img src="assets/img/logo/preloader.svg" alt="Fishin Logo" className="fish" />
        </div>
        <div className="circle-progress"></div>
      </div>
      <div className="text">Loading......</div>
    </div>
  );
}

export default Preloader;
