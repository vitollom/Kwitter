import React from 'react'
import { useStore } from '../store/store.js'
import { deleteMessage } from '../fetchRequests.js'
import { Card } from "react-bootstrap"

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
      <Card>
        <Card.Header>Created @ {timestamp.toLocaleString()}</Card.Header>
        <Card.Body>
          <Card.Title>By: {props.username}</Card.Title>
          <Card.Text>
            <p class="card-text">{props.text}</p>
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          Likes: {props.likes.length}
          {deleteButton}
        </Card.Footer>
      </Card>
    </li>
  )
}

export default MessageItem