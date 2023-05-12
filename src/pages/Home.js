import React from "react";
import { Link } from "react-router-dom";
import BannerImage from "../assets/letters.jpg";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
      <div className="headerContainer">
        <h1> SavvySciReal </h1>
        <p> Best online Dictionary</p>
        <Link to="/Menu">
          <button> Sign Up Now! </button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
