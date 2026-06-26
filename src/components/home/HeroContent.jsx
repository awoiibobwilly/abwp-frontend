import { useNavigate } from "react-router-dom";

import { NavLink } from "react-router-dom";


import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa";

import { heroData } from "../../data/home/heroData";

import "../../styles/home/hero-content.css";


function HeroContent() {

  const navigate = useNavigate();

  return (
    <div className="hero-content">

      {/* Greeting */}
      <span className="hero-greeting">
        👋 Hello, I'm
      </span>

      {/* Name */}
      <h1 className="hero-name">
        {heroData.name}
      </h1>

      {/* Tagline */}
      <h2 className="hero-tagline">
        {heroData.tagline}
      </h2>

      {/* Summary */}
      <p className="hero-summary">
        {heroData.summary}
      </p>

      {/* Buttons */}
      <div className="hero-buttons">

          <NavLink
          to="/projects"
          className="btn btn-primary"
        >
          View My Projects
        </NavLink>

        <a
          href="/documents/awoii-bob-willy-cv.pdf"
          download
          className="btn btn-secondary"
        >
          Download CV
        </a>

          <NavLink
          to="/contact"
          className="hero-text-link"
        >
          Let's Talk
          <span>→</span>
        </NavLink>

      </div>

      {/* Social Icons */}
      <div className="hero-socials">

        <a href="#">
          <FaLinkedin />
        </a>

        <a href="#">
          <FaGithub />
        </a>

        <a href="#">
          <FaEnvelope />
        </a>

      </div>

    </div>
  );
}

export default HeroContent;