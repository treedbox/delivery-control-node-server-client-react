import React from "react";

const Input = ({ attr, handleChange }) => {
  const { label, type, name, value, placeholder, required } = attr;
  return (
    <label>
      {label}:
      <input
        name={name}
        type={type}
        value={value}
        placeholder={placeholder}
        required={required}
        onChange={handleChange}
      />
    </label>
  );
};

export default Input;
