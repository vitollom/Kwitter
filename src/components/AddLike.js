import React, { useState } from "react";
import { addLike, messageList } from "../fetchRequests";
import { useStore, ADDLIKE } from "../store/store";

function AddLike(props) {
  const dispatch = useStore((state) => state.dispatch);

  const [formData, setFormData] = useState({
    like: {
      id: messageId,
      username: "string",
    },
    statusCode: 0,
  });
  const handleAddLike = (e) => {
    e.preventDefault();
    addLike(formData.messageId).then((userData) =>
      dispatch({ type: ADDLIKE, payload: userData })
    );
    setFormData({ username: "", displayName: "", password: "" });
  };
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
