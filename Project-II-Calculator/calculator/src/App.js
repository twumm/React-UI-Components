import React from 'react';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';
import NumberButton from './components/ButtonComponents/NumberButton';
import './App.css';

const App = () => {
  return (
    <div className="app-container">
      <CalculatorDisplay display={0} />
      <div className='row'>
        <NumberButton value={1} buttonStyle='number-button' />
        <NumberButton value={2} buttonStyle='number-button' />
        <NumberButton value={3} buttonStyle='number-button' />
        <NumberButton value={'x'} buttonStyle='symbol-button' />
      </div>
      
    </div>
  );
};

export default App;
