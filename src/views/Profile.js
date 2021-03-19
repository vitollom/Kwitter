import React from "react";
import UpdateUser from "../components/UpdateUser.js";
import Menu from "../components/Menu.js";
import DeleteUser from "../components/DeleteUser";

function Profile() {
  return (
    <div>
      <Menu />
      <UpdateUser />
      <DeleteUser />
    </div>
  );
}

export default Profile;
