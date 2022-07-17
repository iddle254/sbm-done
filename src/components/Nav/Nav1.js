import React from 'react';
import LogoImage from '../../assets/img/logo.png';
import './nav1.css';

function Nav1() {
  return (
    // <!-- mobile_nav_wrapper -->
    <div id='mobile_nav_wrapper'>
      <div className='mobile-nav-content'>
        <div className='header'>
          <a href='#' className='mobile-menu-close icon-close'></a>
          <a href='index.html' className='logo'>
            <img src='images/logo.png' width='170' height='46' alt='SBM Bank' />
          </a>
        </div>
        <ul className='mobile-nav'>
          <li className='search'>
            {/* <!-- header-search --> */}
            <form className='header-search'>
              <input type='search' placeholder='Search' />
              <button type='submit' className='icon-search'></button>
            </form>
            {/* <!-- header-search end --> */}
          </li>
          <li>
            <a href='for-you.html'>For You</a>
          </li>
          <li>
            <a href='#'>For Business</a>
          </li>
          <li>
            <a href='#'>For Corporates and Institutions</a>
          </li>
          <li>
            <a href='#'>For Diaspora</a>
          </li>
          <li>
            <a href='ways-of-banking.html'>Ways to Bank</a>
          </li>
          <li className='secondary-menu'>
            <a href='#' target='_blank'>
              About Us
            </a>
            <span className='sep'>|</span>
            <a href='#' target='_blank'>
              Investor Relations
            </a>
            <span className='sep'>|</span>
            <a href='#' target='_blank'>
              Careers
            </a>
            <a href='#' target='_blank'>
              Support
            </a>
            <span className='sep'>|</span>
            <a href='#' target='_blank'>
              Newsletter
            </a>
            <a href='#' className='btn-ib'>
              Internet Banking
            </a>
          </li>
        </ul>
      </div>
    </div>
    //    <!-- mobile_nav_wrapper end -->
  );
}

export default Nav1;
