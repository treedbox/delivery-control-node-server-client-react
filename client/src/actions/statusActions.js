import { FETCH_STATUSES, FETCH_STATUS, NEW_STATUS, UPDATE_STATUSES } from "./";

export const fetchStatuses = () => dispatch =>
  fetch("/api/statuses")
    .then(res => res.json())
    .then(data =>
      dispatch({
        type: FETCH_STATUSES,
        payload: data
      })
    )
    .catch(error => console.log("ERROR:", error));

export const fetchStatus = id => dispatch =>
  fetch(`/api/statuses/${id}`)
    .then(res => res.json())
    .then(data =>
      dispatch({
        type: FETCH_STATUS,
        payload: data
      })
    )
    .catch(error => console.log("ERROR:", error));

export const createStatus = status => dispatch =>
  fetch("/api/statuses", {
    method: "POST",
    headers: {
      "content-type": "application/json"
    },
    body: JSON.stringify(status)
  })
    .then(res => res.json())
    .then(data =>
      dispatch({
        type: NEW_STATUS,
        payload: data
      })
    )
    .catch(error => console.log("ERROR:", error));

export const updateStatuses = statuses => dispatch => {
  return dispatch({
    type: UPDATE_STATUSES,
    payload: statuses
  });
};
