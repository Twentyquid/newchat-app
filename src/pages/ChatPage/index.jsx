import React from "react";
import Appbar from "../../components/Appbar";
import ChatBox from "../../components/ChatBox";
import MessageInput from "../../components/MessageInput";
import "./style.css";

function ChatPage() {
  return (
    <div className="container">
      <MessageInput />
      <Appbar />
      <div className="chat-wrapper">
        <ChatBox />
      </div>
    </div>
  );
}

export default ChatPage;
