import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer>
      <div className="footer-content">
        <div className="footer-links">
          <Link to="/" className="footer-link">
            Home
          </Link>
          <Link to="/contact" className="footer-link">
            Contact
          </Link>
          <Link to="/privacy" className="footer-link">
            Privacy Policy
          </Link>{" "}
        </div>
        <p>© 2024 Beacon Consulting and Advisory LLC. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
