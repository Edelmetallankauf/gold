import React from 'react';
import { BsFacebook, BsInstagram, BsLinkedin, BsTwitter } from 'react-icons/bs';
function Footer() {
  const data = [
    {
      type: 'Products',
      subTypes: ['Gold', 'Silver', 'Copper', 'Precious Metals'],
    },
    {
      type: 'Services',
      subTypes: ['Bars', 'Swiss Coins', 'Foreign Coins'],
    },
  ];
  const socialLinks = [
    <BsFacebook />,
    <BsInstagram />,
    <BsTwitter />,
    <BsLinkedin />,
  ];
  return (
    <footer className='py-3 mx-3' id='footer'>
      <div className='brand-container'>
        <div className='brand'>
          <span>Precious metal purchase</span>
          <span className='dot'>.</span>
        </div>
        <p className='description'>
          We buy and sell gold and silver at the best prices
        </p>

        <ul className='social-links'>
          {socialLinks.map((link, index) => (
            <li key={index}>{link}</li>
          ))}
        </ul>
      </div>
      <div className='links'>
        {data.map(({ type, subTypes }, index) => {
          return (
            <div className='link' key={index}>
              <h3 className='title'>{type}</h3>
              <ul>
                {subTypes.map((type, index) => (
                  <li key={index}>
                    <a>{type}</a>
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </footer>
  );
}

export default Footer;
