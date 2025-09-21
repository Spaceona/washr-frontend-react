import React from "react";
import { motion } from "framer-motion";
import logo from "../assets/Spaceona-Logo.png"; // Ensure the logo is inside /src/assets/
import './TopBar.css';

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
        <motion.a
          href="https://docs.google.com/forms/d/e/1FAIpQLSeE6jASHVK9Xxn7aEagl7Mo8hJW4L-nIWfh8BaQ8iQ6IozGOQ/viewform?fbzx=-8777276868041223699"
          target="_blank"
          rel="noopener noreferrer"
          className="feedback-button"
          whileHover={{ 
            scale: 1.05,
            boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.2)"
          }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="feedback-primary">Want us in more dorms? Give feedback!</div>
          <div className="feedback-secondary"><em>For the chance to win a $20 gift card!</em></div>
        </motion.a>
      </div>

    </div>
  );
};

export default TopBar;