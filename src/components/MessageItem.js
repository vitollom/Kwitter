import React from "react";
import { useStore } from "../store/store.js";
import { deleteMessage } from "../fetchRequests.js";
import { addLike } from "../fetchRequests.js";
import { removeLike } from "../fetchRequests.js";

function MessageItem(props) {
  const username = useStore((state) => state.user.username);
  const token = useStore((state) => state.user.token);
  const timestamp = new Date(props.createdAt);

  const handleDeleteMessage = () => {
    deleteMessage(props.id, token).then((res) => {
      if (res.statusCode === 200) {
        props.handleMessages();
      }
    });
  };

  let deleteButton;
  if (username === props.username) {
    deleteButton = (
      <button onClick={handleDeleteMessage}>Delete Message</button>
    );
  }

  const handleAddLike = (e) => {
    addLike(props.message.id, token);
    //Add .then to addLike fetch request
    //Inside of .then, dispatch addLike
  };

  const handleRemoveLike = (e) => {
    const alreadyLiked = props.likes.find((like) => {
      return like.username === username;
    });
    removeLike(alreadyLiked.id, token);
    //Add .then to removeLike fetch request
    //Inside of .then, dispatch removeLike
  };

  return (
    <li>
      Created @ {timestamp.toLocaleString()}
      &nbsp; By: {props.username}
      <br />
      {props.text}
      <br />
      Likes: {props.likes.length}
      &nbsp;
      {deleteButton}
      <button onClick={handleAddLike}>Like</button>
      <button onClick={handleRemoveLike}>Unlike</button>
    </li>
  );
}

export default MessageItem;
