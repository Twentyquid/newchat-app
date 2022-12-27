import React from "react";
import "./style.css";
import { Link } from "react-router-dom";
import donut from "../../images/donut.png";
import pill from "../../images/pill.png";
import rings from "../../images/rings.png";

function OnboardingPage() {
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
}

export default OnboardingPage;
