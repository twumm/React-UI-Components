import React from 'react';
import './Card.css';

function CardBanner({ imageSrc }) {
  return (
    <div className='card-banner'>
      <img src={imageSrc} alt="Banner" />
    </div>
  );
}

export default CardBanner;
