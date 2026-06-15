import {
  FaGithub,
  FaLinkedin,
  FaEnvelope
} from "react-icons/fa";

import { heroData } from "../../data/heroData";

import "../../styles/home/hero-content.css";

function HeroContent() {
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

        <button className="btn btn-primary">
          Explore Portfolio
        </button>

        <button className="btn btn-secondary">
          Download CV
        </button>

        <button className="btn btn-outline">
          Contact Me
        </button>

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