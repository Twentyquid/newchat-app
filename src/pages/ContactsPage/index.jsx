import React from "react";
import ContactCard from "../../components/ContactCard";
import "./style.css";

function ContactsPage() {
  return (
    <div className="wrapper">
      <div className="contacts">
        <ContactCard />
        <ContactCard />
      </div>
    </div>
  );
}

export default ContactsPage;
