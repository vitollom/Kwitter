import { useStore } from './store/store.js'
const baseURL = "https://socialapp-api.herokuapp.com/";

export const loginRequest = (username, password) => {
  return fetch(baseURL + "auth/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      username,
      password,
    }),
  })
    .then((res) => res.json())
};

export const logoutRequest = (token) => {
  return fetch(baseURL + "auth/logout", {
    headers: { Authorization: "Bearer " + token },
  }).then((res) => res.json());
};

export const updateUser = (currName, newName, displayName, password) => {
  return fetch(baseURL + currName, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      newName,
      displayName,
      password,
    }),
  })
    .then((res) => res.json())
}
