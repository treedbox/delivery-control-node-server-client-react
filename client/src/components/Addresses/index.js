import React from "react";
import "./style.css";
import Address from "./Address";

const Addresses = ({ addresses }) => (
  <div className="addresses">
    <h5>Addresses</h5>
    <div className="addresses-list">
      {addresses.map(e => (
        <Address key={e.id} address={e} />
      ))}
    </div>
  </div>
);

export default Addresses;
