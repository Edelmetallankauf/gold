import React, { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdClose } from 'react-icons/md';
import { ImSun } from 'react-icons/im';
import { BsFillMoonFill } from 'react-icons/bs';
import home from '../assets/images/icon.png';

function Navbar({ changeTheme, currentTheme }) {
  const [navState, setNavState] = useState(false);
  const html = document.querySelector('html');
  html.addEventListener('click', () => setNavState(false));
  return (
    <nav>
      <div className='container py-2 mx-3' id='navbar'>
        <div className='brand'>
          <span>Precious metal purchase</span>
          <img src={home} alt='brandImg'></img>
        </div>
        <div className='links-container' onClick={(e) => e.stopPropagation()}>
          <div className='toggle'>
            {navState ? (
              <MdClose onClick={() => setNavState(false)} />
            ) : (
              <GiHamburgerMenu
                onClick={(e) => {
                  e.stopPropagation();
                  setNavState(true);
                }}
              />
            )}
            <div onClick={changeTheme}>
              {currentTheme === 'dark' ? (
                <ImSun className='sun' />
              ) : (
                <BsFillMoonFill className='moon' />
              )}
            </div>
          </div>
          <div className={`links ${navState ? 'responsive-toggle' : ''}`}>
            <ul>
              <li>
                <a href='#home'> Home</a>
              </li>
              <li>
                <a href='#services'> Services</a>
              </li>
              <li>
                <a href='#products'> Shop</a>
              </li>
              <li>
                <a href='#FAQs'> FAQs</a>
              </li>
              <li>
                <a href='#footer'> Contact</a>
              </li>

              <li onClick={changeTheme} className='color-mode'>
                {currentTheme === 'dark' ? (
                  <ImSun className='sun' />
                ) : (
                  <BsFillMoonFill className='moon' />
                )}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
