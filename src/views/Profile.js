import React from "react";
import UpdateUser from "../components/UpdateUser.js";
import Menu from "../components/Menu.js";
import { Link } from 'react-router-dom';

function Profile() {
  return (
    <div>
      <Menu />
      <UpdateUser />
      <Link to='/delete-user'>Delete Your Account</Link>
    </div>
  );
}

export default Profile;
