import React from 'react';
import { Tooltip } from './Tooltip';

export const Button = ({ className, text }) => {
  return (
    <button
      type="button"
      className={`tooltip button ${className}`}
      value={text}>
      {text}
      <Tooltip className="tooltiptext" tooltiptext="Another tooltip!" />
    </button>
  );
};
