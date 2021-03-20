import React, { useState } from "react";
import { createUser, loginRequest } from "../fetchRequests";

import { useStore, CREATEUSER } from "../store/store";

function CreateUser(props) {
  const dispatch = useStore((state) => state.dispatch);

  const [formData, setFormData] = useState({
    username: "",
    displayName: "",
    password: "",
  });

  const handleCreateUser = (e) => {
    e.preventDefault();
    createUser(
      formData.username,
      formData.displayName,
      formData.password
    ).then((userData) => dispatch({ type: CREATEUSER, payload: userData }));
    setFormData({ username: "", displayName: "", password: "" });
  };

  const handleChange = (e) => {
    const inputName = e.target.name;
    const inputValue = e.target.value;
    setFormData((state) => ({ ...state, [inputName]: inputValue }));
  };

  return (
    <>
      <form id="login-form" onSubmit={handleCreateUser}>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          name="username"
          value={formData.username}
          autoFocus
          required
          onChange={handleChange}
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          value={formData.password}
          required
          onChange={handleChange}
        />
        <label htmlFor="displayName">Display Name </label>
        <input
          type="displayName"
          name="displayName"
          value={formData.displayName}
          required
          onChange={handleChange}
        />
        <button type="submit"> Submit </button>
      </form>
    </>
  );
}

export default CreateUser;
