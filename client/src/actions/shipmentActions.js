import {
  FETCH_SHIPMENTS,
  FETCH_SHIPMENT,
  NEW_SHIPMENT,
  UPDATE_SHIPMENTS
} from "./";

export const fetchShipments = () => dispatch =>
  fetch("/api/shipments")
    .then(res => res.json())
    .then(data =>
      dispatch({
        type: FETCH_SHIPMENTS,
        payload: data
      })
    )
    .catch(error => console.log("ERROR:", error));

export const fetchShipment = id => dispatch =>
  fetch(`/api/shipments/${id}`)
    .then(res => res.json())
    .then(data =>
      dispatch({
        type: FETCH_SHIPMENT,
        payload: data
      })
    )
    .catch(error => console.log("ERROR:", error));

export const createShipment = shipment => dispatch =>
  fetch("/api/shipments", {
    method: "POST",
    headers: {
      "content-type": "application/json"
    },
    body: JSON.stringify(shipment)
  })
    .then(res => res.json())
    .then(data =>
      dispatch({
        type: NEW_SHIPMENT,
        payload: data
      })
    )
    .catch(error => console.log("ERROR:", error));

export const updateShipments = shipments => dispatch => {
  return dispatch({
    type: UPDATE_SHIPMENTS,
    payload: shipments
  });
};
