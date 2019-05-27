import React from 'react';
import './Footer.css';
import FooterLink from './FooterLink';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faComment, faRecycle, faHeart, faEnvelope } from '@fortawesome/free-solid-svg-icons';

library.add(faComment, faRecycle, faHeart, faEnvelope);

function Footer() {
  return (
    <div className='footer'>
      <FooterLink icon='comment' showcount="false" />
      <FooterLink icon='recycle' />
      <FooterLink icon='heart' />
      <FooterLink icon='envelope' showcount="false" />
    </div>
  );
}

export default Footer;
