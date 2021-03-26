import React from "react";
import { useStore } from "../store/store.js";
import { deleteMessage } from "../fetchRequests.js";
import { addLike } from "../fetchRequests.js";
import { removeLike } from "../fetchRequests.js";
import { Card, Button } from "react-bootstrap"


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
      <Button variant="danger" className="delete-message" onClick={handleDeleteMessage}>Delete Message</Button>
    );
  }


  const handleAddLike = (e) => {
    addLike(props.message.id, token).then((res) => {
      if (res.statusCode === 200) {
        props.handleMessages();
        props.setRefresh(30);
      }
    });
  };
  
  const alreadyLiked = props.likes.find((like) => {
    return like.username === username;
  });

  const handleRemoveLike = (e) => {
    removeLike(alreadyLiked.id, token).then((res) => {
      if (res.statusCode === 200) {
        props.handleMessages();
        props.setRefresh(30);
      }
    });
  };

  let likeButton 
  if (alreadyLiked) {
    likeButton = <Button variant="outline-success" className="remove-like" onClick={handleRemoveLike}>Remove Like</Button>
  } else {
    likeButton = <Button className="like-button" onClick={handleAddLike}>Like</Button>
  }

  return (
    <li>
      <Card>
        <Card.Header className="card-header">{timestamp.toLocaleString()}</Card.Header>
        <Card.Body>
          <Card.Title>{`${props.username}:`}</Card.Title>
          <Card.Text>
            {props.text}
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
  );
}

export default MessageItem;
