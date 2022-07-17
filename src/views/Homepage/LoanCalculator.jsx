import React from 'react';
import './loan-calculator.css';

function LoanCalculator() {
  return (
    <section className='content-wrapper'>
      <div className='wrapper'>
        <h2 className='section-title' data-vp-add-class='visible'>
          I would like to get an estimate for a
          <span className='light'> loan</span>
        </h2>
        {/* <!-- loan-calculator --> */}
        <div className='loan-calculator' data-vp-add-class='visible'>
          <form method='post' action='#'>
            <div className='field'>
              <label for='amount' className='label'>
                How much do you need?
              </label>
              <div className='input-wrapper'>
                <input
                  type='number'
                  id='amount'
                  name='amount'
                  className='textbox has-label'
                  placeholder='Enter Amount'
                  required
                />
                <label for='amount'>KES</label>
              </div>
            </div>
            <div className='field'>
              <label for='loan_for' className='label'>
                What is it for?
              </label>
              <div className='dd-wrapper icon-chevron-down'>
                <select
                  id='loan_for'
                  name='loan_for'
                  className='textbox dd-loan'
                >
                  <option>Personal Mortgage</option>
                  <option>Savings</option>
                  <option>Car Loan</option>
                  <option>Student Loan</option>
                </select>
              </div>
            </div>
            <div className='field'>
              <label for='months' className='label'>
                You can repay in about
              </label>
              <div className='input-wrapper'>
                <input
                  type='number'
                  id='months'
                  name='months'
                  className='textbox has-label'
                  placeholder='Enter Months'
                  required
                />
                <label for='months'>Months</label>
              </div>
            </div>
            <div className='field'>
              <label className='label spacer'>&nbsp;</label>
              <button type='submit' className='primary-btn btn-calculate'>
                Calculate
              </button>
            </div>
          </form>
          {/* <!-- results --> */}
          <ul className='results'>
            <li>
              <span className='title'>Total repayable amount</span>
              <span className='value'>5,780,000</span>
            </li>
            <li>
              <span className='title'>Monthly instalments</span>
              <span className='value'>190,600</span>
            </li>
            <li>
              <span className='title'>Total interest accrued</span>
              <span className='value'>780,000</span>
            </li>
            <li>
              <a href='#' className='primary-btn'>
                Get a loan
              </a>
            </li>
          </ul>
          {/* <!-- results end --> */}
        </div>
        {/* <!-- loan-calculator end --> */}
      </div>
    </section>
  );
}

export default LoanCalculator;
