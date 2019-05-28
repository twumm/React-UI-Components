import React from 'react';
import './Button.css';

export default function NumberButton({ value, buttonWidth }) {
  
  return (
    <span className='number-button'>{value}</span>
  );
}