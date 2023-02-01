import React from 'react';
import choose2 from '../assets/choose2.png';
import choose3 from '../assets/choose3.png';
import choose4 from '../assets/choose4.png';

function Chooseus() {
  const data = [
    {
      image: choose4,
      title: 'Is precious metal purchase deliverable?',
      description: 'Yes we deliver throughout Europe.',
    },
    {
      image: choose2,
      title: 'What can I sell? Which precious metals do you buy?',
      description:
        'Edellmetallankauf.ch buys jewellery, scrap gold, dental gold, scrap gold, silver, coins and other precious metals such as copper. The best way is to contact us and tell us what you want to sell.',
    },
    {
      image: choose3,
      title: 'How is the agreed amount paid out?',
      description:
        'The agreed amount will be paid out via bank transfer, Twint, Paypal, Bitcoin.',
    },
    {
      image: choose4,
      title:
        'Can you also store precious metals for me or buy them on my behalf?',
      description: 'Nein wir lagern keine Edelmetalle.',
    },
    {
      image: choose3,
      title: 'How long does it take for my order to be delivered?',
      description:
        'Es kommt drauf an wohin es geliefert wird. In der Schweiz erhalten Käufer ihre Bestellung inerhalb einer Woche.',
    },
    {
      image: choose2,
      title: 'What are precious metals and why are they valuable?',
      description:
        'Edelmetalle sind chemische Elemente, die wegen ihrer Seltenheit, Schönheit und chemischen Beständigkeit als wertvoll angesehen werden. Dazu gehören Gold, Silber, Platin und Palladium.',
    },
    {
      image: choose4,
      title:
        'What is the difference between bars and coins made of precious metals?',
      description:
        'Bars are ingots, meaning they are cast in a specific shape and typically weigh several ounces. Coins are smaller pieces of precious metal, usually issued by governments, for use as collectibles or as a means of payment.',
    },
  ];
  return (
    <div className='choose-us-container mx-3 py-3' id='FAQs'>
      <div className='container'>
        <div className='title-container'>
          <h2>FAQs?</h2>
          <p>Your question will be answered</p>
        </div>
        <div className='content'>
          <div className='choose-us'>
            {data.map(({ image, title, description }, index) => {
              return (
                <div className='choose' key={index}>
                  <img src={image} alt='choose' />
                  <h4>{title}</h4>
                  <p>{description}</p>
                </div>
              );
            })}
          </div>
          {/* <div className='delivery'>
            <img src={choose} alt='delivery' />
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default Chooseus;
