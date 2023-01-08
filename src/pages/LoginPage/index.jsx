import React from "react";
import "./style.css";
// import { Link } from "react-router-dom";
import { createClient } from "@supabase/supabase-js";
import { Auth, ThemeSupa } from "@supabase/auth-ui-react";

const API_URL = process.env.REACT_APP_API_URL;
const PUBLIC_ANON_KEY = process.env.REACT_APP_PUBLIC_ANON_KEY;

// Create a single supabase client for interacting with your database
const supabase = createClient(API_URL, PUBLIC_ANON_KEY);

function LoginPage() {
  return (
    <div className="login-container">
      <div className="input-wrapper">
        <Auth
          supabaseClient={supabase}
          appearance={{ theme: ThemeSupa }}
          providers={["google"]}
          theme="dark"
        />
      </div>
    </div>
  );
}

export default LoginPage;
