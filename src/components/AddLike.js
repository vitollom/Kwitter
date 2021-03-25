import React, { useState } from "react";
import { addLike, messageList } from "../fetchRequests";
import { useStore, ADDLIKE } from "../store/store";

function addLike(props) {
  const dispatch = useStore((state) => state.dispatch);
  const messages = useStore((state) => state.messageData);
  const user = useStore((state) => state.userData);

  const handleAddLike = (e) => {
    e.preventDefault();
    addLike(user.token).then((userData) =>
      dispatch({ type: ADDLIKE, payload: userData })
    );
  };
  console.log(messages);
  return (
    <Button
      content="Like"
      icon="heart"
      label={{ as: "a", basic: true, content: messageId }}
      labelPosition="right"
      style={{ float: "left" }}
      color="red"
      onClick={() => handleAddLike()}
    />
  );
}
