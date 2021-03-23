import React, { useState } from "react";
import { createUser } from "../fetchRequests";

function CreateUser(props) {
  const [errors, setErrors] = useState("")
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
    ).then(res => {
      if (res.statusCode !== 200) {
        setErrors(`${res.message}, please try again`)
      } else {
        setFormData({ username: "", displayName: "", password: "" });
        setErrors(`You have successfully created a user: ${res.user.username}!`)
      }
    })
  };

  const handleChange = (e) => {
    const inputName = e.target.name;
    const inputValue = e.target.value;
    setFormData((state) => ({ ...state, [inputName]: inputValue }));
  };

  return (
    <>
      <h3>New to Kwitter!? Sign Up Here: </h3>
      <form id="login-form" onSubmit={handleCreateUser}>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          name="username"
          pattern=".{3,20}"   
          title="Please enter a username between 3 and 20 characters long"
          value={formData.username}
          autoFocus
          required
          onChange={handleChange}
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          pattern=".{3,20}"   
          title="Please enter a password between 3 and 20 characters long"
          value={formData.password}
          required
          onChange={handleChange}
        />
        <label htmlFor="displayName">Display Name </label>
        <input
          type="displayName"
          name="displayName"
          pattern=".{3,20}"   
          title="Please enter a display name between 3 and 20 characters long"
          value={formData.displayName}
          required
          onChange={handleChange}
        />
        <button type="submit"> Submit </button>
      </form>
      {errors}
    </>
  );
}

export default CreateUser;
