import React from 'react';

const Button = ({ text, onClick, type = 'button', className }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`font-medium rounded-lg text-sm px-5 py-2.5 text-center ${className}`}
    >
      {text}
    </button>
  );
};

export default Button;
