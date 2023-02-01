import React from 'react';
import { HiArrowSmRight } from 'react-icons/hi';
import service1 from '../assets/images/gold-6355963_1920-removebg-preview.png';
import service2 from '../assets/images/gold-679433_1920-removebg-preview.png';
import service3 from '../assets/images/coin4.png';
import service4 from '../assets/service4.png';

function Services() {
  return (
    <div className='services-container mx-3 py-3' id='services'>
      <div className='container'>
        <div className='service one'>
          <h4>Gold, Silver and Copper</h4>
          <p>
            Edellmetallankauf.ch buys and sells gold, silver and copper. Gold
            has a history of stable performance and is an attractive investment
            option in times of economic uncertainty or volatility. Precious
            metals are also an attractive anti-inflation tool. We buy every
            karat of gold and everything that has to do with silver. No matter
            what the silver content.
          </p>
          <div className='image'>
            <img src={service1} alt='service' />
          </div>
        </div>
        <div className='service two'>
          <div className='content'>
            <h4>We buy your bars</h4>
          </div>
          <div className='image'>
            <img src={service2} alt='service' />
          </div>
        </div>
        <div className='service three'>
          <div className='image'>
            <img src={service3} alt='service' />
          </div>
          <div className='content'>
            <h4>We buy your coins</h4>
          </div>
        </div>
        <div className='service four'>
          <h4>Bars</h4>
          <p>
            It doesn't matter to us what condition the bar is in. It is also not
            important whether a bullion certificate is available. If you want to
            sell precious metals, you can contact us at any time using our
            contact form. <HiArrowSmRight />
          </p>
          <h4>Coins</h4>
          <p>
            We not only buy silver coins, but also gold and copper coins.
            Whether Swiss coins or foreign coins <HiArrowSmRight />
          </p>
        </div>
      </div>
    </div>
  );
}

export default Services;
