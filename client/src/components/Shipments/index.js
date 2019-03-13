import React from "react";
import "./style.css";
import Shipment from "./Shipment";

const Shipments = ({
  list,
  users,
  target,
  value,
  nextStatus,
  togglebikersList,
  login,
  statuses
}) => {
  if (target && value >= 0) {
    return list.filter(e => e[target] === value).map(e => {
      const user = users.find(x => x.id === e.user_id);
      return (
        <Shipment
          key={e.id}
          shipment={e}
          user={user}
          nextStatus={nextStatus}
          togglebikersList={togglebikersList}
          login={login}
          statuses={statuses}
        />
      );
    });
  } else {
    return list.map(e => <Shipment e={e} />);
  }
};

export default Shipments;
