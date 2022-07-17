import React from 'react';
import './ticker.css';

function Ticker() {
  return (
    <div id='ticker' className='bg-gray py-1 h-auto'>
      <div className='wrapper'>
        <div className='col left'>
          <span className='label text-lg'>Forex</span>
        </div>
        <div className='col right'>
          <ul id='forex-ticker'>
            <li>
              <span className='currency'>USD/ KES:</span> Buying: 97.95 ,
              Selling: 104.05
            </li>
            <li>
              <span className='currency'>GBP/ KES:</span> Buying: 126.27 ,
              Selling: 135.91
            </li>
            <li>
              <span className='currency'>EURO/ KES:</span> Buying: 104.85 ,
              Selling: 113.97
            </li>
            <li>
              <span className='currency'>ZAR/ KES:</span> Buying: 5.26 ,
              Selling: 8.27
            </li>
            <li>
              <span className='currency'>RUP/ KES:</span> Buying: 1.43
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Ticker;
