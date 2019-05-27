import React from 'react';
import * as moment from 'moment';
import ImageThumbnail from './ImageThumbnail';
import HeaderTitle from './HeaderTitle';
import HeaderContent from './HeaderContent';
import './Header.css';

const content = "Let's learn React by building simple interfaces with component. Don't try to overthink it, just keep it simple and have fun. Once you feel comfortable using components you are well on your way to mastering React!";

function HeaderContainer() {
  return (
    <div className='header-container'>
      <ImageThumbnail imageSrc="https://tk-assets.lambdaschool.com/1c1b7262-cf23-4a9f-90b6-da0d3c74a5c6_lambdacrest.png" />
      <div className="header-content-div">
        <HeaderTitle name="Lambda School" username="LambdaSchool" date={moment().format('D MMM')} />
        <HeaderContent content={content} />
      </div>
    </div>
  )
}

export default HeaderContainer;
