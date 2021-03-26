import React, { useState } from "react";
import { createUser } from "../fetchRequests";
import { Form } from "react-bootstrap";

function CreateUser(props) {
  const [errors, setErrors] = useState("");
  const [formData, setFormData] = useState({
    username: "",
    displayName: "",
    password: "",
  });

  const handleCreateUser = (e) => {
    e.preventDefault();
    createUser(formData.username, formData.displayName, formData.password).then(
      (res) => {
        if (res.statusCode !== 200) {
          setErrors(<div className="error">{res.message}, please try again</div>);
        } else {
          setFormData({ username: "", displayName: "", password: "" });
          setErrors(
            <div className="success">You have successfully created a user: {res.user.username}!</div>
          );
        }
      }
    );
  };

  const handleChange = (e) => {
    const inputName = e.target.name;
    const inputValue = e.target.value;
    setFormData((state) => ({ ...state, [inputName]: inputValue }));
  };

  return (
    <>
      <h3>New to kwitter? Sign up here:</h3>
      <Form onSubmit={handleCreateUser}>
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

        <Form.Group controlId="formBasicDisplayName">
          <Form.Label>Display Name</Form.Label>
          <Form.Control
            name="displayName"
            type="displayName"
            placeholder="displayName"
            pattern=".{3,20}"
            title="Please enter a valid password between 3 and 20 characters."
            value={formData.displayName}
            required
            onChange={handleChange}
          />
        </Form.Group>

        <button type="submit"> Submit </button>
      </Form>
      {errors}
    </>
  );
}

export default CreateUser;
