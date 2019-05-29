import React from 'react';
import './Button.css';

export default function ActionButton({ text, buttonStyle }) {

  return (
    <input className={buttonStyle} value={text} readOnly />
  );
}