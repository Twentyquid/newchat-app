import React from "react";
import "./style.css";
import { Link } from "react-router-dom";

function LoginPage({ supabaseClient, setUser }) {
  async function handleClick() {
    const { data, error } = await supabaseClient.auth.signInWithOAuth({
      provider: "google",
    });
    if (data) {
      setUser(data);
      console.log(data);
    } else {
      console.log(error);
    }
  }
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
        <button onClick={handleClick}>Signup with google</button>
      </div>
    </div>
  );
}

export default LoginPage;
