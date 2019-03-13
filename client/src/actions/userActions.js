import { FETCH_USERS, FETCH_USER, NEW_USER, UPDATE_USERS } from "./";

export const fetchUsers = () => dispatch =>
  fetch("/api/users")
    .then(res => res.json())
    .then(data =>
      dispatch({
        type: FETCH_USERS,
        payload: data
      })
    )
    .catch(error => console.log("ERROR:", error));

export const fetchUser = id => dispatch =>
  fetch(`/api/users/${id}`)
    .then(res => {
      console.log(`fetchUser res:`, res);
      return res.json();
    })
    .then(data =>
      dispatch({
        type: FETCH_USER,
        payload: data
      })
    )
    .catch(error => console.log("ERROR:", error));

export const createUser = user => dispatch =>
  fetch("/api/users", {
    method: "POST",
    headers: {
      "content-type": "application/json"
    },
    body: JSON.stringify(user)
  })
    .then(res => res.json())
    .then(data =>
      dispatch({
        type: NEW_USER,
        payload: data
      })
    )
    .catch(error => console.log("ERROR:", error));

export const updateUsers = users => dispatch => {
  return dispatch({
    type: UPDATE_USERS,
    payload: users
  });
};
