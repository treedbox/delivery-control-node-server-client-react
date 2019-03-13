import { FETCH_LOGIN, REMOVE_LOGIN } from "./";

export const fetchLogin = user => dispatch =>
  fetch("/api/login", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify(user)
  })
    .then(res => {
      if (res.ok) {
        return res.json();
      } else {
        throw Error(`Request rejected with status ${res.status}`);
      }
    })
    .then(data =>
      dispatch({
        type: FETCH_LOGIN,
        payload: data
      })
    )
    .catch(error => console.log("ERROR:", error));

export const removeLogin = () => dispatch =>
  dispatch({
    type: REMOVE_LOGIN,
    payload: {}
  });
