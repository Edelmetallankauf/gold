import React from 'react';
import promo from '../assets/promo.png';
function Promo() {
  return (
    <div className='promo-container'>
      <div className='container mx-3 py-3'>
        <div className='content'>
          <div className='title-container'>
            <h2>Contact</h2>
            <p>
              To recive latest news on our products and services, just subscribe
              to us 🙂
            </p>
          </div>
          <div className='subscribe-container'>
            <input type='email' placeholder='yourname@mail.com' />
            <button>Subscribe</button>
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
