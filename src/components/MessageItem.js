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
      <div class="card">
        <div class="card-header">
          Created @ {timestamp.toLocaleString()}
        </div>
        <div class="card-body">
          <h5 class="card-title">By: {props.username}</h5>
          <p class="card-text">{props.text}</p>
        </div>
        <div class="card-footer">
          Likes: {props.likes.length}
          {deleteButton}
        </div>
      </div>
    </li>
  )
}

export default MessageItem