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

      <div className="feedback-button-container">
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSeE6jASHVK9Xxn7aEagl7Mo8hJW4L-nIWfh8BaQ8iQ6IozGOQ/viewform?fbzx=-8777276868041223699"
          target="_blank"
          rel="noopener noreferrer"
          className="feedback-button"
        >
          Provide Feedback / Report Issue
        </a>
      </div>

    </div>
  );
};

export default TopBar;