import React, { useState } from 'react';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';
import NumberButton from './components/ButtonComponents/NumberButton';
import ActionButton from './components/ButtonComponents/ActionButton';
import './App.css';

const App = () => {
  const numberList = [7, 8, 9, 4, 5, 6, 1, 2, 3];
  const symbolList = ['÷', 'x', '-', '+', '='];

  return (
    <div className="app-container">
      <CalculatorDisplay display={0} />
      <div className="buttons-container">
        <div className="number-section">
          <ActionButton text={'clear'} buttonStyle='clear-button' />
          {numberList.map(number => 
              (
                <NumberButton
                  key={number}
                  text={number}
                  buttonStyle='number-button'
                />
              )
            )
          }
          <ActionButton text={0} buttonStyle='zero-button' />
        </div>

        <div className="symbol-section">
          {symbolList.map((symbol, index) => 
              (
                <NumberButton
                  key={index}
                  text={symbol}
                  buttonStyle='symbol-button'
                />
              )
            )
          }
        </div>
      </div>
      
    </div>
  );
};

export default App;
