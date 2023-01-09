import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "../../components/Navbar";
import SearchBar from "../../components/SearchBar";
import ContactsPage from "../ContactsPage";
import RecentPage from "../RecentPage";

function HomePage() {
  return (
    <div>
      <div className="container">
        <SearchBar />
        <Navbar />
        <Routes>
          <Route path="/" element={<RecentPage />} />
          <Route path="/contacts" element={<ContactsPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default HomePage;
