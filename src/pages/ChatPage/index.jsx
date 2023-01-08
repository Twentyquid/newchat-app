import React, { useState, useEffect, useRef } from "react";
import Appbar from "../../components/Appbar";
import { ChatSameUser, ChatOtherUser } from "../../components/ChatBox";
import MessageInput from "../../components/MessageInput";
import "./style.css";
import { createClient } from "@supabase/supabase-js";

const API_URL = process.env.REACT_APP_API_URL;
const PUBLIC_ANON_KEY = process.env.REACT_APP_PUBLIC_ANON_KEY;

// Create a single supabase client for interacting with your database
const supabase = createClient(API_URL, PUBLIC_ANON_KEY);

function ChatPage() {
  const scrollControl = useRef(null);
  const [messages, setMessages] = useState([[]]);
  const [loading, setLoading] = useState(true);
  const [userData, setUserData] = useState({});

  const getData = async () => {
    let { data, error } = await supabase.from("messages").select();

    const {
      data: { user },
    } = await supabase.auth.getUser();
    console.log("The user data is: ", user);
    if (user) {
      setUserData(user.user_metadata);
    }
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

  useEffect(() => {
    let windowHeight = window.innerHeight;
    let scrollPosition = scrollControl.current?.getBoundingClientRect().bottom;
    if (scrollPosition < windowHeight + 300) {
      scrollControl.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [finalMessageList]);
  return (
    <div className="container">
      <MessageInput user={userData} supabase={supabase} />
      <Appbar />
      {loading ? (
        <h3 className="loading">Loading...</h3>
      ) : (
        <div className="chat-wrapper">
          {finalMessageList.map((item) => {
            if (item[0].name === userData.full_name) {
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
