import React, { useEffect } from 'react';
import { useStore, CREATEMESSAGE } from '../store/store';
import { createMessage } from '../fetchRequests';
import MessageItem from '../components/MessageItem';

function createMessage(props) {
const dispatch = useStore((state) => state.dispatch);
const [message, setMessage] = useState({
    text: "",
});

const createNewMessage = (e) => {
    e.preventdefault();
    createMessage(
        message.text,
    ).then((message) =>
    dispatch({type:CREATEMESSAGE, payload: message}));
    setMessageData({text:""});
};



}