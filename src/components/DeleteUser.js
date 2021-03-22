import React from "react";
import { deleteUser } from "../fetchRequests";
import { useStore } from "../store/store";

function DeleteUser(props) {
  const username = useStore((state) => state.user.username);
  const token = useStore((state) => state.user.token);

  const handleDelete = () => {
    deleteUser(username, token);
  };

  return (
    <div>
      <button onClick={handleDelete}>Delete User</button>
    </div>
  )
}

export default DeleteUser;
