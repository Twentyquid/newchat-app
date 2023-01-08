import React from "react";
import "remixicon/fonts/remixicon.css";
import "./style.css";

function SearchBar() {
  return (
    <div className="searchbar">
      <input placeholder="Search contacts" type="text" />
      <div>
        <i class="ri-search-line"></i>
      </div>
    </div>
  );
}

export default SearchBar;
