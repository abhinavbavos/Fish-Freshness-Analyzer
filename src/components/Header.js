import React from 'react';
import logo from '../assets/images/logo2.png';
import '../scss/main.scss';

function Header() {
  return (
    <header style={{ position: 'absolute', top: 0, left: 0, width: '100%', zIndex: 10 }}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '20px 0' }}>
        <img
          src={logo}
          alt="Logo"
          style={{
            maxWidth: '900px',
            width: '100%', // Makes the image responsive
            marginBottom: '5px',
          }}
        />
        {/* <div style={{ width: '30%', height: '1px', backgroundColor: '#FFFFFF' }}></div> Line under the logo */}
      </div>
    </header>
  );
}

export default Header;
