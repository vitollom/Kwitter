import React from "react";
import UpdateUser from "../components/UpdateUser.js";
import Menu from "../components/Menu.js";
import { Link } from 'react-router-dom';
import UploadPicture from "../components/UploadPicture"
import DeleteUser from "../components/DeleteUser";
import UserList from "../components/UserList.js";

function Profile() {
  return (
    <div>
      <Menu />
      <UpdateUser />
      <UploadPicture />
      <Link to='/delete-user'>Delete Your Account</Link>
      <UserList />
    </div>
  );
}

export default Profile;
