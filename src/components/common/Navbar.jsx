import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "../../styles/components/navbar.css";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className={`navbar-wrapper ${scrolled ? "scrolled" : ""}`}>
      <div className="container navbar-container">

        {/* Logo */}
        <NavLink to="/" className="logo" onClick={closeMenu}>
          ABWP
        </NavLink>

        {/* Navigation */}
        <nav className={`nav-menu ${menuOpen ? "active" : ""}`}>

          <NavLink to="/" onClick={closeMenu}>
            Home
          </NavLink>

          <NavLink to="/about" onClick={closeMenu}>
            About
          </NavLink>

          <NavLink to="/journey" onClick={closeMenu}>
            Journey
          </NavLink>

          <NavLink to="/projects" onClick={closeMenu}>
            Projects
          </NavLink>

          <NavLink to="/research" onClick={closeMenu}>
            Research
          </NavLink>

          <NavLink to="/insights" onClick={closeMenu}>
            Insights
          </NavLink>

          <NavLink to="/cv" onClick={closeMenu}>
            CV
          </NavLink>

          <NavLink to="/contact" onClick={closeMenu}>
            Contact
          </NavLink>

        </nav>

        {/* Download CV */}
        <a
          href="/documents/cv.pdf"
          className="btn-cv"
          target="_blank"
          rel="noopener noreferrer"
        >
          Download CV
        </a>

        {/* Mobile Toggle */}
        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>

      </div>
    </header>
  );
}

export default Navbar;