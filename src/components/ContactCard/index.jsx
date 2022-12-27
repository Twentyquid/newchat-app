import React from "react";
import { Link } from "react-router-dom";
import avatar from "../../images/avatar.png";
import "./style.css";

function ContactCard() {
  return (
    <Link to="/chat">
      <div className="contact-card">
        <div>
          <img src={avatar} alt="" />
        </div>
        <p>John Doe</p>
      </div>
    </Link>
  );
}

export default ContactCard;
