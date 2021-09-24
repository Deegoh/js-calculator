/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable no-console */
/* eslint-disable react/prop-types */
import React from 'react';

const Button = ({ id, children }) => (

  <div
    id={id}
    onClick={console.log('test')}
  >
    {children}
  </div>
);

export default Button;
