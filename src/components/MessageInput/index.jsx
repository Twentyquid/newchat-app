import React from "react";
import "./style.css";

function MessageInput({ setMessage, message, supabase }) {
  async function handleClick() {
    // message.time = new Date().toLocaleTimeString([], {
    //   hour: "2-digit",
    //   minute: "2-digit",
    // });
    console.log(message);
    console.log("Clicked");
    const { error } = await supabase.from("messages").insert(message);
    console.log("error in inserting is: ", error);
    setMessage({ ...message, info: "" });
  }
  return (
    <div className="message-input">
      <input
        value={message.info}
        onChange={(e) => setMessage({ name: "user", info: e.target.value })}
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
