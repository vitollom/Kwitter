import React, { useState } from 'react'
import { useStore } from '../store/store.js'
import { updateRequest } from "../fetchRequests.js"

function UpdateUser() {
  let username = useStore((state) => state.user.username)
  let token = useStore((state) => state.user.token)
  console.log(token)

  const [formData, setFormData] = useState({
    password: "",
    about: "",
    displayName: ""
  });

  const handleUpdate = (e) => {
    e.preventDefault()
    updateRequest(token, username, formData)
    setFormData({
      password: "",
      about: "",
      displayName: ""
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
          value={formData.displayName}
          onChange={handleChange}
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
        <label htmlFor="about">About</label>
        <input
          type="text"
          name="about"
          value={formData.about}
          onChange={handleChange}
        />
        <button type="submit">Update</button>
      </form>
    </>
  )
}

export default UpdateUser
