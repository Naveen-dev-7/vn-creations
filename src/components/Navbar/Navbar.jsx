import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.svg";
import "./Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="container nav-inner">

        {/* Brand */}
        <div className="brand">
          <a href="#home"><img src={logo} alt="VN Creations Logo" /></a>
          <span>VN Creations</span>
        </div>

        {/* Navigation */}
        <nav className={`nav-links ${menuOpen ? "active" : ""}`}>
          <a href="#services" onClick={() => setMenuOpen(false)}>Services</a>
          <a href="#work" onClick={() => setMenuOpen(false)}>Work</a>
          <a href="#process" onClick={() => setMenuOpen(false)}>Process</a>
          <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
          <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
        </nav>

        {/* CTA */}
        <a href="#contact" className="cta-btn" onClick={() => setMenuOpen(false)}>
  Let’s Talk
</a>


        {/* Mobile */}
        <div
          className="hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </div>

      </div>
    </header>
  );
};

export default Navbar;
