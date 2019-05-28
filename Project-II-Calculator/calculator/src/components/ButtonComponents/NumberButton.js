import React from 'react';
import './Button.css';

export default function NumberButton({ value, buttonStyle }) {

  return (
    <button className={buttonStyle}>{value}</button>
  );
}