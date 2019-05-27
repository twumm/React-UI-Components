import React from 'react';
import './Header.css';

function HeaderTitle({ name, username, date }) {
  return (
    <div className='header-title'>
      <span>{name}</span>
      <span>@{username}</span>
      <span>{date}</span>
    </div>
  )
}

export default HeaderTitle;
