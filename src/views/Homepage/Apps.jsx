import React from 'react';
import downloadFigure from '../../assets/img/group-5535.png';
import googlePlay from '../../assets/img/google-play.svg';
import appStore from '../../assets/img/app-store.svg';
import './apps.css';

function Apps() {
  return (
    <section className='app-section'>
      <div className='wrapper pb-2'>
        <div className='md_flex-nowrap max-w-xl mx-auto'>
          <div
            className='col left content-wrapper app-download_hold bg-white'
            data-vp-add-class='visible'
          >
            <div className='app-download_figure'>
              <img src={downloadFigure} alt='' />
            </div>
            <div className='app-download_content'>
              <h2 className='section-title text-xl'>SBM Mfukoni Mobile App</h2>
              <p>Stay connected, enjoy convenience and peace of mind</p>
              {/* <!-- app-download --> */}
              <div className='app-download'>
                <a href='#' target='_blank'>
                  <img
                    src={googlePlay}
                    width='166'
                    height='50'
                    alt='Get it on Google Play'
                  />
                </a>
                <a href='#' target='_blank'>
                  <img
                    src={appStore}
                    width='150'
                    height='50'
                    alt='Download on the App Store'
                  />
                </a>
              </div>
              {/* <!-- app-download end --> */}
            </div>
          </div>
          <div className='app-download_hold bg-white'>
            <div className='app-download_figure'>
              <img src='images/group-0993.png' alt='' />
            </div>
            <div className='app-download_content'>
              <h2 className='section-title text-xl'>SBM Internet Banking</h2>
              <p>Stay connected, enjoy convenience and peace of mind</p>
              <a href='javascript:void(0)' className='primary-btn'>
                Log In
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Apps;
