import React from "react";
import { Link } from "react-router-dom";
import "remixicon/fonts/remixicon.css";
import "./style.css";

function Navbar() {
  return (
    <div className="navbar">
      <div>
        <Link to="/home/">
          <i class="ri-home-fill"></i>
        </Link>
      </div>
      <div>
        <Link to="/home/contacts">
          <i class="ri-contacts-book-2-fill"></i>
        </Link>
      </div>
      <div>
        <i class="ri-account-circle-fill"></i>
      </div>
    </div>
  );
}

export default Navbar;
