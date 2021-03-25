import React, { useEffect } from "react";
import { useStore, GET_USER } from "../store/store.js";
import { getUser } from "../fetchRequests.js"
import Menu from "../components/Menu.js";
import DisplayUserPicture from "../components/DisplayUserPicture.js"
import UpdateUser from "../components/UpdateUser.js";
import UploadPicture from "../components/UploadPicture"
import { Link } from 'react-router-dom';
import UserList from "../components/UserList.js";


function Profile() {
  const username = useStore((state) => state.user.username)
  const dispatch = useStore((state) => state.dispatch)

  const getUserInfo = () => {
    username && getUser(username)
      .then((userData) =>
        dispatch({ type: GET_USER, payload: userData })
      );
  };

  useEffect(() => {
    getUserInfo()
    return () => getUserInfo()
  }, [])

  return (
    <div>
      <Menu />
      <DisplayUserPicture />
      <UpdateUser getUserInfo={getUserInfo} />
      <UploadPicture getUserInfo={getUserInfo} />
      <Link to='/delete-user'>Delete Your Account</Link>
      <UserList />
    </div>
  );
}

export default Profile;
