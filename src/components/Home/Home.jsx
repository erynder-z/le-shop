import React from "react";
import { Link } from "react-router-dom";
import video from "../../assets/backvid.mp4";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      <video className="background.video" autoPlay muted loop id="backvid">
        <source src={video} type="video/mp4" />
      </video>
      <div className="content">
        <div className="content-left">
          <h1>Welcome to Le Shop!</h1>
          <p>Selected lorem ipsum items since 2021.</p>
        </div>
        <div className="content-right">
          <div className="shopBtn">
            <Link to="/shop">Explore the shop</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
