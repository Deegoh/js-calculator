/* eslint-disable no-plusplus */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react';

const Board = () => {
  const [display, setDisplay] = useState('0');
  const [lastInput, setLastInput] = useState(null);

  const [isDecimal, setIsDecimal] = useState(false);

  const regOperator = /[/*\-+]/;
  const regDigits = /[0-9.]+/;

  const clear = () => {
    setIsDecimal(false);
    setLastInput(null);
    setDisplay('0');
  };

  const setNumber = (e) => {
    if (display === '0' && e.target.innerText === '0') return;
    if (lastInput) setDisplay(display + e.target.innerText);
    else setDisplay(e.target.innerText);
    setLastInput(e.target.innerText);
  };

  const calculate = (prev, op, current) => {
    let res;
    switch (op) {
      case '+':
        res = parseFloat(prev) + parseFloat(current);
        break;
      case '-':
        res = parseFloat(prev) - parseFloat(current);
        break;
      case '*':
        res = parseFloat(prev) * parseFloat(current);
        break;
      case '/':
        res = parseFloat(prev) / parseFloat(current);
        break;
      default:
    }
    return res;
  };

  const setOperator = (e) => {
    setIsDecimal(false);
    setLastInput(e.target.innerText);
    setDisplay(display + e.target.innerText);
  };

  const setDecimal = () => {
    if (!isDecimal && regOperator.test(lastInput)) {
      setDisplay(`${display}0.`);
    } else if (!isDecimal) {
      setDisplay(`${display}.`);
    }
    setLastInput('.');
    setIsDecimal(true);
  };

  const equal = () => {
    const arr = display.split('');
    const newArr = [];
    let index = 0;
    let operator;
    let isNeg = false;
    let append = '';

    arr.forEach((value) => {
      if (regDigits.test(value)) {
        if (isNeg) {
          append += (value * -1);
          isNeg = false;
        } else {
          append += value;
        }
        if (regOperator.test(arr[index + 1]) || index + 1 === arr.length) {
          newArr.push(append);
          append = '';
        }
        index++;
        return;
      }
      if (regOperator.test(value)) {
        if (regDigits.test(arr[index + 1])) {
          operator = value;
          if (arr[index] === '-' && regOperator.test(arr[index - 1])) {
            operator = arr[index - 1];
            isNeg = true;
          }
          newArr.push(operator);
        }
      }
      index++;
    });
    let res = parseFloat(newArr[0]);
    for (let i = 0; i < newArr.length - 2; i += 2) {
      res = calculate(res, newArr[i + 1], newArr[i + 2]);
    }
    setIsDecimal(false);
    setLastInput('=');
    setDisplay(res);
  };

  return (
    <>
      <div className="display">
        <div id="display">{display}</div>
        <div id="lastInput">{lastInput}</div>
      </div>
      <div className="input">
        <div
          id="equals"
          onClick={() => equal()}
        >
          =
        </div>
        <div
          id="add"
          onClick={(e) => setOperator(e)}
        >
          +
        </div>
        <div
          id="subtract"
          onClick={(e) => setOperator(e)}
        >
          -
        </div>
        <div
          id="multiply"
          onClick={(e) => setOperator(e)}
        >
          *
        </div>
        <div
          id="divide"
          onClick={(e) => setOperator(e)}
        >
          /
        </div>
        <div
          id="decimal"
          onClick={() => setDecimal()}
        >
          .
        </div>
        <div
          id="clear"
          onClick={() => clear()}
        >
          del
        </div>
        <div
          id="zero"
          onClick={(e) => setNumber(e)}
        >
          0
        </div>
        <div
          id="one"
          onClick={(e) => setNumber(e)}
        >
          1
        </div>
        <div
          id="two"
          onClick={(e) => setNumber(e)}
        >
          2
        </div>
        <div
          id="three"
          onClick={(e) => setNumber(e)}
        >
          3
        </div>
        <div
          id="four"
          onClick={(e) => setNumber(e)}
        >
          4
        </div>
        <div
          id="five"
          onClick={(e) => setNumber(e)}
        >
          5
        </div>
        <div
          id="six"
          onClick={(e) => setNumber(e)}
        >
          6
        </div>
        <div
          id="seven"
          onClick={(e) => setNumber(e)}
        >
          7
        </div>
        <div
          id="eight"
          onClick={(e) => setNumber(e)}
        >
          8
        </div>
        <div
          id="nine"
          onClick={(e) => setNumber(e)}
        >
          9
        </div>
      </div>
    </>
  );
};

export default Board;
