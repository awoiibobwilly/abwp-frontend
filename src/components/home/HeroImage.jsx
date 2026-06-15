import { heroData } from "../../data/heroData";

import "../../styles/home/hero-content.css";

function HeroContent() {
  return (
    <div className="hero-content">

      <span className="hero-greeting">
        {heroData.greeting}
      </span>

      <h1 className="hero-name">
        {heroData.name}
      </h1>

      <h2 className="hero-tagline">
        {heroData.tagline}
      </h2>

      <p className="hero-summary">
        {heroData.summary}
      </p>

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

    </div>
  );
}

export default HeroContent;