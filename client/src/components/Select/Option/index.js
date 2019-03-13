import React from "react";

const Option = ({ option }) => (
  <option value={option.value}>{option.text}</option>
);

export default Option;
