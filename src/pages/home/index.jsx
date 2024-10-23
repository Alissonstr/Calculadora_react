// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import Calculator from "./Calculator.jsx";

function Home() {
  const [operator, setOperator] = useState(null);
  const [currentNumber, setCurrentNumber] = useState('');
  const [oldNumber, setOldNumber] = useState('');

  useEffect(() => {
    const handleKeydown = (event) => {
      const keyToButtonMap = {
        '1': '1',
        '2': '2',
        '3': '3',
        '+': '+',
        '-': '-',
        'x': 'x',
        '/': '/',
        '0': '0',
        '.': '.',
        'c': 'C',
        'Enter': '='
      };

      const buttonText = keyToButtonMap[event.key] || event.key;

      if (buttonText) {
        handleButtonClick(buttonText);
      }
    };

    document.addEventListener('keydown', handleKeydown);
    return () => {
      document.removeEventListener('keydown', handleKeydown);
    };
  }, []);

  const handleButtonClick = (value) => {
    const validValues = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "."];
    const validOperators = ["/", "+", "-", "x"];

    if (validValues.includes(value)) {
      addDigit(value);
    } else if (validOperators.includes(value)) {
      setOperatorFunction(value);
    } else if (value === 'c') {
      clear();
    } else if (value === '<') {
      erase();
    } else if (value === '=') {
      calculate();
    }else if (value === '+/-') {
      setCurrentNumber(currentNumber * -1);
    }
  };

  const clear = () => {
    setCurrentNumber('');
    setOldNumber('');
    setOperator(null);
  };

  const erase = () => {
    setCurrentNumber(currentNumber.slice(0, -1));
  };

  const setOperatorFunction = (newOperator) => {
    if (currentNumber === '') return;

    if (operator !== null) {
      calculate();
    }

    setOperator(newOperator);
    setOldNumber(currentNumber);
    setCurrentNumber('');
  };

  const addDigit = (value) => {
    setCurrentNumber((prev) => prev + value);
  };

  const calculate = () => {
    if (operator === null || currentNumber === '' || oldNumber === '') return setCurrentNumber(currentNumber * 1);

    const oldNum = parseFloat(oldNumber);
    const currentNum = parseFloat(currentNumber);

    let result;
    switch (operator) {
      case '+':
        result = oldNum + currentNum;
        break;
      case '-':
        result = oldNum - currentNum;
        break;
      case 'x':
        result = oldNum * currentNum;
        break;
      case '/':
        result = oldNum / currentNum;
        break;
      default:
        return;
    }

    setCurrentNumber(result.toString());
    setOldNumber('');
    setOperator(null);
  };

  return (
      <div>
        <Calculator currentNumber={currentNumber} handleButtonClick={handleButtonClick} />
      </div>
  );
}

export default Home;
