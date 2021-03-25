import React, { useState } from "react";
import { useStore } from "../store/store";
import { createMessage } from "../fetchRequests";
import '../assets/index.css'

function CreateMessage(props) {
  const token = useStore((state) => state.user.token);
  const [userText, setUserText] = useState("");

  const createNewMessage = (e) => {
    createMessage(userText, token).then((res) => {
      if (res.statusCode === 200) {
        props.handleMessages()
        props.setRefresh(30)
      }
    })
    setUserText("");
  };

  const handlechange = (e) => {
    setUserText(e.target.value);
  };

  return (
    <div className="CreateMessage" >
      <label htmlFor="new-message">New Message</label>
      &nbsp;
      <input
        className="new-message-input"
        type="text"
        value={userText}
        onChange={handlechange}
      />
      &nbsp;
      <button onClick={createNewMessage}>Post</button>
    </div>
  )
};

export default CreateMessage;
