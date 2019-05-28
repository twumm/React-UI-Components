import React from 'react';
import './Display.css';

export default function CalculatorDisplay({ display, clearDisplay }) {
  return (
    <div className="calculator-display" >
      <h1 onClick={clearDisplay}>{display}</h1>
    </div>
  )
}
