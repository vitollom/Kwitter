import React, { useState } from 'react'
import { uploadPicture } from '../fetchRequests.js'
import { useStore } from "../store/store.js"
import { Form, Button } from "react-bootstrap"

function UploadPicture(props) {
  const username = useStore((state) => state.user.username)
  const token = useStore((state) => state.user.token)
  const [picture, setPicture] = useState('')
  const [errors, setErrors] = useState('Please choose a picture that is 200KB or less in size.')

  const handleUpload = (e) => {
    e.preventDefault()
    uploadPicture(username, token, picture).then((res) => {
      if (res.statusCode === 200) {
        props.getUserInfo()
        setErrors(<div className="success">You have successfully updated your profile picture.</div>)
        setPicture('')
      } else {
        setErrors(<div className="error">Something went wrong, make sure your file is 200KB or less and try again. Error: {res.message}.</div>)
      }
    })
  }

  return (
    <Form className="update-picture-form" onSubmit={handleUpload}>
      <Form.Group>
        <Form.File id="photo-uploader" label={errors} onChange={(e) => setPicture(e.target.files[0])} />
      </Form.Group>
      <Form.Group>
        <Button variant="primary" active={false} type="submit">Upload Picture</Button>
      </Form.Group>
    </Form>
  )
}

export default UploadPicture