import React, { useState, useEffect } from 'react'
import { useStore } from '../store/store.js'
import { updateRequest } from "../fetchRequests.js"
import { Form, Button } from "react-bootstrap"
import '../assets/index.css'

function UpdateUser(props) {
  const username = useStore((state) => state.user.username)
  const token = useStore((state) => state.user.token)
  const userInfo = useStore((state) => state.loggedInUser.user)
  const [errors, setErrors] = useState("")
  const [formData, setFormData] = useState({
    password: "",
    about: "",
    displayName: ""
  });

  const handleUpdate = (e) => {
    e.preventDefault()
    const updateData = {}
    if (formData.password) {
      updateData.password = formData.password
    } if (formData.about.length > 0) {
      updateData.about = formData.about
    } if (formData.displayName) {
      updateData.displayName = formData.displayName
    }

    console.log(Object.keys(updateData).length)

    if (Object.keys(updateData).length === 0) {
      setErrors(<div className="error">Please update one of the above fields.</div >)
    } else {
      updateRequest(token, username, updateData)
        .then(res => {
          if (res.statusCode === 200) {
            setFormData({
              password: "",
              about: "",
              displayName: ""
            })
            setErrors(<div className="success">You have successfully updated your account!</div>)
            props.getUserInfo()
          }
          else {
            setErrors(<div className="error">res.message</div>)
          }
        })
    }
  };

  const handleChange = (e) => {
    const inputName = e.target.name;
    const inputValue = e.target.value;
    setFormData((state) => ({ ...state, [inputName]: inputValue }));
  };

  return (
    <>
      <h2>Update User</h2>
      <Form className="update-user-form" onSubmit={handleUpdate}>
        <Form.Group controlId="displayName">
          <Form.Label>Display Name</Form.Label>
          <Form.Control
            type="text"
            name="displayName"
            pattern=".{3,20}"
            title="Please enter a display name between 3 and 20 characters long"
            placeholder={userInfo && userInfo.displayName}
            value={formData.displayName}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            pattern=".{3,20}"
            title="Please enter a password between 3 and 20 characters long"
            value={formData.password}
            onChange={handleChange}
          />
          <Form.Text className="text-muted">
            Please only enter text you wish to be your new password.
          </Form.Text>
        </Form.Group>

        <Form.Group controlId="About">
          <Form.Label>About</Form.Label>
          <Form.Control
            type="text"
            name="about"
            pattern=".{0,255}"
            placeholder={userInfo && userInfo.about}
            value={formData.about}
            onChange={handleChange}
          />
          <Form.Text className="text-muted">
            {`${formData.about.length}/255`}
          </Form.Text>
        </Form.Group>

        <Button variant="primary" size="md" type="submit" >Submit</Button>
      </Form>
      {errors}
    </>
  )
}

export default UpdateUser
