
import React, { useEffect } from 'react';
import { useStore, GETMESSAGES } from '../store/store';
import { messageList } from '../fetchRequests';



function MessageList(props) {
  const dispatch = useStore(state => state.dispatch)
  const messages = useStore(state => state.messages)
  console.log(messages)

  useEffect(() => {
    handleMessages();
    return () => handleMessages()
  }, [])
  const handleMessages = (e) => {
    //e.preventDefault();
    messageList().then((messageData) =>
      dispatch({ type: GETMESSAGES, payload: messageData })
    );
  };

  return (
    <div>
      Message List
    </div>
  )
}

export default MessageList