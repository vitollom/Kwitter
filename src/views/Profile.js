import React from "react";
import Menu from "../components/Menu.js";
import DisplayUserPicture from "../components/DisplayUserPicture.js"
import UpdateUser from "../components/UpdateUser.js";
import UploadPicture from "../components/UploadPicture"
import DeleteUser from "../components/DeleteUser";

function Profile() {

  
  return (
    <div>
      <Menu />
      <DisplayUserPicture />
      <UpdateUser />
      <UploadPicture />
      <DeleteUser />
    </div>
  );
}

export default Profile;
