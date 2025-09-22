import React from "react";
import "./../index.css";
import { Link } from "react-router-dom";
import void_logo from "./../assets/Void Society logo.svg";
export default function Navbar() {
  return (
    <div className="navbar_about">
      <img
        src={void_logo}
        alt="Logo"
        className="navbar_logo"
      />

      <div className="navbar_about_left flex-grow justify-center">
        <Link to="/" className="navbar_link">Home</Link>
        <Link to="/about-us" className="navbar_link">About</Link>
        <Link to="/contact-us" className="navbar_link">Contact</Link>
        <Link to="/blogs" className="navbar_link">Blogs</Link>
      </div>

      <div className="navbar_about_right">
        <Link to="/resources" className="navbar_link">Resources</Link>
        <Link to="/terminal" className="navbar_link">CLI</Link>
      </div>
    </div>
  );
}
