import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import Logo from "../assets/logo.jpg.png"; // Import the logo image

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">
          {/* Use the imported Logo as the source in an <img> tag */}
          <img src={Logo} alt="Logo" className="logo-image" />
        </Link>
      </div>
      <button className="navbar-toggle" onClick={toggleNavbar}>
        ☰
      </button>
      <ul className={`navbar-links ${isOpen ? "active" : ""}`}>
      <li><Link to="/home" onClick={toggleNavbar}>Home</Link></li>
      <li><Link to="/services" onClick={toggleNavbar}>Services</Link></li>
        <li><Link to="/appointments" onClick={toggleNavbar}>Appointment</Link></li>
        <li><Link to="/dashboard" onClick={toggleNavbar}>Dashboard</Link></li>
        <li><Link to="/login" onClick={toggleNavbar}>Login</Link></li>
        <li> <Link to="/register">Register</Link> </li>
      </ul>
    </nav>
  );
}

export default Navbar;
