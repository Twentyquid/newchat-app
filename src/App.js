import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import OnboardingPage from "./pages/OnboardingPage";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import ChatPage from "./pages/ChatPage";

function App() {
  const [user, setUser] = useState();
  return (
    <Router>
      <Routes>
        <Route path="/" element={<OnboardingPage />} />
        <Route path="/login" element={<LoginPage setUser={setUser} />} />
        <Route path="/chat" element={<ChatPage user={user} />} />
        <Route path="/home/*" element={<HomePage />} />
      </Routes>
    </Router>
  );
}

export default App;
