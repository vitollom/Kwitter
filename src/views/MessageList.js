import React, { useEffect } from 'react';
import { useStore, GETMESSAGES } from '../store/store';
import { messageList } from '../fetchRequests';
import Menu from '../components/Menu.js'
import MessageItem from "../components/MessageItem.js";
import CreateMessage from "../components/CreateMessage";



function MessageList(props) {
  const dispatch = useStore(state => state.dispatch)
  const messages = useStore(state => state.messageData.messages)

  const handleMessages = () => {
    messageList().then((messageData) =>
      dispatch({ type: GETMESSAGES, payload: messageData })
    );
  };
  
  useEffect(() => {
    handleMessages();
    return () => handleMessages()
  }, [])


  return (
    <>
    <Menu />
    <CreateMessage  handleMessages={handleMessages} />
    <ul>
      {messages && messages.map((message) => (
        <MessageItem 
          {...message}
          key={message.id}
          message={message}
          handleMessages={handleMessages}
        />
      ))}
    </ul>
    </>
  )
}

export default MessageList
