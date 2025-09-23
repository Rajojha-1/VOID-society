import React, { useState } from "react";
import "./../index.css";
import { Link } from "react-router-dom";
import void_logo from "./../assets/Void Society logo.svg";
export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <div className="navbar_about">
      <img
        src={void_logo}
        alt="Logo"
        className="navbar_logo"
        onClick={closeMenu}
      />

      {/* Desktop nav */}
      <div className="navbar_about_left flex-grow justify-center navbar_desktop_only">
        <Link to="/" className="navbar_link">Home</Link>
        <Link to="/about-us" className="navbar_link">About</Link>
        <Link to="/contact-us" className="navbar_link">Contact</Link>
        <Link to="/blogs" className="navbar_link">Blogs</Link>
      </div>

      <div className="navbar_about_right navbar_desktop_only">
        <Link to="/resources" className="navbar_link">Resources</Link>
        <Link to="/terminal" className="navbar_link">CLI</Link>
      </div>

      {/* Hamburger button (mobile) */}
      <button
        aria-label="Toggle navigation menu"
        className={`navbar_toggle ${isMenuOpen ? "open" : ""}`}
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </button>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="navbar_mobile_menu">
          <div className="navbar_mobile_group">
            <Link to="/" className="navbar_link" onClick={closeMenu}>Home</Link>
            <Link to="/about-us" className="navbar_link" onClick={closeMenu}>About</Link>
            <Link to="/contact-us" className="navbar_link" onClick={closeMenu}>Contact</Link>
            <Link to="/blogs" className="navbar_link" onClick={closeMenu}>Blogs</Link>
          </div>
          <div className="navbar_mobile_group">
            <Link to="/resources" className="navbar_link" onClick={closeMenu}>Resources</Link>
            <Link to="/terminal" className="navbar_link" onClick={closeMenu}>CLI</Link>
          </div>
        </div>
      )}
    </div>
  );
}
