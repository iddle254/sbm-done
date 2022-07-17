import React from 'react';
import LogoImage from '../assets/img/logo.png';

function Splashscreen() {
  return (
    <>
      {/* <!-- revealer --> */}
      <div id='revealer'>
        <div
          className='revealer__layer'
          style={{ background: '#F5F5F5' }}
        ></div>
        <div
          className='revealer__layer'
          style={{ background: '#1DB2E4' }}
        ></div>
        <div
          className='revealer__layer'
          style={{ background: '#032F6F' }}
        ></div>
      </div>
      {/* <!-- revealer end --> */}
      {/* <!-- preloader --> */}
      <div id='loader-wrapper'>
        <div className='load'>
          <img src={LogoImage} width='200' alt='SBM Bank' />
          <div className='ball-beat'>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      </div>
      {/* <!-- preloader end --> */}
    </>
  );
}

export default Splashscreen;
