import React from 'react'
import Menu from '../components/Menu.js'
import DeleteUser from "../components/DeleteUser.js"

function DeleteUserPage(props) {
  return (
    <>
      <Menu />
      <p>Are you sure you want to delete your account? This process cannot be reversed.</p>
      <DeleteUser />
    </>
  )
}

export default DeleteUserPage
