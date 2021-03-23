import React, { useEffect, useState, useRef } from 'react';
import { useStore, GETMESSAGES } from '../store/store';
import { messageList } from '../fetchRequests';
import Menu from '../components/Menu.js'
import MessageItem from "../components/MessageItem.js";
import CreateMessage from "../components/CreateMessage";

function MessageList(props) {
  const dispatch = useStore(state => state.dispatch)
  const messages = useStore(state => state.messageData.messages)

  const [refresh, setRefresh] = useState(30)
  const refreshRef = useRef(refresh)
  refreshRef.current = refresh

  const handleMessages = () => {
    messageList().then((messageData) =>
      dispatch({ type: GETMESSAGES, payload: messageData })
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
    <>
      <Menu />
      <CreateMessage handleMessages={handleMessages} setRefresh={setRefresh} />
      <p>Message list refreshing in {refresh} second(s)</p>
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
    </>
  )
}

export default MessageList
