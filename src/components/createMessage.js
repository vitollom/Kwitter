import React, { useEffect, useState } from "react";
import { useStore, CREATEMESSAGE, GETMESSAGES } from "../store/store";
import { createMessage, messageList } from "../fetchRequests";

function CreateMessage(props) {
  const dispatch = useStore((state => state.dispatch))   
  const token = useStore((state) => state.user.token);
  const [userText, setUserText] = useState("");

  const createNewMessage = (e) => {
    e.preventDefault();
    createMessage(userText, token).then(() => {
      console.log("Message data", userText)
      dispatch({type: CREATEMESSAGE})
     messageList().then((messageData) =>
      dispatch({ type: GETMESSAGES, payload: messageData.messages })
    );
    });
    setUserText("");
  };

  const handlechange = (e) => {
      setUserText(e.target.value)
  }

  return (
      <div>
          <label htmlFor="newMessage">New Message</label>
          <input type="text" value={userText} onChange={handlechange} />
          <button onClick={createNewMessage}>Post</button>
      </div>
  )
};

export default CreateMessage;
