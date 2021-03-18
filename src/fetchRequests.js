const backupURL = "https://kwitter-api-b.herokuapp.com/"
const baseURL = "https://socialapp-api.herokuapp.com/";


export const loginRequest = (username, password) => {
  return fetch(backupURL + "auth/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      username,
      password,
    }),
  }).then((res) => res.json());
};

export const logoutRequest = (token) => {
  return fetch(backupURL + "auth/logout", {
    headers: { Authorization: "Bearer " + token },
  }).then((res) => res.json());
};

export const messageList = () => {
  return fetch(backupURL + "messages?limit=100", {
    method: "GET",
    headers: {"Content-Type": "application/json"},
  }).then((res) => res.json());
}

export const createUser = (username, displayName, password) => {
  return fetch(backupURL + "users", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      username,
      displayName,
      password,
    }),
  }).then((res) => res.json());
};

export const deleteMessage = (messageId, token) => {
  return fetch(backupURL + "messages/" + messageId, {
    method: "DELETE",
    headers: { Authorization: "Bearer " + token },
  }).then((res) => res.json())
}