import React from "react";
import "./style.css";
import avatar from "../../images/avatar.png";

export function ChatOtherUser({ data }) {
  let timeStack = [];
  let time = "";
  return (
    <div className="chatbox">
      <div className="avatar">
        <img src={data[0]["avatar-url"]} alt="" />
      </div>
      <div className="message-box">
        {data.map((item) => {
          time = new Date(item.time).toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          });
          if (!timeStack[0]) {
            timeStack.push(time);
          } else {
            let lastTime = timeStack[0];
            if (lastTime === time) {
              time = "";
            } else {
              timeStack.pop();
              timeStack.push(time);
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
            hour: "2-digit",
            minute: "2-digit",
          });
          console.log("timeStack is: ", timeStack);
          if (!timeStack[0]) {
            timeStack.push(time);
          } else {
            let lastTime = timeStack[0];
            if (lastTime === time) {
              console.log("Its a match");
              time = "";
            } else {
              timeStack.pop();
              timeStack.push(time);
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
