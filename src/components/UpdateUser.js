import React, { useState, useEffect } from 'react'
import { useStore, GET_USER } from '../store/store.js'
import { updateRequest, getUser } from "../fetchRequests.js"
import '../assets/index.css'

function UpdateUser() {
  const username = useStore((state) => state.user.username)
  const token = useStore((state) => state.user.token)
  const userInfo = useStore((state) => state.loggedInUser.user)
  const dispatch = useStore((state) => state.dispatch)
  const [errors, setErrors] = useState("")
  const [formData, setFormData] = useState({
    password: "",
    about: "",
    displayName: ""
  });

  console.log(userInfo)

  const getUserInfo = () => {
    username && getUser(username)
      .then((userData) =>
        dispatch({ type: GET_USER, payload: userData })
      );
  };

  useEffect(() => {
    getUserInfo()
    return () => getUserInfo()
  }, [])

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
          getUserInfo()
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
