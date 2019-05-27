import React from 'react';
import CardBanner from './CardBanner';
import CardContent from './CardContent';
import './Card.css';

const cardContent = {
  title: 'Get started with React',
  content: 'React makes it painless to create interactive UIs. Design simple views for each state in your application',
  link: 'reactjs.org'
}

function CardContainer() {
  return (
    <div className="card-container">
      <CardBanner imageSrc="https://tk-assets.lambdaschool.com/fcd75197-7d12-46ec-bc9e-4130f34822fa_reactbackground.png" />
      <CardContent title={cardContent.title} content={cardContent.content} link={cardContent.link} />
    </div>
  );
}

export default CardContainer;
