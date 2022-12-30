import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import OnboardingPage from "./pages/OnboardingPage";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import ChatPage from "./pages/ChatPage";
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://rrznaohlphkfbcbqdglx.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJyem5hb2hscGhrZmJjYnFkZ2x4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzIxMjU1MzgsImV4cCI6MTk4NzcwMTUzOH0.v8wlQ-yB1nW50oVgfsgTpRVe5sNIh0VQG_BEIm_K_Sg";
const supabase = createClient(supabaseUrl, supabaseKey);

function App() {
  const [user, setUser] = useState();
  return (
    <Router>
      <Routes>
        <Route path="/" element={<OnboardingPage />} />
        <Route
          path="/login"
          element={<LoginPage setUser={setUser} supabaseClient={supabase} />}
        />
        <Route
          path="/chat"
          element={<ChatPage supabase={supabase} user={user} />}
        />
        <Route path="/home/*" element={<HomePage />} />
      </Routes>
    </Router>
  );
}

export default App;
