import React, { useEffect } from 'react';
import { useStore, GETMESSAGES } from '../store/store';
import { messageList } from '../fetchRequests';
import Menu from '../components/Menu.js'
import MessageItem from "../components/MessageItem.js"



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
    <ul>
      {messages && messages.map((message) => (
        <MessageItem 
          key={message.id}
          id={message.id}
          text={message.text}
          createdAt={message.createdAt}
          username={message.username}
          likes={message.likes}
        />
      ))}
    </ul>
    </>
  )
}

export default MessageList
