import React from 'react';
import { BsFacebook, BsInstagram, BsLinkedin, BsTwitter } from 'react-icons/bs';
function Footer() {
  const data = [
    {
      type: 'Products',
      link: 'products',
      subTypes: ['Gold', 'Silver', 'Copper', 'Precious Metals'],
    },
    {
      type: 'Services',
      link: 'services',
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
                {subTypes.map((type, link, index) => (
                  <li key={index}>
                    <a href={`#${link}`}>{type}</a>
                  </li>
                ))}
              </ul>
            </div>
          );
        })}

        <div class='elfsight-app-ed170658-b721-461f-b15b-fb818b7912c8'></div>
      </div>
    </footer>
  );
}

export default Footer;
