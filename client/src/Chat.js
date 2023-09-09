import { AttachFile, SearchOutlined, MoreVert } from '@mui/icons-material';
import { Avatar, IconButton } from '@mui/material';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import MicIcon from '@mui/icons-material/Mic';
import React from 'react';
import "./Chat.css";

function Chat({ messages }) {
  const sendMessage = (e) => {
    e.preventDefaults();
  };
  return (
    <div className="chat">
      <div className="chat__header">
        <Avatar />
        <div className="chat__headerInfo">
          <h3>Room name</h3>
          <p>Last seen at...</p>
        </div>
        <div className="chat__headerRight">
            <IconButton>
              <SearchOutlined />
            </IconButton>
            <IconButton>
              <AttachFile />
            </IconButton>
            <IconButton>
              <MoreVert />
            </IconButton>
        </div>
      </div>
      <div className="chat__body">
        {messages.map((message) => (
          <p className={`chat__message ${message.received && "chat__receiver"}`}>
            <span className='chat__name'>{message.name}</span>
              This is a message
            <span className="chat__timestamp">
              {message.timestamp}
            </span>
          </p>
        ))};
      </div>

      <div className='chat__footer'>
        <InsertEmoticonIcon />
        <form>
          <input
              placeholder="Type a message"
              type="text" 
          />
          <button onClick={sendMessage} type="submit">Send a message</button>
        </form>
        <MicIcon />
      </div>
    </div>
  )
}

export default Chat