import React from "react";
import { useStore } from "../store/store.js";
import { deleteMessage } from "../fetchRequests.js";
import { addLike } from "../fetchRequests.js";
import { removeLike } from "../fetchRequests.js";
import { Card } from "react-bootstrap"


function MessageItem(props) {
  const username = useStore((state) => state.user.username);
  const token = useStore((state) => state.user.token);
  const timestamp = new Date(props.createdAt);

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
    deleteButton = (
      <button onClick={handleDeleteMessage}>Delete Message</button>
    );
  }


  const handleAddLike = (e) => {
    addLike(props.message.id, token).then((res) => {
      if (res.statusCode === 200) {
        props.handleMessages();
      }
    });
  };

  const handleRemoveLike = (e) => {
    const alreadyLiked = props.likes.find((like) => {
      return like.username === username;
    });
    removeLike(alreadyLiked.id, token).then((res) => {
      if (res.statusCode === 200) {
        props.handleMessages();
      }
    });
  };

  return (
    <li>
      <Card>
        <Card.Header className="card-header">{timestamp.toLocaleString()}</Card.Header>
        <Card.Body>
          <Card.Title>{`${props.username}:`}</Card.Title>
          <Card.Text>
            <p class="card-text">{props.text}</p>
          </Card.Text>
        </Card.Body>
        <Card.Footer className="card-footer">
          <span>
             <button onClick={handleAddLike}>Like</button>
             <button onClick={handleRemoveLike}>Unlike</button>
          &nbsp;
          Likes: {props.likes.length}
          </span>
          {deleteButton}
        </Card.Footer>
      </Card>
    </li>
  );
}

export default MessageItem;
