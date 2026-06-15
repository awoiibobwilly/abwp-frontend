import { useState } from "react";
import { NavLink } from "react-router-dom";
import { HiMenu, HiX } from "react-icons/hi";

import "../../styles/components/navbar.css";

function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="navbar">

      <div className="container navbar-container">

        {/* Logo */}
        <NavLink to="/" className="logo">
          ABWP
        </NavLink>

        {/* Desktop Menu */}
        <nav className="nav-links">

          <NavLink to="/">Home</NavLink>

          <NavLink to="/about">About</NavLink>

          <NavLink to="/journey">Journey</NavLink>

          <NavLink to="/projects">Projects</NavLink>

          <NavLink to="/research">Research</NavLink>

          <NavLink to="/insights">Insights</NavLink>

          <NavLink to="/contact">Contact</NavLink>

        </nav>

        {/* CV Button */}
        <a
          href="#"
          className="cv-button"
        >
          Download CV
        </a>

        {/* Mobile Toggle */}
        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {
  menuOpen
    ? <HiX />
    : <HiMenu />
}
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

        <NavLink to="/contact" onClick={() => setMenuOpen(false)}>
          Contact
        </NavLink>

      </div>

    </header>
  );
}

export default Navbar;