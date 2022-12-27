import React from "react";
import "./style.css";

function MessageInput() {
  return (
    <div className="message-input">
      <input type="text" placeholder="Type something" />
      <button>
        <i class="ri-send-plane-2-fill"></i>
      </button>
    </div>
  );
}

export default MessageInput;
