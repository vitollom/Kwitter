import React, { useState, useEffect } from 'react'
import { useStore } from '../store/store.js'
import { updateRequest } from "../fetchRequests.js"
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

    updateRequest(token, username, updateData)
      .then(res => {
        if (res.statusCode === 200) {
          setFormData({
            password: "",
            about: "",
            displayName: ""
          })
          setErrors('You have successfully updated your account!')
          props.getUserInfo()
        }
        else {
          setErrors(res.message)
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
      <form id="update-user-form" onSubmit={handleUpdate}>
        <label htmlFor="displayName">Display Name</label>
        <input
          type="text"
          name="displayName"
          pattern=".{3,20}"
          title="Please enter a display name between 3 and 20 characters long"
          placeholder={userInfo && userInfo.displayName}
          value={formData.displayName}
          onChange={handleChange}
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          pattern=".{3,20}"
          title="Please enter a password between 3 and 20 characters long"
          value={formData.password}
          onChange={handleChange}
        />
        <label htmlFor="about">About</label>
        <input
          type="text"
          name="about"
          pattern=".{0,255}"
          placeholder={userInfo && userInfo.about}
          value={formData.about}
          onChange={handleChange}
        />
        {`${formData.about.length}/255`}
        <button type="submit">Update</button>
      </form>
      {errors}
    </>
  )
}

export default UpdateUser
