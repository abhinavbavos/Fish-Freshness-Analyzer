import React from 'react';
import logo from '../assets/images/logo.png';
import '../scss/main.scss'


function Header() {
  return (
    <header style={{ position: 'absolute', top: 0, left: 0, width: '100%', zIndex: 10 }}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '20px 0' }}>
        <a href="index.html">
          <img src={logo} alt="Logo" style={{ maxWidth: '800px', marginBottom: '10px' }} /> {/* Increased size and margin */}
        </a>
        <div style={{ width: '40%', height: '1 px', backgroundColor: '#FFFFFF' }}></div> {/* Line under the logo */}
      </div>
    </header>
  );
}

export default Header;
