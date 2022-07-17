import React from 'react';
import eliteBankingFigure from '../../assets/img/group-5311.png';
import relationship from '../../assets/img/group-1096.svg';
import lending from '../../assets/img/group-1098.svg';
import wealthmanagement from '../../assets/img/group-1097.svg';
import global from '../../assets/img/group-0841.svg';
import extended from '../../assets/img/group-1099.svg';
import './elite-banking.css';

function EliteBanking() {
  return (
    <section className='content-wrapper has-animation py-0'>
      <div className='wrapper'>
        <div className='solutions py-0 elite'>
          <div className='col left py-3 w-20'>
            <div className='block'>
              <h3 className='section-title'>
                SBM Elite{' '}
                <span className='light'>
                  <br /> Banking
                </span>
              </h3>
              <p>
                Let our global banking experts help as you enter new markets,
                capitalize on cross-border opportunities and maximize
                international revenues.
              </p>
              <a href='#' className='link-btn'>
                Explore more
              </a>
            </div>
          </div>
          <div className='col right'>
            <div className='elite-benefits'>
              <div className='elite-benefits_figure'>
                <img src={eliteBankingFigure} alt='' />
              </div>
              <div className='elite-benefits_content bg-black'>
                <h3>Enjoy Elite Banking Benefits</h3>
                <div className='elite-benefits_items'>
                  <div className='benefit'>
                    <img src={relationship} alt='' />
                    <h4>Dedicated Relationship Manager</h4>
                  </div>
                  <div className='benefit'>
                    <img src={lending} alt='' />
                    <h4>Distinct Lending Solutions</h4>
                  </div>
                  <div className='benefit'>
                    <img src={wealthmanagement} alt='' />
                    <h4>Wealth Management Solutions</h4>
                  </div>
                  <div className='benefit'>
                    <img src={global} alt='' />
                    <h4>Global Recognisition</h4>
                  </div>
                  <div className='benefit'>
                    <img src={extended} alt='' />
                    <h4>Extended Family Benefit</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default EliteBanking;
