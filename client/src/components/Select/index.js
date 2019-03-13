import React from "react";
import Option from "./Option";
import "./style.css";

const Select = ({ id, value, handleSelect, options }) => (
  <select
    className={"select " + value}
    id={id}
    value={value}
    onChange={handleSelect}
  >
    {options.map(e => (
      <Option key={e.id} option={e} />
    ))}
  </select>
);

export default Select;
