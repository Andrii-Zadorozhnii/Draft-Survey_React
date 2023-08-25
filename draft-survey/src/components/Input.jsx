import React from 'react';

const Input = (props) => {
  const { className, type, placeholder, value, onChange } = props;

  const inputStyle = {
    padding: '10px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    width: '100%',
    boxSizing: 'border-box',
  };

  return (
    <input
      className={className}
      type={type || 'text'}
      placeholder={placeholder || 'Enter something'}
      value={value}
      onChange={onChange}
      style={inputStyle}
    />
  );
};

export default Input;
