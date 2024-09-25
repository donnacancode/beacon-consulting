import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <div className="header-content">
        <Link to="/" className="brand-logo">
          <img
            src="/logo.png"
            alt="Beacon Consulting Logo"
            className="logo-image"
          />
        </Link>
        <nav className="navbar">
          <Link to="/about-us" className="nav-link">
            About Us
          </Link>
          <Link to="/services" className="nav-link">
            Services
          </Link>
          <Link to="/contact" className="nav-link">
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
