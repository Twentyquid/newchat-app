import React, { useState } from "react";
import "./style.css";

function MessageInput({ supabase }) {
  const [message, setMessage] = useState({
    name: "user",
    info: "",
    email: "tardigrade0801@gmail.com",
    avatar_url:
      "https://lh3.googleusercontent.com/a/AEdFTp6l6kKBtjOrVPEDDNpg5Gi-naqiZwvw6JXDmXzK=s96-c",
  });
  async function handleClick() {
    console.log(message);
    console.log("Clicked");
    const { error } = await supabase.from("messages").insert(message);
    setMessage({ ...message, info: "" });
    if (error) {
      console.log(error);
    }
  }
  return (
    <div className="message-input">
      <input
        value={message.info}
        onChange={(e) =>
          setMessage((value) => {
            return { ...value, info: e.target.value };
          })
        }
        type="text"
        placeholder="Type something"
      />
      <button onClick={handleClick}>
        <i class="ri-send-plane-2-fill"></i>
      </button>
    </div>
  );
}

export default MessageInput;
