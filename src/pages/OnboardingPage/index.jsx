import React, { useEffect } from "react";
import "./style.css";
import { Link, useNavigate } from "react-router-dom";
import donut from "../../images/donut.png";
import pill from "../../images/pill.png";
import rings from "../../images/rings.png";
import { createClient } from "@supabase/supabase-js";

const API_URL = process.env.REACT_APP_API_URL;
const PUBLIC_ANON_KEY = process.env.REACT_APP_PUBLIC_ANON_KEY;

// Create a single supabase client for interacting with your database
const supabase = createClient(API_URL, PUBLIC_ANON_KEY);

function OnboardingPage() {
  let user = {};
  const navigate = useNavigate();

  useEffect(() => {
    const getUserDetails = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();
      return user;
    };
    getUserDetails().then((result) => {
      if (result) {
        user = result;
        navigate("/chat");
      }
    });
  }, []);
  if (!user.user_metadata)
    return (
      <div class="container">
        <div class="image-box">
          <div class="donut">
            <img src={donut} alt="" />
          </div>
          <div class="pill">
            <img src={pill} alt="" />
          </div>
          <div class="rings">
            <img class="ring-image" src={rings} alt="" />
          </div>
        </div>
        <div class="title">
          <p>
            It's easy to talk to <br />
            your friends with <br />
            newchat
          </p>
          <p class="subtitle">
            keep in touch with your <br />
            friends and stay productive <br />
            with our app
          </p>
        </div>
        <div class="btn-box">
          <button>
            <Link to="/login">Get Started</Link>
          </button>
        </div>
      </div>
    );
  else return <div className="container"></div>;
}

export default OnboardingPage;
