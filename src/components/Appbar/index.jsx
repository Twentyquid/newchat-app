import React from "react";
import { Link } from "react-router-dom";
import "remixicon/fonts/remixicon.css";
import "./style.css";

function Appbar() {
  return (
    <div className="appbar">
      <div>
        <Link to="/home/contacts">
          <i className="ri-arrow-left-s-line"></i>
        </Link>
      </div>
      <div className="user-status">
        <p className="username">John Doe Hernandes</p>
        <p>online</p>
      </div>
    </div>
  );
}

export default Appbar;
