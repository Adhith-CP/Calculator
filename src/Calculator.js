import React, { useState } from 'react';
import './Calculator.css';

const Calculator = () => {
  const [displayValue, setDisplayValue] = useState('0');

  const handleButtonClick = (value) => {
    if (displayValue === '0') {
      setDisplayValue(value);
    } else {
      setDisplayValue(displayValue + value);
    }
  };

  const handleClearClick = () => {
    setDisplayValue('0');
  };

  const handleEqualClick = () => {
    try {
      const result = eval(displayValue);
      setDisplayValue(result.toString());
    } catch (error) {
      // Handle error
      console.error('Invalid mathematical expression.');
    }
  };

  return (
    <div className="calculator">
      <div className="display">{displayValue}</div>
      <div className="row">
        <button className="button" onClick={() => handleButtonClick('7')}>
          7
        </button>
        <button className="button" onClick={() => handleButtonClick('8')}>
          8
        </button>
        <button className="button" onClick={() => handleButtonClick('9')}>
          9
        </button>
        <button className="button operator" onClick={() => handleButtonClick('/')}>
          ÷
        </button>
      </div>
      <div className="row">
        <button className="button" onClick={() => handleButtonClick('4')}>
          4
        </button>
        <button className="button" onClick={() => handleButtonClick('5')}>
          5
        </button>
        <button className="button" onClick={() => handleButtonClick('6')}>
          6
        </button>
        <button className="button operator" onClick={() => handleButtonClick('*')}>
          ×
        </button>
      </div>
      <div className="row">
        <button className="button" onClick={() => handleButtonClick('1')}>
          1
        </button>
        <button className="button" onClick={() => handleButtonClick('2')}>
          2
        </button>
        <button className="button" onClick={() => handleButtonClick('3')}>
          3
        </button>
        <button className="button operator" onClick={() => handleButtonClick('-')}>
          -
        </button>
      </div>
      <div className="row">
        <button className="button" onClick={() => handleButtonClick('0')}>
          0
        </button>
        <button className="button" onClick={() => handleButtonClick('.')}>
          .
        </button>
        <button className="button" onClick={handleEqualClick}>
          =
        </button>
        <button className="button operator" onClick={() => handleButtonClick('+')}>
          +
        </button>
      </div>
      <div className="row">
        <button className="button clear" onClick={handleClearClick}>
          Clear
        </button>
      </div>
    </div>
  );
};

export default Calculator;
