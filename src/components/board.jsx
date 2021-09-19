/* eslint-disable no-console */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react';

const Board = () => {
  const [display, setDisplay] = useState('0');

  const handleClick = (value) => {
    if (display === '0') {
      setDisplay(value.target.innerText);
    } else { setDisplay(display + value.target.innerText); }
  };

  const clear = () => {
    setDisplay('0');
  };

  const equal = () => {
    console.log(display);
    const values = display.split(/[+/*-]/, display.length);
    const sign = display.split(/[0-9]+/, display.length);
    let res = values[0];
    console.log(values);
    console.log(sign);

    // eslint-disable-next-line no-plusplus
    for (let index = 1; index < sign.length; index++) {
      switch (sign[index]) {
        case '/':
          res /= values[index];
          break;
        case '*':
          res *= values[index];
          break;
        case '-':
          res -= values[index];
          break;
        case '+':
          // eslint-disable-next-line radix
          res = parseInt(res) + parseInt(values[index]);
          break;
        default:
      }
    }
    console.log(res);
    setDisplay(res);
  };

  return (
    <>
      <div id="display">{display}</div>
      <div
        id="equals"
        onClick={() => equal()}
      >
        =
      </div>
      <div
        id="add"
        onClick={(e) => handleClick(e)}
      >
        +
      </div>
      <div
        id="subtract"
        onClick={(e) => handleClick(e)}
      >
        -
      </div>
      <div
        id="multiply"
        onClick={(e) => handleClick(e)}
      >
        *
      </div>
      <div
        id="divide"
        onClick={(e) => handleClick(e)}
      >
        /
      </div>
      <div
        id="decimal"
        onClick={(e) => handleClick(e)}
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
        onClick={(e) => handleClick(e)}
      >
        0
      </div>
      <div
        id="one"
        onClick={(e) => handleClick(e)}
      >
        1
      </div>
      <div
        id="two"
        onClick={(e) => handleClick(e)}
      >
        2
      </div>
      <div
        id="three"
        onClick={(e) => handleClick(e)}
      >
        3
      </div>
      <div
        id="four"
        onClick={(e) => handleClick(e)}
      >
        4
      </div>
      <div
        id="five"
        onClick={(e) => handleClick(e)}
      >
        5
      </div>
      <div
        id="six"
        onClick={(e) => handleClick(e)}
      >
        6
      </div>
      <div
        id="seven"
        onClick={(e) => handleClick(e)}
      >
        7
      </div>
      <div
        id="eight"
        onClick={(e) => handleClick(e)}
      >
        8
      </div>
      <div
        id="nine"
        onClick={(e) => handleClick(e)}
      >
        9
      </div>
    </>
  );
};

export default Board;