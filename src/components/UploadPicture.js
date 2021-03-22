import React, { useState } from 'react'
import { uploadPicture } from '../fetchRequests.js'
import { useStore } from "../store/store.js"

function UploadPicture(props) {
  const username = useStore((state) => state.user.username)
  const token = useStore((state) => state.user.token)
  const [picture, setPicture] = useState('')

  const handleUpload = (e) => {
    uploadPicture(username, token, picture).then((res) => {
      if (res.statusCode !== 200) {
        console.log(res)
      } else {
        console.log(res)
      }
    })
  }

  return (
    <div>
      <button onClick={handleUpload} >Upload Picture</button>
      <input type="file" onChange={(e) => setPicture(e.target.files[0])} />
    </div>
  )
}

export default UploadPicture