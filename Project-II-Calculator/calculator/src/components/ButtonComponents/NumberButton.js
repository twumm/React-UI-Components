import React from 'react';
import './Button.css';

export default function NumberButton({ text, buttonStyle, calculateHandler }) {

  return (
    <input className={buttonStyle} value={text} onClick={(event) => calculateHandler(event.target.value)} readOnly />
  );
}