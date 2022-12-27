import React from "react";
import "./style.css";
import clipboard from "../../images/clipboard.png";
import { Link } from "react-router-dom";

function NoContacts() {
  return (
    <div className="nocontacts">
      <div>
        <img src={clipboard} alt="" />
      </div>
      <p>
        You have no <br /> conversations yet
      </p>
      <p className="new-message">
        <Link to="/home/contacts"> New Message</Link>
      </p>
    </div>
  );
}

export default NoContacts;
