import React from 'react';
import './button.scss';

export const Button = ({
  type,
  label,
}) => (
  <button className="button" type={type}>
    {label}
  </button>
);
