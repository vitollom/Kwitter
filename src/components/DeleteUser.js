import React, { useState } from "react";
import { deleteUser } from "../fetchRequests";
import { useStore, DELETE_USER } from "../store/store"

function DeleteUser(props) {
  const username = useStore((state) => state.user.username);
  const token = useStore((state) => state.user.token);
  const dispatch = useStore((state) => state.dispatch)

  const [errors, setErrors] = useState("")

  const handleDelete = () => {
    deleteUser(username, token).then((res) => {
      if (res.statusCode === 200) {
        setErrors('')
        return dispatch({ type: DELETE_USER })
      } else {
        setErrors(res.message)
      }
    })
  }

  return (
    <div>
      <button onClick={handleDelete}>Delete Account</button>
      {errors}
    </div>
  )
}

export default DeleteUser;
