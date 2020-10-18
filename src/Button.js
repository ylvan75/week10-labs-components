import React from 'react';

export const Button = ({ className, text }) => {
  return (
    <button type="button" className={`button ${className}`} value={text}>
      {text}
    </button>
  );
};
