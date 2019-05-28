import React from 'react';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';
import './App.css';

const App = () => {
  return (
    <div className="app-container">
      <CalculatorDisplay display={0} />
    </div>
  );
};

export default App;
