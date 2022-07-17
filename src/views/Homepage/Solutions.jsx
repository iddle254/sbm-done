import React from 'react';

import sol1 from '../../assets/img/solutions/solution1.png';
import sol2 from '../../assets/img/solutions/solution2.png';
import sol3 from '../../assets/img/solutions/solution3.png';
import sol7 from '../../assets/img/solutions/solution7.png';
import sol8 from '../../assets/img/solutions/solution8.png';
import sol9 from '../../assets/img/solutions/solution9.png';
import './solutions.css';

function Solutions() {
  return (
    <section className='content-wrapper has-animation'>
      <div className='wrapper'>
        <div className='solutions first-fold'>
          <div className='col left'>
            <div className='block'>
              <h2 className='section-title'>
                Solutions
                <br />
                <span className='light'>for you</span>
              </h2>
              <p>
                Banking with us ensures safety and security while you transact,
                manage, or grow your money.
              </p>
              <a href='#' className='link-btn'>
                All products for you
              </a>
            </div>
          </div>
          <div className='col right products-slider owl-carousel'>
            <div className='block'>
              <div className='product'>
                <img src={sol1} width='290' height='143' alt='Product Pic' />
                <div className='desc'>
                  <h3 className='title'>
                    Get a current account that suits you
                  </h3>
                  <p>
                    A current account that lets you access your funds at all
                    times
                  </p>
                  <a href='#' className='primary-btn'>
                    Open an account
                  </a>
                </div>
              </div>
            </div>
            <div className='block'>
              <div className='product'>
                <img src={sol2} width='290' height='143' alt='Product Pic' />
                <div className='desc'>
                  <h3 className='title'>Enjoy convenience when you need it</h3>
                  <p>
                    A credit card that provides you the security that you need
                  </p>
                  <a href='#' className='primary-btn'>
                    Get a card
                  </a>
                </div>
              </div>
            </div>
            <div className='block'>
              <div className='product'>
                <img src={sol3} width='290' height='143' alt='Product Pic' />
                <div className='desc'>
                  <h3 className='title'>
                    Unlock endless possibilities for you
                  </h3>
                  <p>
                    Designed to provide you liquidity in those times of need
                  </p>
                  <a href='#' className='primary-btn'>
                    Get a loan
                  </a>
                </div>
              </div>
            </div>
            <div className='block'>
              <div className='product'>
                <img src={sol9} width='290' height='143' alt='Product Pic' />
                <div className='desc'>
                  <h3 className='title'>Save your money with us </h3>
                  <p>
                    A savings account that helps you lets you achieve your goals
                    quicker
                  </p>
                  <a href='#' className='primary-btn'>
                    Open an account
                  </a>
                </div>
              </div>
            </div>
            <div className='block'>
              <div className='product'>
                <img src={sol8} width='290' height='143' alt='Product Pic' />
                <div className='desc'>
                  <h3 className='title'>Mortgage Options for everyone</h3>
                  <p>Whatever your needs, we have a mortgage for you</p>
                  <a href='#' className='primary-btn'>
                    Get a loan
                  </a>
                </div>
              </div>
            </div>
            <div className='block'>
              <div className='product'>
                <img src={sol7} width='290' height='143' alt='Product Pic' />
                <div className='desc'>
                  <h3 className='title'>
                    Investment Advisors are a call away{' '}
                  </h3>
                  <p>A solution that lets you make the most of your money</p>
                  <a href='#' className='primary-btn'>
                    Get in touch
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Solutions;
