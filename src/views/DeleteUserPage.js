import React from 'react'
import Menu from '../components/Menu.js'
import DeleteUser from "../components/DeleteUser.js"

function DeleteUserPage(props) {
  return (
    <div>
      <Menu />
      <div className="delete-user">
        <p>Are you sure you want to delete your account? This process cannot be reversed.</p>
        <DeleteUser />
      </div>
    </div>
  )
}

export default DeleteUserPage
