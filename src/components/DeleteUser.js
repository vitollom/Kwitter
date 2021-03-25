import React, { useState } from "react";
import { deleteUser } from "../fetchRequests";
import { useStore, DELETE_USER } from "../store/store"
import { Button } from "react-bootstrap"

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
        setErrors(<div className="error">res.message</div>)
      }
    })
  }

  return (
    <div>
      <Button variant="danger" onClick={handleDelete}>Delete Account</Button>
      {errors}
    </div>
  )
}

export default DeleteUser;
