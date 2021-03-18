import React from 'react'
import { useStore } from '../store/store.js'
import { deleteMessage } from '../fetchRequests.js'

function MessageItem(props) {
  const username = useStore((state) => state.user.username)
  const token = useStore((state) => state.user.token)
  const timestamp = new Date(props.createdAt)

  
  const handleDeleteMessage = () => {
    deleteMessage(props.id, token).then((res) => {
      if (res.statusCode === 200) {
        props.handleMessages()
      }
    })
  }
  
  let deleteButton
  if (username === props.username) {
    deleteButton = <button onClick={handleDeleteMessage}>Delete Message</button>
  }
  
  return (
    <li>
      Created @ {timestamp.toLocaleString()}
      &nbsp;
      By: {props.username}
      <br/>
      {props.text}
      <br/>
      Likes: {props.likes.length}
      &nbsp;
      {deleteButton}
    </li>
  )
}

export default MessageItem