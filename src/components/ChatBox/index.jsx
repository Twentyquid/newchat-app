import React from "react";
import "./style.css";
import avatar from "../../images/avatar.png";

function ChatBox() {
  return (
    <>
      <ChatSameUser />
      <ChatOtherUser />
      <ChatSameUser />
      <ChatOtherUser />
    </>
  );
}

function ChatSameUser() {
  return (
    <div className="chatbox">
      <div className="avatar">
        <img src={avatar} alt="" />
      </div>
      <div className="message-box">
        <p className="time">9:30</p>
        <p className="message">Hey how its going ?</p>
        <p className="message">Did you complete the task ?</p>
      </div>
    </div>
  );
}

function ChatOtherUser() {
  return (
    <div className="chatbox-other">
      <div className="message-box-other">
        <p className="time-other">10:30</p>
        <p className="message-other">Going good how about you ?</p>
        <p className="message-other">
          Did you finish the project that is due today ?
        </p>
      </div>
    </div>
  );
}

export default ChatBox;
