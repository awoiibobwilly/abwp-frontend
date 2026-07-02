import { NavLink } from "react-router-dom";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaArrowUp,
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
  FaPhoneAlt,
} from "react-icons/fa";

import logo from "../../assets/images/abwp-logo-two.png";

import "../../styles/components/footer.css";

function Footer() {
  // ==========================================
  // Contact & Social Configuration
  // ==========================================

  const contact = {
    phoneDisplay: "+256 774 616 406",
    phoneHref: "tel:+256774616406",

    emailDisplay: "awoiibobwilly@gmail.com",
    emailHref: "mailto:awoiibobwilly@gmail.com",

    whatsappDisplay: "Chat on WhatsApp",
    whatsappHref: "https://wa.me/256774616406",
  };

  const socialLinks = [
    {
      name: "GitHub",
      href: "https://github.com/awoiibobwilly",
      icon: <FaGithub />,
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/bob-willy-awoii-ab883b75?utm_source=share_via&utm_content=profile&utm_medium=member_ios",
      icon: <FaLinkedin />,
    },
    {
      name: "Facebook",
      href: "https://www.facebook.com/bob.w.awoii?mibextid=LQQJ4d",
      icon: <FaFacebookF />,
    },
    {
      name: "Instagram",
      href: "https://www.instagram.com/bobawoii?igsh=OGQ5ZDc2ODk2ZA%3D%3D&utm_source=qr",
      icon: <FaInstagram />,
    },
    {
      name: "WhatsApp",
      href: contact.whatsappHref,
      icon: <FaWhatsapp />,
    },
  ];

  // ==========================================
  // Scroll to Top
  // ==========================================

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // ==========================================
  // Component
  // ==========================================

  return (
    <footer className="footer">
      <div className="container">
        {/* ======================================
            FOOTER GRID
        ======================================= */}
        <div className="footer-grid">
          {/* ======================================
              BRAND
          ======================================= */}
          <div className="footer-brand">
            <div className="footer-logo">
              <img
                src={logo}
                alt="Awoii Bob Willy Logo"
                className="footer-logo-image"
              />

              <h3>Awoii Bob Willy</h3>
            </div>

            <p className="footer-tagline">
              Bridging Health, Data, and Technology for Impact.
            </p>

            <p className="footer-description">
              Building solutions that create meaningful and
              sustainable change through healthcare, research,
              data, and software engineering.
            </p>

            {/* ==================================
                SOCIALS
            =================================== */}
            <div className="footer-socials">
              {socialLinks.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={item.name}
                  title={item.name}
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </div>

          {/* ======================================
              EXPLORE
          ======================================= */}
          <div className="footer-links">
            <h4>Explore</h4>

            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/journey">Journey</NavLink>
            <NavLink to="/projects">Projects</NavLink>
            <NavLink to="/research">Research</NavLink>
            <NavLink to="/insights">Insights</NavLink>
            <NavLink to="/knowledge-hub">The Hub</NavLink>
            <NavLink to="/contact">Contact</NavLink>
          </div>

          {/* ======================================
              EXPERTISE
          ======================================= */}
          <div className="footer-expertise">
            <h4>Expertise</h4>

            <span>Software Engineering</span>
            <span>Healthcare Management</span>
            <span>Public Health</span>
            <span>Data Science & Analytics</span>
            <span>Research & Academia</span>
            <span>Leadership & Governance</span>
          </div>

          {/* ======================================
              CONNECT
          ======================================= */}
          <div className="footer-connect">
            <h4>Connect</h4>

            <a href={contact.phoneHref}>
              <FaPhoneAlt />
              <span>{contact.phoneDisplay}</span>
            </a>

            <a href={contact.emailHref}>
              <FaEnvelope />
              <span>{contact.emailDisplay}</span>
            </a>

            <a
              href={contact.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp />
              <span>{contact.whatsappDisplay}</span>
            </a>
          </div>
        </div>

        {/* ======================================
            FOOTER BOTTOM
        ======================================= */}
        <div className="footer-bottom">
          <div className="footer-bottom-text">
            <p>
              © {new Date().getFullYear()} Awoii Bob Willy.
              All Rights Reserved.
            </p>

            <p className="footer-credit">
              Designed, Developed, and Maintained By:
            </p>

            <p className="footer-credit-name">
              Awoii Tech Systems
            </p>
          </div>

          <button
            className="scroll-top-btn"
            onClick={scrollToTop}
            aria-label="Scroll to top"
            title="Back to top"
          >
            <FaArrowUp />
          </button>
        </div>
      </div>
    </footer>
  );
}

export default Footer;