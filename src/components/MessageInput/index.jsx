import React, { useEffect, useState } from "react";
import "./style.css";

function MessageInput({ supabase, user }) {
  console.log("user data inside MessageInput is: ", user);
  const [message, setMessage] = useState({
    name: user["full_name"],
    info: "",
    email: user["email"],
    avatar_url: user["avatar_url"],
  });

  useEffect(() => {
    setMessage({
      ...message,
      name: user["full_name"],
      info: "",
      email: user["email"],
      avatar_url: user["avatar_url"],
    });
  }, [user]);

  console.log("Initial message is: ", message);
  async function handleClick() {
    console.log("Clicked");
    console.log("message after clicking send is: ", message);
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
