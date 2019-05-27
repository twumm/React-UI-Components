import React from 'react';
import ImageThumbnail from './ImageThumbnail';
import HeaderTitle from './HeaderTitle';
import './Header.css';

function HeaderContainer() {
  return (
    <div className='header-container'>
      <ImageThumbnail imageSrc="https://tk-assets.lambdaschool.com/1c1b7262-cf23-4a9f-90b6-da0d3c74a5c6_lambdacrest.png" />
      <HeaderTitle name="Lambda School" username="LambdaSchool" date={Date.now()} />
    </div>
  )
}

export default HeaderContainer;