import React from 'react';
import './Button.css';

export default function NumberButton({ value, buttonWidth }) {
  // If buttonWidth is provided, set width, else use default width
  const buttonStyle = {
    width: buttonWidth ? buttonWidth : '25%', 
  }

  return (
    <span className='number-button' style={buttonStyle}>{value}</span>
  );
}