import React from "react";
import Icon from "@mdi/react";
import { mdiGithub, mdiFacebook, mdiInstagram, mdiTwitter } from "@mdi/js";
import "./Contact.css";

function Contact() {
  return (
    <div className="contact">
      <div className="contact-grid">
        <div className="top-card">
          <h1> “Belief creates the actual fact.”</h1>
          <h3 className="quote-author">-- William James</h3>
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
            <a
              href="https://github.com/erynder-z"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              <Icon path={mdiGithub} size={3} color="black" />
              <p>Erynder-Z</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
