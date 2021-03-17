const baseURL = "https://socialapp-api.herokuapp.com/";
const backupURL = "https://kwitter-api-b.herokuapp.com/"

export const loginRequest = (username, password) => {
  return fetch(backupURL + "auth/login", {
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
  return fetch(backupURL + "auth/logout", {
    headers: { Authorization: "Bearer " + token },
  }).then((res) => res.json());
};

export const updateRequest = (token, username, formData) => {
  return fetch(backupURL + "users/" + username, {
    method: "PATCH",
    headers: { Authorization: `Bearer ${token}`, 
              "Content-Type": "application/json" },
    body: JSON.stringify(
      formData
    ),
  })
    .then((res) => res.json())
}