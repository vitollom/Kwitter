import React, { useState } from "react";
import { loginRequest } from "../fetchRequests";
import { LOGIN, useStore } from "../store/store";
import CreateUser from "./CreateUser.js";
import { Form } from "react-bootstrap";

function Login(props) {
  const dispatch = useStore((state) => state.dispatch);
  const [errors, setErrors] = useState("");
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleLogin = (e) => {
    e.preventDefault();
    loginRequest(formData.username, formData.password).then((userData) => {
      if (userData.statusCode === 200) {
        return dispatch({ type: LOGIN, payload: userData });
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
      <Form onSubmit={handleLogin}>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Username</Form.Label>
          <Form.Control
            name="username"
            type="text"
            placeholder="Enter username"
            pattern=".{3,20}"
            title="Please enter a valid username between 3 and 20 characters."
            value={formData.username}
            autoFocus
            required
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            name="password"
            type="password"
            placeholder="Password"
            pattern=".{3,20}"
            title="Please enter a valid password between 3 and 20 characters."
            value={formData.password}
            required
            onChange={handleChange}
          />
        </Form.Group>

        <button variant="primary" type="submit">
          Submit
        </button>
      </Form>
      {errors}
      <CreateUser />
    </>
  );
}

export default Login;
