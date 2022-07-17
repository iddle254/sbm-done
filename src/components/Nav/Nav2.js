import React from 'react';
import LogoImage from '../../assets/img/logo.png';
import OpenAccount from '../../assets/img/group-13680.svg';
import GetLoan from '../../assets/img/group-13583.svg';
import Investments from '../../assets/img/group-13492.svg';
import Cards from '../../assets/img/group-13143.svg';
import './nav2.css';

function Nav2() {
  return (
    // <!-- header -->
    <header>
      {/* <!-- top-section --> */}
      <div className='top-section'>
        <div className='wrapper'>
          <a href='index.html' className='logo'>
            <img src={LogoImage} width='170' alt='SBM Bank' />
          </a>
          {/* <!-- secondary-nav --> */}
          <ul className='secondary-nav'>
            <li>
              <a href='about-us.html'>About Us</a>
            </li>
            <li>
              <a href='investor-relations.html'>Investor Relations</a>
            </li>
            <li>
              <a href='careers.html'>Careers</a>
            </li>
            <li>
              <a href='support.html'>Support</a>
            </li>
            <li>
              <a href='newsroom.html'>Newsroom</a>
            </li>
            <li>
              <a href='#' className='btn'>
                Internet Banking
              </a>
            </li>
          </ul>
          {/* <!-- secondary-nav end --> */}
          <a href='#' className='btn-menu icon-menu'></a>
        </div>
      </div>
      {/* <!-- top-section end -->
       <!-- bottom-section --> */}
      <div className='bottom-section'>
        <div className='wrapper'>
          {/* <!-- main_nav --> */}
          <ul id='main_nav'>
            <li>
              <a href='for-you.html'>For You</a>
              <ul className='main_nav-dropdown hidden'>
                <div className='main_nav-wrap-category'>
                  <div className='main_nav-category'>
                    <div className='main_nav-category-title'>
                      <a href='javascript:void(0)'>
                        <img src={OpenAccount} alt='' />
                        <h4>Open an Account</h4>
                      </a>
                    </div>
                    <div className='main_nav-category-links'>
                      <ul>
                        <li>
                          <a href='javascript:void(0)'>Elite Current Account</a>
                        </li>
                        <li>
                          <a href='javascript:void(0)'>
                            Aspire Plus Current Account
                          </a>
                        </li>
                        <li>
                          <a href='javascript:void(0)'>
                            Aspire Current Account
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className='main_nav-category'>
                    <div className='main_nav-category-title'>
                      <a href='javascript:void(0)'>
                        <img src={GetLoan} alt='' />
                        <h4>Get a Loan</h4>
                      </a>
                    </div>
                    <div className='main_nav-category-links'>
                      <ul>
                        <li>
                          <a href='javascript:void(0)'>Pay Day Advance</a>
                        </li>
                        <li>
                          <a href='javascript:void(0)'>Auto Loan</a>
                        </li>
                        <li>
                          <a href='javascript:void(0)'>SBM Overdraft</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className='main_nav-category'>
                    <div className='main_nav-category-title'>
                      <a href='javascript:void(0)'>
                        <img src={Investments} alt='' />
                        <h4>Investments</h4>
                      </a>
                    </div>
                    <div className='main_nav-category-links'>
                      <ul>
                        <li>
                          <a href='javascript:void(0)'>
                            Term and Call Deposits
                          </a>
                        </li>
                        <li>
                          <a href='javascript:void(0)'>Guarantee & Bonds</a>
                        </li>
                        <li>
                          <a href='javascript:void(0)'>Letters of Credit</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className='main_nav-category'>
                    <div className='main_nav-category-title'>
                      <a href='javascript:void(0)'>
                        <img src={Cards} alt='' />
                        <h4>Cards</h4>
                      </a>
                    </div>
                    <div className='main_nav-category-links'>
                      <ul>
                        <li>
                          <a href='javascript:void(0)'>SBM Debit Card</a>
                        </li>
                        <li>
                          <a href='javascript:void(0)'>VISA Prepaid Card</a>
                        </li>
                        <li>
                          <a href='javascript:void(0)'>
                            AA Associate Prepaid Card
                          </a>
                        </li>
                        <li>
                          <a href='javascript:void(0)'>VISA Gold Credit Card</a>
                        </li>
                        <li>
                          <a href='javascript:void(0)'>
                            AA Premium Prepaid Card
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </ul>
            </li>
            <li>
              <a href='#'>For Business</a>
            </li>
            <li>
              <a href='#'>For Corporates and Institutions</a>
            </li>
            <li>
              <a href='for-diaspora.html'>For Diaspora</a>
            </li>
            <li>
              <a href='ways-of-banking.html'>Ways to Bank</a>
            </li>
            <li>
              <a href='treasury.html'>Treasury</a>
            </li>
          </ul>
          {/* <!-- main_nav end -->
             <!-- header-search --> */}
          <form className='header-search'>
            <input type='search' placeholder='Search' />
            <button type='submit' className='icon-search'></button>
          </form>
          {/* <!-- header-search end --> */}
        </div>
      </div>
      {/* <!-- bottom-section end --> */}
    </header>
  );
}

export default Nav2;
