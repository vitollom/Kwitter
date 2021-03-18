import React from 'react'

function MessageItem(props) {
  const timestamp = new Date(props.createdAt)
  
  return (
    <li>
      Created @ {timestamp.toLocaleString()}
      &nbsp;
      By: {props.username}
      <br/>
      {props.text}
      <br/>
      Likes: {props.likes.length}
    </li>
  )
}

export default MessageItem
