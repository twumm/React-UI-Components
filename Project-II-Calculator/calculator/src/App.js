import React from 'react';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';
import NumberButton from './components/ButtonComponents/NumberButton';
import ActionButton from './components/ButtonComponents/ActionButton';
import './App.css';

const App = () => {
  return (
    <div className="app-container">
      <CalculatorDisplay display={0} />
      <div className='row'>
        <ActionButton text={'clear'} buttonStyle='clear-button' />
        <NumberButton text={'÷'} buttonStyle='symbol-button' />
      </div>
      <div className='row'>
        <NumberButton text={7} buttonStyle='number-button' />
        <NumberButton text={8} buttonStyle='number-button' />
        <NumberButton text={9} buttonStyle='number-button' />
        <NumberButton text={'x'} buttonStyle='symbol-button' />
      </div>
      <div className='row'>
        <NumberButton text={4} buttonStyle='number-button' />
        <NumberButton text={5} buttonStyle='number-button' />
        <NumberButton text={6} buttonStyle='number-button' />
        <NumberButton text={'-'} buttonStyle='symbol-button' />
      </div>
      <div className='row'>
        <NumberButton text={1} buttonStyle='number-button' />
        <NumberButton text={2} buttonStyle='number-button' />
        <NumberButton text={3} buttonStyle='number-button' />
        <NumberButton text={'+'} buttonStyle='symbol-button' />
      </div>
      <div className='row'>
        <ActionButton text={0} buttonStyle='zero-button' />
        <NumberButton text={'='} buttonStyle='symbol-button' />
      </div>
      
    </div>
  );
};

export default App;
