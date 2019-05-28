import React from 'react';
import './Display.css';

export default function CalculatorDisplay({ display }) {
  return (
    <div className="calculator-display">
      <h1>{display}</h1>
    </div>
  )
}
