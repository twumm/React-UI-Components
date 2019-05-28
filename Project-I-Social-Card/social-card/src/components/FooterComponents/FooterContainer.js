import React from 'react';
import './Footer.css';
import FooterLink from './FooterLink';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faComment, faRetweet, faHeart, faEnvelope } from '@fortawesome/free-solid-svg-icons';

library.add(faComment, faRetweet, faHeart, faEnvelope);

function Footer() {
  return (
    <div className='footer'>
      <FooterLink icon='comment' showcount="false" />
      <FooterLink icon='retweet' />
      <FooterLink icon='heart' />
      <FooterLink icon='envelope' showcount="false" />
    </div>
  );
}

export default Footer;
