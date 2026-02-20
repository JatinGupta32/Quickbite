import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "./Header.css";

const Header = () => {
  return (
    <div className="hero-section">
  <div className="hero-overlay">
    <div className="hero-content text-center">
      <h1 className="hero-title">
        Order Your Favorite Food 🍕
      </h1>
      <p className="hero-subtitle">
        Discover the best food & drinks in Bengaluru
      </p>
      <Link to="/explore" className="hero-btn">
        Explore Now
      </Link>
    </div>
  </div>
</div>
  );
};

export default Header;