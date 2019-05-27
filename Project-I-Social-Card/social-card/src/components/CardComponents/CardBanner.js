import React from 'react';
import './Card.css';

function CardBanner({ imageSrc }) {
  return (
    <div>
      <img src={imageSrc} alt="Banner" />
    </div>
  );
}

export default CardBanner;
