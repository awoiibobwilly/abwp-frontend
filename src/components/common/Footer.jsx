import { NavLink } from "react-router-dom";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaArrowUp,
} from "react-icons/fa";

import "../../styles/components/footer.css";

function Footer() {

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="footer">

      <div className="container">

        {/* GRID */}
        <div className="footer-grid">

          {/* BRAND */}
          <div className="footer-brand">

            <h3>Awoii Bob Willy</h3>

            <p className="footer-tagline">
              Bridging Health, Data, and Technology for Impact.
            </p>

            <p className="footer-description">
              Building solutions that create meaningful and
              sustainable change through healthcare, research,
              data, and software engineering.
            </p>

            <div className="footer-socials">

              <a
                href="https://github.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub />
              </a>

              <a
                href="https://linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin />
              </a>

              <a href="mailto:your-email@example.com">
                <FaEnvelope />
              </a>

            </div>

          </div>


          {/* EXPLORE */}
          <div className="footer-links">

            <h4>Explore</h4>

            <NavLink to="/">Home</NavLink>

            <NavLink to="/about">About</NavLink>

            <NavLink to="/journey">Journey</NavLink>

            <NavLink to="/projects">Projects</NavLink>

            <NavLink to="/research">Research</NavLink>

            <NavLink to="/insights">Insights</NavLink>

            <NavLink to="/knowledge-hub">Hub</NavLink>

            <NavLink to="/contact">Contact</NavLink>

          </div>


          {/* EXPERTISE */}
          <div className="footer-expertise">

            <h4>Expertise</h4>

            <span>Software Engineering</span>

            <span>Healthcare Management</span>

            <span>Public Health</span>

            <span>Data Science & Analytics</span>

            <span>Research & Academia</span>

            <span>Leadership & Governance</span>

          </div>


          {/* CONNECT */}
          <div className="footer-connect">

            <h4>Connect</h4>

            <a
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub />

              <span>GitHub</span>
            </a>

            <a
              href="https://linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin />

              <span>LinkedIn</span>
            </a>

            <a href="mailto:your-email@example.com">

              <FaEnvelope />

              <span>Email</span>

            </a>

          </div>

        </div>


        {/* BOTTOM */}
        <div className="footer-bottom">

          <p>
            © {new Date().getFullYear()} Awoii Bob Willy.
            All Rights Reserved.
          </p>

          <button
            className="scroll-top-btn"
            onClick={scrollToTop}
          >
            <FaArrowUp />
          </button>

        </div>

      </div>

    </footer>
  );
}

export default Footer;