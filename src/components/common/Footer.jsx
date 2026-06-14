import { NavLink } from "react-router-dom";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa";

import "../../styles/components/footer.css";

function Footer() {
  return (
    <footer className="footer">

      <div className="container footer-grid">

        {/* About */}
        <div className="footer-column">

          <h3>Awoii Bob Willy</h3>

          <p className="footer-tagline">
            Bridging Health, Data, and Technology for Impact.
          </p>

          <p>
            Building solutions that create meaningful and
            sustainable change through healthcare, research,
            data, and software engineering.
          </p>

        </div>

        {/* Explore */}
        <div className="footer-column">

          <h4>Explore</h4>

          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/journey">Journey</NavLink>
          <NavLink to="/projects">Projects</NavLink>
          <NavLink to="/research">Research</NavLink>
          <NavLink to="/insights">Insights</NavLink>
          <NavLink to="/contact">Contact</NavLink>

        </div>

        {/* Expertise */}
        <div className="footer-column">

          <h4>Expertise</h4>

          <span>Healthcare</span>
          <span>Public Health</span>
          <span>Monitoring & Evaluation</span>
          <span>Data Science</span>
          <span>Software Engineering</span>
          <span>Digital Transformation</span>

        </div>

        {/* Connect */}
        <div className="footer-column">

          <h4>Connect</h4>

          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
            GitHub
          </a>

          <a
            href="https://linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
            LinkedIn
          </a>

          <a href="mailto:your-email@example.com">
            <FaEnvelope />
            Email
          </a>

        </div>

      </div>

      <div className="footer-bottom">

        © {new Date().getFullYear()} Awoii Bob Willy.
        All Rights Reserved.

      </div>

    </footer>
  );
}

export default Footer;