import React, { useState, useEffect } from 'react'
import { useStore, GETUSER } from '../store/store.js'
import { updateRequest, getUser } from "../fetchRequests.js"

function UpdateUser() {
  const username = useStore((state) => state.user.username)
  const token = useStore((state) => state.user.token)
  const userInfo = useStore((state) => state.loggedInUser.user)
  const dispatch = useStore((state) => state.dispatch)
  

  const [formData, setFormData] = useState({
    password: "",
    about: "",
    displayName: ""
  });

  console.log(userInfo)

  const getUserInfo = () => {
      username && getUser(username)
        .then((userData) =>
          dispatch({ type: GETUSER, payload: userData })
        );
  };

  useEffect(() => {
    getUserInfo()
    return () => getUserInfo()
  }, [])

  const handleUpdate = (e) => {
    e.preventDefault()
    const updateData = {}
    if (formData.password.length > 3) {
      updateData.password = formData.password
    } if (formData.about.length > 0) {
      updateData.about = formData.about
    } if (formData.displayName.length > 3) {
      updateData.displayName = formData.displayName
    }
    updateRequest(token, username, updateData)
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
          placeholder={userInfo && userInfo.displayName}
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
          placeholder={userInfo && userInfo.about}
          value={formData.about}
          onChange={handleChange}
        />
        <button type="submit">Update</button>
      </form>
    </>
  )
}

export default UpdateUser
