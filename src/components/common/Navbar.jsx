import { useState } from "react";
import { NavLink } from "react-router-dom";
import { HiMenu, HiX } from "react-icons/hi";

import { useNavigate } from "react-router-dom";


import logo from "../../assets/images/abwp-logo-one.png";


import "../../styles/components/navbar.css";

function Navbar() {

  const navigate = useNavigate();

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="navbar">

      <div className="container navbar-container">

        {/* Logo */}

          <NavLink
            to="/"
            className="logo"
          >

            <img
              src={logo}
              alt="Awoii Bob Willy Logo"
              className="logo-image"
            />

            <span className="logo-text">

              Awoii Bob Willy

            </span>

          </NavLink>

        {/* Desktop Navigation */}
        <nav className="nav-links">

          <NavLink to="/">Home</NavLink>

          <NavLink to="/about">About</NavLink>

          <NavLink to="/journey">Journey</NavLink>

          <NavLink to="/projects">Projects</NavLink>

          <NavLink to="/research">Research</NavLink>

          <NavLink to="/insights">Insights</NavLink>

          <NavLink to="/knowledge-hub"> The Hub</NavLink>

          <NavLink to="/contact">Contact</NavLink>

          <NavLink to="/cv">CV</NavLink>

        </nav>

        {/* Download CV */}
         <a
          href="/documents/awoii-bob-willy-cv.pdf"
          download
          className="btn btn-primary"
        >
          Download CV
        </a>

        {/* Mobile Toggle */}
        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <HiX /> : <HiMenu />}
        </button>

      </div>

      {/* Mobile Menu */}

      <div className={`mobile-menu ${menuOpen ? "active" : ""}`}>

        <NavLink to="/" onClick={() => setMenuOpen(false)}>
          Home
        </NavLink>

        <NavLink to="/about" onClick={() => setMenuOpen(false)}>
          About
        </NavLink>

        <NavLink to="/journey" onClick={() => setMenuOpen(false)}>
          Journey
        </NavLink>

        <NavLink to="/projects" onClick={() => setMenuOpen(false)}>
          Projects
        </NavLink>

        <NavLink to="/research" onClick={() => setMenuOpen(false)}>
          Research
        </NavLink>

        <NavLink to="/insights" onClick={() => setMenuOpen(false)}>
          Insights
        </NavLink>

        <NavLink to="/knowledge-hub" onClick={() => setMenuOpen(false)}>
          Hub
        </NavLink>

        <NavLink to="/contact" onClick={() => setMenuOpen(false)}>
          Contact
        </NavLink>

        <NavLink to="/cv" onClick={() => setMenuOpen(false)}>
          CV
        </NavLink>

        <a
          href="/documents/awoii-bob-willy-cv.pdf"
          download
          className="btn btn-secondary"
        >
          Download CV
        </a>

      </div>

    </header>
  );
}

export default Navbar;