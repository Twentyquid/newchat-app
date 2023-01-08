import React from "react";
import "./style.css";
import avatar from "../../images/avatar.png";

export function ChatOtherUser({ data }) {
  let timeStack = [];
  let time = "";
  return (
    <div className="chatbox">
      <div className="avatar">
        <img src={avatar} alt="" />
      </div>
      <div className="message-box">
        {data.map((item) => {
          time = new Date(item.time).toLocaleTimeString([], {
            hour: "numeric",
            minute: "numeric",
            hour12: true,
          });
          if (!timeStack[0]) {
            timeStack.push(time);
          } else {
            let lastTime = timeStack[0];
            if (lastTime === time) {
              time = "";
            } else {
              timeStack.pop();
              timeStack.push();
            }
          }
          return (
            <>
              <p className="time">{time}</p>
              <p className="message">{item.info}</p>
            </>
          );
        })}
      </div>
    </div>
  );
}

export function ChatSameUser({ data }) {
  let timeStack = [];
  let time = "";
  return (
    <div className="chatbox-other">
      <div className="message-box-other">
        {data.map((item) => {
          time = new Date(item.time).toLocaleTimeString([], {
            hour: "numeric",
            minute: "numeric",
            hour12: true,
          });
          if (!timeStack[0]) {
            timeStack.push(time);
          } else {
            let lastTime = timeStack[0];
            if (lastTime === time) {
              time = "";
            } else {
              timeStack.pop();
              timeStack.push();
            }
          }
          return (
            <>
              <p className="time-other">{time}</p>
              <p className="message-other">{item.info}</p>
            </>
          );
        })}
      </div>
    </div>
  );
}
