import React, { useState, useEffect } from "react";
import Appbar from "../../components/Appbar";
import { ChatSameUser, ChatOtherUser } from "../../components/ChatBox";
import MessageInput from "../../components/MessageInput";
import "./style.css";
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://rrznaohlphkfbcbqdglx.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJyem5hb2hscGhrZmJjYnFkZ2x4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzIxMjU1MzgsImV4cCI6MTk4NzcwMTUzOH0.v8wlQ-yB1nW50oVgfsgTpRVe5sNIh0VQG_BEIm_K_Sg";
const supabase = createClient(supabaseUrl, supabaseKey);

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

function ChatPage() {
  const [user, setUser] = useState();
  const [list, setList] = useState([]);

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

  const [message, setMessage] = useState({});
  useEffect(() => {
    async function getData() {
      const { data, error } = await supabase.from("messages").select();
      console.log("chat data is:", data);
      console.log("Error is: ", error);
      return data;
    }

    getData()
      .then((result) => {
        console.log("chat data is: ", result);
        let messageList = createMessageList(result);
        setList(messageList);
      })
      .catch((e) => console.log(e));
    async function getUserData() {
      await supabase.auth.getUser().then((result) => {
        if (result.data?.user) {
          console.log(result.data.user.user_metadata);
          setUser(result.data.user.user_metadata);
        }
      });
    }
    getUserData();
  }, []);

  return (
    <div className="container">
      <MessageInput
        supabase={supabase}
        message={message}
        setMessage={setMessage}
        user={user}
      />
      <Appbar />
      <div className="chat-wrapper">
        {list.map((item) => {
          if (item[0].name === user.full_name) {
            return <ChatSameUser data={item} />;
          } else {
            return <ChatOtherUser user={user} data={item} />;
          }
        })}
        <div className="check"></div>
      </div>
    </div>
  );
}

export default ChatPage;
