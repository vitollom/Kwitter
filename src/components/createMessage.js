import React, { useEffect } from "react";
import { useStore, CREATEMESSAGE } from "../store/store";
import { createMessage } from "../fetchRequests";

function CreateMessage(props) {
  const dispatch = useStore((state) => state.dispatch);
  const [message, setMessage] = useState({
    text: "",
  });

  const createNewMessage = (e) => {
    e.preventdefault();
    createMessage(message.text).then((message) =>
      dispatch({ type: CREATEMESSAGE, payload: message })
    );
    setMessage({ text: "" });
  };

  return (
      <div>
          <label htmlFor="newMessage">New Message</label>
          <input type="text" value={message.text} />
      </div>
  )
};

export default CreateMessage;
