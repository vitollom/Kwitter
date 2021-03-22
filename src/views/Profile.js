import React from "react";
import UpdateUser from "../components/UpdateUser.js";
import Menu from "../components/Menu.js";
import { Link } from 'react-router-dom';
import UploadPicture from "../components/UploadPicture"
import DeleteUser from "../components/DeleteUser";

function Profile() {
  return (
    <div>
      <Menu />
      <UpdateUser />
      <UploadPicture />
      <Link to='/delete-user'>Delete Your Account</Link>
    </div>
  );
}

export default Profile;
