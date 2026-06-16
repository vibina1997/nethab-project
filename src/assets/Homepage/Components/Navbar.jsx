import React from "react";
// Importing the 4 icons seen in the image + the mobile menu icon
import { FaSearch, FaRegHeart, FaShoppingBag, FaRegUser, FaBars } from "react-icons/fa";
import "../../Home/Navbar.css";

const Navbar = () => {
  return (
    <nav className="custom-navbar">
      <div className="navbar-container">
        
        {/* 1. BRAND LOGO */}

        <a className="navbar-logo" href="#">
          <span className="logo-main">nat habit</span>
          <span className="logo-sub">BREATHE LIFE</span>
        </a>

        {/* Mobile menu button (Hidden on desktop) */}

        <button className="mobile-toggle-btn">
          <FaBars />
        </button>

        {/* 2. NAVIGATION LINKS */}
        <ul className="navbar-links">
          <li>Flash Deals ⚡</li>
          <li className="active-item">Trending 🔥</li>
          <li>Summer Care</li>
          <li>Hair</li>
          <li>Face</li>
          <li>Body</li>
          <li>Eyes & Lips</li>
          <li>Baby</li>
          <li>Hair Fall</li>
          <li>Men</li>
          <li>Gifting ✨</li>
          <li>Concern</li>
          <li>Ingredients</li>
        </ul>

        {/* 3. RIGHT SIDE ICONS */}
        
        <div className="navbar-icons">
          <FaSearch className="icon-item" />
          <FaRegHeart className="icon-item" />
          <FaShoppingBag className="icon-item" />
          <FaRegUser className="icon-item" />
        </div>

      </div>
    </nav>
  );
};

export default Navbar;