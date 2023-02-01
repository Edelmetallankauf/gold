import React from 'react';
import carouselImg1 from '../assets/images/Carousel.jpg';
import carouselImg2 from '../assets/images/Carousel2.jpg';
import carouselImg3 from '../assets/images/Carousel3.jpg';
import carouselImg4 from '../assets/images/Carousel4.jpg';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';

function Home() {
  return (
    <div className='home' id='home'>
      <div className='container mx-3 py-3'>
        <div className='title-container'>
          <h2>We buy and sell gold and silver at the best prices</h2>
        </div>
        <div className='extra-image'>
          <Carousel>
            <Carousel.Item>
              <img src={carouselImg1} alt='logo'></img>
            </Carousel.Item>
            <Carousel.Item>
              <img src={carouselImg2} alt='logo'></img>
            </Carousel.Item>
            <Carousel.Item>
              <img src={carouselImg3} alt='logo'></img>
            </Carousel.Item>
            <Carousel.Item>
              <img src={carouselImg4} alt='logo'></img>
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
    </div>
  );
}

export default Home;
