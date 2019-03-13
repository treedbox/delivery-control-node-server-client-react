import React from "react";
import "./style.css";

const Address = ({ address, hideStreet, hideState, hideCountry }) => (
  <div className="address">
    {!hideStreet && (
      <p>
        <strong>
          {address.street_number} {address.street_name}
        </strong>
      </p>
    )}
    {!hideState && (
      <p>
        {address.state_full} {address.state} {address.zipcode}
      </p>
    )}
    {!hideCountry && (
      <p>
        {address.city} {address.country}
      </p>
    )}
  </div>
);

export default Address;
