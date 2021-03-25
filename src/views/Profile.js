import React from "react";
import UpdateUser from "../components/UpdateUser.js";
import Menu from "../components/Menu.js";
import UploadPicture from "../components/UploadPicture"
import DeleteUser from "../components/DeleteUser";

function Profile() {
  return (
    <div>
      <Menu />
      <UpdateUser />
      <UploadPicture />
      <DeleteUser />
    </div>
  );
}

export default Profile;
