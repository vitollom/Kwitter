import React, { useState } from "react";
import { loginRequest } from "../fetchRequests";
import { LOGIN, useStore } from "../store/store";
import CreateUser from "./CreateUser.js"

function Login(props){
  const dispatch = useStore((state) => state.dispatch);
  const [errors, setErrors] = useState("")
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleLogin = (e) => {
    e.preventDefault();
    loginRequest(formData.username, formData.password)
    .then((userData) => {
      if (userData.statusCode === 200) {
        return dispatch({ type: LOGIN, payload: userData })
      } else {
        setErrors(<div className="error">{userData.message}, please try again.</div>)
      }
    });
  };

  const handleChange = (e) => {
    const inputName = e.target.name;
    const inputValue = e.target.value;
    setFormData((state) => ({ ...state, [inputName]: inputValue }));
  };

  return (
    <>
    <h2>Your favorite microblogging platform</h2>
      <form id="login-form" onSubmit={handleLogin}>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          name="username"
          pattern=".{3,20}"   
          title="Please enter a valid username between 3 and 20 characters."
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
          title="Please enter a valid password between 3 and 20 characters."
          value={formData.password}
          required
          onChange={handleChange}
        />
        <button type="submit">Login</button>
      </form>
      {errors}
      <CreateUser />
    </>
  );
};

export default Login;
