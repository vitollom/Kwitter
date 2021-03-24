import React, { useState } from 'react'
import { uploadPicture } from '../fetchRequests.js'
import { useStore } from "../store/store.js"

function UploadPicture(props) {
  const username = useStore((state) => state.user.username)
  const token = useStore((state) => state.user.token)
  const [picture, setPicture] = useState('')
  const [errors, setErrors] = useState('')

  const handleUpload = (e) => {
    uploadPicture(username, token, picture).then((res) => {
      if (res.statusCode === 200) {
        props.getUserInfo()
        setErrors("You have successfully updated your profile picture.")
        setPicture('')
      } else {
        setErrors(res.message)
      }
    })
  }

  return (
    <div>
      <button onClick={handleUpload} >Upload Picture</button>
      <input type="file" onChange={(e) => setPicture(e.target.files[0])} />
      <>Please choose a picture that is 200KB or less in size.</>
      <br/>
      {errors}
    </div>
  )
}

export default UploadPicture