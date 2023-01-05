import React, { useState, useEffect, useRef } from "react";
import { createClient } from "@supabase/supabase-js";
import Appbar from "../../components/Appbar";
import { ChatSameUser, ChatOtherUser } from "../../components/ChatBox";
import MessageInput from "../../components/MessageInput";
import "./style.css";

const API_URL = process.env.REACT_APP_API_URL;
const PUBLIC_ANON_KEY = process.env.REACT_APP_PUBLIC_ANON_KEY;

// Create a single supabase client for interacting with your database
const supabase = createClient(API_URL, PUBLIC_ANON_KEY);

function ChatPage() {
  const scrollControl = useRef(null);
  const [messages, setMessages] = useState([[]]);
  const [loading, setLoading] = useState(true);

  const getData = async () => {
    let { data, error } = await supabase.from("messages").select();
    if (error) {
      console.log(error);
    }
    if (data) {
      setMessages(data);
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
    const messagesChannel = supabase.channel("public:messages");
    messagesChannel
      .on(
        "postgres_changes",
        { event: "INSERT", schema: "public", table: "messages" },
        (payload) => {
          console.log("payload is: ", payload);
          setMessages((value) => [...value, payload.new]);
          scrollControl.current.scrollIntoView();
        }
      )
      .subscribe();
  }, []);

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
      <MessageInput supabase={supabase} />
      <Appbar />
      {loading ? (
        <h3 className="loading">Loading...</h3>
      ) : (
        <div className="chat-wrapper">
          {finalMessageList.map((item) => {
            if (item[0].name === "user") {
              return <ChatSameUser data={item} />;
            } else {
              return <ChatOtherUser data={item} />;
            }
          })}
          <div ref={scrollControl}></div>
        </div>
      )}
    </div>
  );
}

export default ChatPage;
