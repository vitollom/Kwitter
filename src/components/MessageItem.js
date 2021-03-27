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
        props.setRefresh(30)
      }
    })
  }

  let deleteButton
  if (username === props.username) {
    deleteButton = <button onClick={handleDeleteMessage}>Delete Message</button>
  }

  let likeButton = <button>Like</button> //No functionalliy, just for styling purposes.

  return (
    <li>
      <Card>
        <Card.Header>Created @ {timestamp.toLocaleString()}</Card.Header>
        <Card.Body>
          <Card.Title>{`${props.username}:`}</Card.Title>
          <Card.Text>
            <p class="card-text">{props.text}</p>
          </Card.Text>
        </Card.Body>
        <Card.Footer className="card-footer">
          <span>
            {likeButton}
          &nbsp;
          Likes: {props.likes.length}
          </span>
          {deleteButton}
        </Card.Footer>
      </Card>
    </li>
  )
}

export default MessageItem