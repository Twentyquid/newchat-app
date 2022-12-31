import React from "react";
import "./style.css";
import { Link, useNavigate } from "react-router-dom";
import { Auth, ThemeSupa } from "@supabase/auth-ui-react";
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://rrznaohlphkfbcbqdglx.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJyem5hb2hscGhrZmJjYnFkZ2x4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzIxMjU1MzgsImV4cCI6MTk4NzcwMTUzOH0.v8wlQ-yB1nW50oVgfsgTpRVe5sNIh0VQG_BEIm_K_Sg";
const supabase = createClient(supabaseUrl, supabaseKey);

function LoginPage() {
  const navigate = useNavigate();
  supabase.auth.onAuthStateChange(async (event) => {
    console.log("State changed");
    if (event !== "SIGNED_OUT") {
      navigate("/chat");
    } else {
      navigate("/login");
    }
  });
  return (
    <div className="login-container">
      {/* <div className="input-wrapper">
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
      </div> */}
      <Auth
        supabaseClient={supabase}
        appearance={{ theme: ThemeSupa }}
        theme="dark"
        providers={["google"]}
      />
    </div>
  );
}

export default LoginPage;
