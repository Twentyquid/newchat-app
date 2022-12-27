import React from "react";
import "./style.css";
import { Link } from "react-router-dom";

function LoginPage() {
  return (
    <div className="login-container">
      <div className="input-wrapper">
        <p>your email:</p>
        <input type="text" />
        <p>choose a password:</p>
        <input type="password" />
        <button>
          <Link to="/home">Continue </Link>
        </button>
        <div className="line">
          <p>or</p>
        </div>
        <button>Signup with google</button>
      </div>
    </div>
  );
}

export default LoginPage;
