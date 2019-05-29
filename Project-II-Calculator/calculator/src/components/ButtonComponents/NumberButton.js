import React from 'react';
import './Button.css';

export default function NumberButton({ text, buttonStyle, setTempNumber, getTotal }) {

  return (
    <input
      className={buttonStyle}
      value={text}
      onClick={(event) => (
        setTempNumber ? setTempNumber(event.target.value) : getTotal(event.target.value)
      )}
      readOnly />
  );
}