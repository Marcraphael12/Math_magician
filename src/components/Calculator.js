/* eslint-disable max-len */
import React, { useState } from 'react';
import './Calculator.scss';

// Logic components
import calculate from './Logic/calculate';

// Buttons list
import buttons from './buttons';

const Calculator = () => {
  const [resultState, setResult] = useState({});

  const handleClick = (e) => {
    const value = e.target.textContent;
    const calcState = calculate(resultState, value);
    setResult(calcState);
  };

  const { total, next, operation } = resultState;

  // Taking result accordingly to the defined state
  let result = ''; // Default value
  if (total) { // If there is a total
    result = `${total} ${operation || ''} ${next || ''}`; // Save the total and set operation and next to empty strings
  } else if (next) { // If there is no operation
    result = next; // Save the next value to this variable
  }

  // Give the class name 'different' to the buttons that are not numbers accordingly to the css rules
  function giveClassName(btn) {
    if (btn === '=') {
      return 'different';
    }

    if (btn === '+' || btn === 'x' || btn === '-' || btn === '÷') {
      return 'signes';
    }
    if (btn === '0') {
      return 'zero';
    }
    return '';
  }

  return (
    <div className="main">
      <div className="screen">
        <h3 className="">{result}</h3>
      </div>
      <ul className="calc">
        {buttons.map((btn) => ( // Map the buttons list
          <li className={`pad same ${giveClassName(btn)}`} key={btn}>
            <button key={btn} onClick={handleClick} type="button">
              {btn}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Calculator;
