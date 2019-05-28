import React, { useState } from 'react';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';
import NumberButton from './components/ButtonComponents/NumberButton';
import ActionButton from './components/ButtonComponents/ActionButton';
import './App.css';

const App = () => {

  let tempNumber = 0;
  const [total, calculateTotal] = useState(0);

  const getTotal = (symbol) => {
    switch(symbol) {
      case '÷':
        calculateTotal(total / tempNumber);
        console.log(typeof total)
        break;
      case 'x':
        calculateTotal(total * tempNumber);
        break;
      case '-':
        calculateTotal(total - tempNumber);
        break;
      case '+':
        calculateTotal(parseInt(total) + parseInt(tempNumber));
        break;
      // case '=':
      //   calculateTotal(parseInt(total) + parseInt(tempNumber));
      //   break;
      default:
        return total;
    }
  }

  // const 

  const setTempNumber = (num) => tempNumber = num;

  // console.log(tempNumber);

  const numberList = [7, 8, 9, 4, 5, 6, 1, 2, 3];
  const symbolList = ['÷', 'x', '-', '+', '='];

  return (
    <div className="app-container">
      <CalculatorDisplay display={total} />
      <div className="buttons-container">
        <div className="number-section">
          <ActionButton text={'clear'} buttonStyle='clear-button' />
          {numberList.map(number => 
              (
                <NumberButton
                  key={number}
                  text={number}
                  setTempNumber={setTempNumber}
                  buttonStyle='number-button'
                />
              )
            )
          }
          <ActionButton text={0} buttonStyle='zero-button' />
        </div>

        <div className="symbol-section">
          {symbolList.map(symbol => 
              (
                <NumberButton
                  key={symbol}
                  text={symbol}
                  buttonStyle='symbol-button'
                  getTotal={getTotal}
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
