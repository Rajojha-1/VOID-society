import React from "react";
// import logo from "./../assets/logo.svg"; 

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="footer-container">
        <div className="footer-about">
          <p>
            VOID is a premier cybersecurity club dedicated to fostering the next
            generation of security professionals through hands-on learning and
            community collaboration.
          </p>
        </div>

        <div className="footer-links">
          <h6>Quick Links</h6>
          <ul className="footer-links-list">
            <li><a href="/">Home</a></li>
            <li><a href="/about-us">About Us</a></li>
            <li><a href="/achievements">Achievements</a></li>
            <li><a href="/contact-us">Contact</a></li>
            <li><a href="/resources">Resources</a></li>
          </ul>
        </div>

        <div className="footer-contact">
          <h6>Contact Us</h6>
          <ul className="footer-links-list">
            <li><a href="mailto:contact@voidclub.com">contact@voidclub.com</a></li>
            <li><p>KIET Group of Institutions, Ghaziabad</p></li>
          </ul>
        </div>

        <div className="footer-social">
          <h6>Follow Us</h6>
          <div className="social-icons">
            <a href="https://twitter.com/yourhandle" target="_blank" rel="noopener noreferrer" className="social-icon twitter">T</a>
            <a href="https://linkedin.com/in/yourhandle" target="_blank" rel="noopener noreferrer" className="social-icon linkedin">L</a>
            <a href="https://instagram.com/yourhandle" target="_blank" rel="noopener noreferrer" className="social-icon instagram">I</a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} VOID Security Club. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
