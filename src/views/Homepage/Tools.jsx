import React from 'react';
import branch from '../../assets/img/branch.svg';
import rates from '../../assets/img/rates.svg';
import contact from '../../assets/img/contact.svg';
import faq from '../../assets/img/faq.svg';
import './banking-tools.css';

function Tools() {
  return (
    <section
      className='content-wrapper has-animation pt-0'
      data-vp-add-class='visible'
    >
      <div className='wrapper'>
        <h2 className='section-title'>Tools to bank with ease</h2>
        {/* <!-- banking-tools --> */}
        <ul className='banking-tools'>
          <li>
            <a href='branches.html'>
              <img src={branch} width='44' height='44' alt='' />
              <span>SBM Near Me ATM, Branch, Agent</span>
            </a>
          </li>
          <li>
            <a href='#'>
              <img src={rates} width='33' height='44' alt='' />
              <span>Rates and fees</span>
            </a>
          </li>
          <li>
            <a href='#'>
              <img src={contact} width='33' height='44' alt='' />
              <span>Contact Us</span>
            </a>
          </li>
          <li>
            <a href='faqs.html'>
              <img src={faq} width='44' height='44' alt='' />
              <span>
                Frequently
                <br />
                Asked Questions
              </span>
            </a>
          </li>
        </ul>
        {/* <!-- banking-tools end --> */}
      </div>
    </section>
  );
}

export default Tools;
