import React from 'react';
import item1 from '../assets/images/Carousel2.jpg';
import item2 from '../assets/images/scottsdale-mint-dD9Kowe5_NY-unsplash.jpg';
import { BsChevronDown } from 'react-icons/bs';
function Products() {
  const productsGold = [
    {
      image: item1,
      name: '1 gram of gold',
      model: '66 CHF',
      purchase: '55 CHF',
    },
    {
      image: item1,
      name: '10 gram of gold',
      model: '666 CHF',
      purchase: '55 CHF',
    },
    {
      image: item1,
      name: '100 gram of gold',
      model: '6000 CHF',
      purchase: '5000 CHF',
    },
    {
      image: item1,
      name: '1 gold ounce',
      model: '1770 CHF',
      purchase: '1500 CHF',
    },
  ];

  const productsSilver = [
    {
      image: item2,
      name: '10 gram of silver',
      model: '18 CHF',
      purchase: '10 CHF',
    },
    {
      image: item2,
      name: '100 gram of silver',
      model: '99 CHF',
      purchase: '66 CHF',
    },
    {
      image: item2,
      name: '1 kg of silver',
      model: '830 CHF',
      purchase: '650 CHF',
    },
    {
      image: item2,
      name: '1 silver ounce',
      model: '33 CHF',
      purchase: '22 CHF',
    },
  ];

  return (
    <div className='products-container mx-3 py-3' id='products'>
      <div className='container'>
        <div className='title-container'>
          <h2>Gold Products</h2>
        </div>
        <div className='products'>
          {productsGold.map(({ image, name, model, purchase }, index) => {
            return (
              <div className='product' key={index}>
                <div className='image'>
                  <img src={image} alt='Product' />
                </div>
                <h4>{name}</h4>
                <h4>{model}</h4>
                <h4>Purchase: {purchase}</h4>
                <hr />
                <button>Buy Now</button>
                <BsChevronDown />
              </div>
            );
          })}
        </div>
      </div>
      <div className='container'>
        <div className='title-container'>
          <h2>Silver Products</h2>
        </div>
        <div className='products'>
          {productsSilver.map(({ image, name, model, purchase }, index) => {
            return (
              <div className='product' key={index}>
                <div className='image'>
                  <img src={image} alt='Product' />
                </div>
                <h4>{name}</h4>
                <h4>{model}</h4>
                <h4>Purchase: {purchase}</h4>
                <hr />
                <button>Buy Now</button>
                <BsChevronDown />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Products;
