import React from 'react';


const Input = ({name, onChange, value}) => {
  return (
    <input
      type="text"
      name={name}
      onChange={onChange}
      value={value}
    />
  );
};

export default Input;