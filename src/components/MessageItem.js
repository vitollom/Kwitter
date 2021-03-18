import React from 'react'
import { useStore, GETMESSAGES } from '../store/store.js'
import { deleteMessage, messageList } from '../fetchRequests.js'

function MessageItem(props) {
  const username = useStore((state) => state.user.username)
  const token = useStore((state) => state.user.token)
  const dispatch = useStore((state) => state.dispatch)
  const timestamp = new Date(props.createdAt)

  const handleMessages = () => {
    messageList().then((messageData) =>
      dispatch({ type: GETMESSAGES, payload: messageData })
    );
  };
  
  const handleDeleteMessage = (e) => {
    // e.preventDefault()
    deleteMessage(props.id, token).then((res) => {
      if (res.statusCode === 200) {
        handleMessages()
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