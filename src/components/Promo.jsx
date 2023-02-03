import React from 'react';
import promo from '../assets/images/promo.png';
function Promo() {
  return (
    <div className='promo-container'>
      <div className='container mx-3 py-3'>
        <div className='content'>
          <div className='title-container'>
            <h2>Contact</h2>
            <p>
              To recive latest news on our products and services, just email and
              subscribe to us 🙂
            </p>
          </div>
          <div className='subscribe-container'>
            <a href='mailto:nhensler@edellmetallankauf.ch'>
              Email and Subscribe
            </a>
          </div>
        </div>
        <div className='promo-image'>
          <img src={promo} alt='Promo' />
        </div>
      </div>
    </div>
  );
}

export default Promo;
