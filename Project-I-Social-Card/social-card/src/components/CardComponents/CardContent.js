import React from 'react';
import './Card.css';

function CardContent({ title, content, link }) {
  return (
    <div className='card-content'>
      <h4>{title}</h4>
      <p>{content}</p>
      <p id="link">{link}</p>
    </div>
  );
}

export default CardContent;
