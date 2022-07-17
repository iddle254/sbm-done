import React from 'react';
import social1 from '../../assets/img/group-26029.png';
import social2 from '../../assets/img/group-26840.png';
import social3 from '../../assets/img/group-26464.png';
import social4 from '../../assets/img/group-26237.png';

import './footer.css';

function Footer() {
  return (
    <footer>
      {/* <!-- links-section --> */}
      <div className='links-section'>
        <div className='footer-links wrapper'>
          <div className='links-block'>
            <h3>For You</h3>
            <ul>
              <li>
                <a href='#'>Elite Current Account</a>
              </li>
              <li>
                <a href='#'>Aspire Plus Current Account</a>
              </li>
              <li>
                <a href='#'>Aspire Current Account</a>
              </li>
              <li>
                <a href='#'>Pay as you go</a>
              </li>
              <li>
                <a href='#'>Pebble Savings Account</a>
              </li>
              <li>
                <a href='#'>Instant Saver Account</a>
              </li>
            </ul>
          </div>
          <div className='links-block'>
            <h3>For Your Business</h3>
            <ul>
              <li>
                <a href='#'>Plus Current Account</a>
              </li>
              <li>
                <a href='#'>Business Plus Current Account </a>
              </li>
            </ul>
          </div>
          <div className='links-block'>
            <h3>For Corporates</h3>
            <ul>
              <li>
                <a href='#'>Transactional Banking</a>
              </li>
              <li>
                <a href='#'>Invoice Discounting</a>
              </li>
              <li>
                <a href='#'>Asset Finance</a>
              </li>
              <li>
                <a href='#'>Trade Facilities</a>
              </li>
              <li>
                <a href='#'>Term Loans</a>
              </li>
              <li>
                <a href='#'>Overdraft</a>
              </li>
              <li>
                <a href='#'>NGO’s</a>
              </li>
              <li>
                <a href='#'>Churches</a>
              </li>
            </ul>
          </div>
          <div className='links-block'>
            <h3>Quick Links</h3>
            <ul>
              <li>
                <a href='#'>Leadership Centre</a>
              </li>
              <li>
                <a href='#'>FAQs</a>
              </li>
              <li>
                <a href='#'>Internet Banking</a>
              </li>
              <li>
                <a href='careers.html'>Careers</a>
              </li>
            </ul>
          </div>
          <div className='links-block hours'>
            <h3>Banking Hours</h3>
            <ul>
              <li>Mon – Fri : 9.00 am - 5.00 pm</li>
              <li>Sat : 9.30 am - 12.30 pm</li>
              <li>Sun : Closed</li>
              <li>Public Holidays : Closed</li>
            </ul>
          </div>
        </div>
      </div>
      {/* <!-- links-section end -->
      <!-- bottom-section --> */}
      <div className='bottom-section'>
        <div className='wrapper'>
          <div className='bottom-section_inner'>
            <span className='copyright'>
              Regulated by the Central Bank of Kenya{' '}
              <span className='sep'>|</span> &copy; 2022 SBM Bank Ltd. All
              Rights Reserved.
            </span>
            <ul className='social'>
              <li>
                <a href='javascript:void(0)'>
                  <img src={social1} alt='' />
                </a>
              </li>
              <li>
                <a href='javascript:void(0)'>
                  <img src={social2} alt='' />
                </a>
              </li>
              <li>
                <a href='javascript:void(0)'>
                  <img src={social3} alt='' />
                </a>
              </li>
              <li>
                <a href='javascript:void(0)'>
                  <img src={social4} alt='' />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* <!-- bottom-section end --> */}
      <div className='info-policy' style={{ display: 'none' }}>
        <span>
          Our website uses cookies to help us improve our services to you. By
          continuing to browse the site you are agreeing to our{' '}
          <a href='privacy-policy.html'>privacy policy</a> and our use of
          cookies.
        </span>
        <span className='icon-close'></span>
      </div>
    </footer>
  );
}

export default Footer;
