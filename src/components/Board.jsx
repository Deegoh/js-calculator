/* eslint-disable no-const-assign */
/* eslint-disable no-plusplus */
/* eslint-disable no-console */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react';

const Board = () => {
  const [display, setDisplay] = useState('0');
  const [lastInput, setLastInput] = useState(null);
  const [isDecimal, setIsDecimal] = useState(false);
  const [currentVal, setCurrentVal] = useState('');
  const [prevVal, setPrevVal] = useState('');
  const [ope, SetOpe] = useState('');

  const regOperator = new RegExp('[/*-+]');

  const clear = () => {
    setCurrentVal('');
    setPrevVal('');
    setLastInput(null);
    setIsDecimal(false);
    SetOpe('');
    setDisplay('0');
  };

  const setNumber = (e) => {
    if (display === '0' && e.target.innerText === '0') return;
    if (lastInput) setDisplay(display + e.target.innerText);
    else setDisplay(e.target.innerText);
    setLastInput(e.target.innerText);
    setCurrentVal(currentVal + e.target.innerText);
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
    if (prevVal === '') setPrevVal(currentVal);
    else setPrevVal(calculate(prevVal, ope, currentVal));
    setCurrentVal('');
    SetOpe(e.target.innerText);
    setDisplay(display + e.target.innerText);
    setLastInput(e.target.innerText);
    setIsDecimal(false);
  };

  const setDecimal = () => {
    if (!isDecimal && regOperator.test(lastInput))setDisplay(`${display}0.`);
    else if (!isDecimal) setDisplay(`${display}.`);
    setLastInput('.');
    setIsDecimal(true);
  };

  const equal = () => {
    console.log(display);
    console.log(prevVal);
    console.log(ope);
    console.log(currentVal);
    const res = calculate(prevVal, ope, currentVal);
    console.log(res);
    setCurrentVal(res);
    setPrevVal('');
    setLastInput(res);
    setDisplay('');
    setIsDecimal(false);
    SetOpe('');
  };

  return (
    <>
      <div id="display">{display}</div>
      <div id="lastInput">{lastInput}</div>
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
    </>
  );
};

export default Board;
