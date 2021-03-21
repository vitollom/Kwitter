const baseURL = "https://socialapp-api.herokuapp.com/";
// const backupURL = "https://kwitter-api-b.herokuapp.com/";

export const loginRequest = (username, password) => {
  return fetch(baseURL + "auth/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      username,
      password,
    }),
  }).then((res) => res.json());
};

export const logoutRequest = (token) => {
  return fetch(baseURL + "auth/logout", {
    headers: { Authorization: "Bearer " + token },
  }).then((res) => res.json());
};

export const getUser = (username) => {
  return fetch(baseURL + "users/" + username, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  }).then((res) => res.json());
};

export const updateRequest = (token, username, updateData) => {
  return fetch(baseURL + "users/" + username, {
    method: "PATCH",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(updateData),
  }).then((res) => res.json());
};

export const messageList = () => {
  return fetch(baseURL + "messages?limit=100", {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  }).then((res) => res.json());
};

export const createUser = (username, displayName, password) => {
  return fetch(baseURL + "users", {
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
  return fetch(baseURL + "messages/" + messageId, {
    method: "DELETE",
    headers: { Authorization: "Bearer " + token },
  }).then((res) => res.json());
};

export const deleteUser = (username, token) => {
  return fetch(baseURL + "users/" + username, {
    method: "DELETE",
    headers: { Authorization: "Bearer " + token },
}).then((res) => res.json());
};

export const createMessage = (message, token) => {
  console.log(message)
  return fetch(baseURL + "messages", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + token,
    }, 
    body: JSON.stringify({ text: message }),
  }).then((res) => res.json());
};
  
