import React, { useEffect, useState } from 'react';
import './App.css';
import Sidebar from './Sidebar.js';
import Chat from './Chat';
import Pusher from "pusher-js";
import axios from "./axios";

function App() {

  const [messages, setMessages] = useState([]);
  useEffect( () => {
    axios.get('/messages/sync')
      .then(response => {
        setMessages(response.data)
      })
  }, [])

  useEffect(() => {
    //once
    const pusher = new Pusher('c4c2af3049498f0a5b13', {
      cluster: 'ap2'
    });

    const channel = pusher.subscribe('messages');
    channel.bind('inserted', (newMessages) => {
      alert(JSON.stringify(newMessages));
      setMessages([...messages, newMessages])
    });

    () => {
      channel.unbind_all();
      channel.unsubscribe();
    }
  },[messages])
  console.log(messages);

  return (
    <div className="app">
      <div className="app__body">
        <Sidebar />
        <Chat messages={messages} />
      </div>
    </div>
  );
}

export default App;
