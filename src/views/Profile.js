import React from "react";
import Menu from "../components/Menu.js";
import DisplayUserPicture from "../components/DisplayUserPicture.js"
import UpdateUser from "../components/UpdateUser.js";
import { Link } from 'react-router-dom';
import UploadPicture from "../components/UploadPicture"

function Profile() {

  
  return (
    <div>
      <Menu />
      <DisplayUserPicture />
      <UpdateUser />
      <UploadPicture />
      <Link to='/delete-user'>Delete Your Account</Link>
    </div>
  );
}

export default Profile;
