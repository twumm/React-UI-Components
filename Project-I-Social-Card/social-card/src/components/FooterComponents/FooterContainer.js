import React from 'react';
import './Footer.css';
import FooterLink from './FooterLink';

function Footer() {
  return (
    <div className='footer'>
      <FooterLink linkImage='data:image/png;base64,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' />
      <FooterLink linkImage='data:image/png;base64,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' />
    </div>
  );
}

export default Footer;