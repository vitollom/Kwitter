import React from 'react'
import { useStore } from '../store/store.js';

function DisplayUserPicture() {
  const baseURL = "https://socialapp-api.herokuapp.com";
  const userInfo = useStore((state) => state.loggedInUser.user)

  let userImage
  if (userInfo) {
    userImage = <img className="user-picture" src={baseURL + userInfo.pictureLocation} />
  } else {
    userImage = "Loading..."
  }

  return (
    <>
    {userImage}
    </>
  )
}

export default DisplayUserPicture
