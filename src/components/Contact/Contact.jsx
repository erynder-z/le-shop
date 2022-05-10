import React from "react";
import Icon from "@mdi/react";
import { mdiGithub, mdiFacebook, mdiInstagram, mdiTwitter } from "@mdi/js";
import "./Contact.css";

function Contact() {
  return (
    <div className="contact">
      <div className="contact-grid">
        <div className="top-card">
          <h1>
            {" "}
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Reprehenderit, praesentium. A illum eligendi itaque non.
          </h1>
        </div>
        <div className="left-card">
          <h1>Address</h1>
          <div className="left-card-container">
            <h3>Le Shop</h3>
            <p>123 Fake Street</p>
            <p>Springfield, HE</p>
            <p>+1 234 567 8</p>
          </div>
        </div>
        <div className="middle-card">
          <h1>Social</h1>
          <div className="middle-card-container">
            <Icon path={mdiFacebook} size={3} />
            <Icon path={mdiInstagram} size={3} />
            <Icon path={mdiTwitter} size={3} />
          </div>
        </div>
        <div className="right-card">
          <h1>Creator</h1>
          <div className="right-card-container">
            <Icon path={mdiGithub} size={3} />
            <p>Erynder-Z</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
