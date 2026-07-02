import aboutHeroData from "../../data/about/aboutHeroData";

import AboutHeroContent from "./AboutHeroContent";
import AboutHeroImage from "./AboutHeroImage";

import "../../styles/about/about-hero.css";

function AboutHero() {
  return (
    <section
      className="about-hero section"
      id={aboutHeroData.sectionId}
    >
      <div className="container">
        <div className="about-hero-grid">

          {/* ======================================
              LEFT CONTENT
          ======================================= */}
          <AboutHeroContent hero={aboutHeroData} />

          {/* ======================================
              RIGHT IMAGE
          ======================================= */}
          <AboutHeroImage image={aboutHeroData.image} />

        </div>
      </div>
    </section>
  );
}

export default AboutHero;