import React, { useState, useEffect } from "react";
import Appbar from "../../components/Appbar";
import { ChatSameUser, ChatOtherUser } from "../../components/ChatBox";
import MessageInput from "../../components/MessageInput";
import "./style.css";

// const messages = [
//   { name: "david", time: "9:30", info: "how are you doing ?" },
//   { name: "david", time: "9:35", info: "did you complete the task" },
//   { name: "user", time: "10:50", info: "Doing good how about you ?" },
//   {
//     name: "user",
//     time: "10:50",
//     info: "Did you complete the project that is due today",
//   },
//   { name: "david", time: "9:30", info: "how are you doing ?" },
//   { name: "david", time: "9:30", info: "did you complete the task" },
// ];

function ChatPage({ user, supabase }) {
  console.log("User data is:", user);

  async function getData() {
    const { data, error } = await supabase.from("messages").select();
    console.log("chat data is:", data);
    console.log("Error is: ", error);
    return data;
  }

  function createMessageList(messageData) {
    let list = [];
    let acc = [];
    messageData.forEach((item) => {
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
  }

  const [list, setList] = useState([]);

  const [message, setMessage] = useState({});
  useEffect(() => {
    getData()
      .then((result) => {
        console.log("chat data is: ", result);
        let messageList = createMessageList(result);
        setList(messageList);
      })
      .catch((e) => console.log(e));
  }, []);

  return (
    <div className="container">
      <MessageInput
        supabase={supabase}
        message={message}
        setMessage={setMessage}
      />
      <Appbar />
      <div className="chat-wrapper">
        {list.map((item) => {
          if (item[0].name === "user") {
            return <ChatSameUser data={item} />;
          } else {
            return <ChatOtherUser data={item} />;
          }
        })}
      </div>
    </div>
  );
}

export default ChatPage;
