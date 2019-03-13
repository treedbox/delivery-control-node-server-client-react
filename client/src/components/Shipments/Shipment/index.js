import React from "react";
import "./style.css";
import Profile from "../../Profiles/Profile";
import Address from "../../Addresses/Address";
import Timeline from "../../Timeline";

const Shipment = ({
  shipment,
  user,
  nextStatus,
  togglebikersList,
  login,
  statuses
}) => (
  <article key={shipment.id} className="shipment">
    <h3>{shipment.number}</h3>
    <div className="shipment-status">
      <button
        className={"button_status " + shipment.status.type}
        onClick={
          login.role === "biker" && shipment.status.id !== 4
            ? () => nextStatus(shipment.id, shipment.status.id)
            : null
        }
        disabled={login.role === "manager" || shipment.status.id === 4}
      >
        {shipment.status.name}
      </button>
      <div
        className={"user " + (shipment.status.id === 1 && "allow_click")}
        onClick={
          shipment.status.id === 1 ? () => togglebikersList(shipment.id) : null
        }
      >
        <Profile
          user={user}
          hideAddresses={true}
          hideEmail={true}
          hideRole={true}
          folder="users"
          alt="Profile"
        />
      </div>
    </div>
    <details className="client">
      <summary>
        <strong>{shipment.client.name}</strong>
      </summary>
      <Profile
        user={shipment.client}
        hideAddresses={true}
        folder="clients"
        alt="Profile"
      />
    </details>
    <details className="client-address">
      <summary>
        {shipment.client_address.street_number}{" "}
        {shipment.client_address.street_name}
      </summary>
      <Address address={shipment.client_address} hideStreet={true} />
    </details>
    <details className="timeline">
      <summary>Timeline</summary>
      <Timeline timeline={shipment.timeline} statuses={statuses} />
    </details>
  </article>
);

export default Shipment;
