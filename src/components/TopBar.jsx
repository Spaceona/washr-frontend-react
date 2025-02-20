import React from "react";
import logo from "../assets/Spaceona-Logo.png"; // Ensure the logo is inside /src/assets/

const TopBar = () => {
  const today = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="top-bar">
      <div className="logo-container">
        <img src={logo} alt="SpaceOna Logo" className="logo" />
        <h1>SpaceOna</h1>
      </div>
      <p className="date">{today}</p>
      <div className="hall-tab">
        <h2>Watson Hall</h2>
      </div>
    </div>
  );
};

export default TopBar;