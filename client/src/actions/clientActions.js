import { FETCH_CLIENTS, FETCH_CLIENT, NEW_CLIENT, UPDATE_CLIENTS } from "./";

export const fetchClients = () => dispatch =>
  fetch("/api/clients")
    .then(res => res.json())
    .then(data =>
      dispatch({
        type: FETCH_CLIENTS,
        payload: data
      })
    )
    .catch(error => console.log("ERROR:", error));

export const fetchClient = id => dispatch =>
  fetch(`/api/clients/${id}`)
    .then(res => res.json())
    .then(data =>
      dispatch({
        type: FETCH_CLIENT,
        payload: data
      })
    )
    .catch(error => console.log("ERROR:", error));

export const createClient = client => dispatch =>
  fetch("/api/clients", {
    method: "POST",
    headers: {
      "content-type": "application/json"
    },
    body: JSON.stringify(client)
  })
    .then(res => res.json())
    .then(data =>
      dispatch({
        type: NEW_CLIENT,
        payload: data
      })
    )
    .catch(error => console.log("ERROR:", error));

export const updateClients = clients => dispatch => {
  return dispatch({
    type: UPDATE_CLIENTS,
    payload: clients
  });
};
