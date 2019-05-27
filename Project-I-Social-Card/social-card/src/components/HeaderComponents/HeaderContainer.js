import React from 'react';
import ImageThumbnail from './ImageThumbnail';
import './Header.css';

function HeaderContainer() {
  return (
    <div className='header-container'>
      <ImageThumbnail imageSrc="https://tk-assets.lambdaschool.com/1c1b7262-cf23-4a9f-90b6-da0d3c74a5c6_lambdacrest.png" />
    </div>
  )
}

export default HeaderContainer;