import React from 'react'
import { useStore } from '../store/store.js';

function DisplayUserPicture() {
  const baseURL = "https://socialapp-api.herokuapp.com";
  const userInfo = useStore((state) => state.loggedInUser.user)

  let imageURL
  if (userInfo) {
    imageURL = baseURL + userInfo.pictureLocation
  }

  console.log(imageURL)

  return (
    <img src={imageURL} />
  )
}

export default DisplayUserPicture
