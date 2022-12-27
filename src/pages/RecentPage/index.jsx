import React from "react";
import NoContacts from "../../components/NoContacts";
import "./style.css";

const recentContacts = [];

function RecentPage() {
  return (
    <div className="wrapper">
      {recentContacts[0] ? <div>Hello</div> : <NoContacts />}
    </div>
  );
}

export default RecentPage;
