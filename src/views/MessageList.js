import React, { useEffect, useState, useRef } from 'react';
import { useStore, GET_MESSAGES } from '../store/store';
import { messageList } from '../fetchRequests';
import Menu from '../components/Menu.js'
import MessageItem from "../components/MessageItem.js";
import CreateMessage from "../components/createMessage.js";

import "../assets/MessageList.css"

function MessageList(props) {
  const dispatch = useStore(state => state.dispatch)
  const messages = useStore(state => state.messageData.messages)

  const [refresh, setRefresh] = useState(30)
  const refreshRef = useRef(refresh)
  refreshRef.current = refresh

  const handleMessages = () => {
    messageList().then((messageData) =>
      dispatch({ type: GET_MESSAGES, payload: messageData })
    );
  };

  useEffect(() => {
    handleMessages();
    return () => handleMessages()
  }, [])

  useEffect(() => {
    window.timer = setInterval(() => {
      if (refreshRef.current === 0) {
        handleMessages()
        setRefresh(30)
      } else {
        setRefresh(refresh => refresh - 1)
      }
    }, 1000)

    return () => clearInterval(window.timer)

  }, [setRefresh])

  return (
    <div className="MessageList">
      <Menu />
      {refresh}
      <CreateMessage className="CreateMessage" handleMessages={handleMessages} setRefresh={setRefresh} />
      <ul>
        {messages && messages.map((message) => (
          <MessageItem
            {...message}
            key={message.id}
            message={message}
            handleMessages={handleMessages}
            setRefresh={setRefresh}
          />
        ))}
      </ul>
    </div>
  )
}

export default MessageList
