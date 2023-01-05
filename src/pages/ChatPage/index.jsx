import React, { useState, useEffect } from "react";
import Appbar from "../../components/Appbar";
import { ChatSameUser, ChatOtherUser } from "../../components/ChatBox";
import MessageInput from "../../components/MessageInput";
import "./style.css";

const dummy_messages = [
  { name: "david", time: "9:30", info: "how are you doing ?" },
  { name: "david", time: "9:35", info: "did you complete the task" },
  { name: "user", time: "10:50", info: "Doing good how about you ?" },
  {
    name: "user",
    time: "10:50",
    info: "Did you complete the project that is due today",
  },
  { name: "david", time: "9:30", info: "how are you doing ?" },
  { name: "david", time: "9:30", info: "did you complete the task" },
];

function ChatPage() {
  const [messages, setMessages] = useState(dummy_messages);

  const handleClick = () => {
    setMessages([
      ...messages,
      { name: "user", time: "10:50", info: "Doing good how about you ?" },
    ]);
  };

  const createOutputList = (inputList) => {
    let list = [];
    let acc = [];
    inputList.forEach((item) => {
      if (!acc[0]) {
        acc.push(item);
      } else {
        if (item.name === acc[acc.length - 1].name) {
          acc.push(item);
        } else {
          list.push(acc);
          acc = [];
          acc.push(item);
        }
      }
    });
    list.push(acc);
    return list;
  };

  const [finalMessageList, setFinalMessageList] = useState([]);

  useEffect(() => {
    setFinalMessageList(() => createOutputList(messages));
  }, [messages]);
  return (
    <div className="container">
      {/* <MessageInput message={message} setMessage={setMessage} /> */}
      <Appbar />
      <div className="chat-wrapper">
        {finalMessageList.map((item) => {
          if (item[0].name === "user") {
            return <ChatSameUser data={item} />;
          } else {
            return <ChatOtherUser data={item} />;
          }
        })}
      </div>
      <button onClick={handleClick}>Add new Item</button>
    </div>
  );
}

export default ChatPage;
