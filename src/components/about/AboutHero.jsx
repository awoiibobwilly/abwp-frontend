import AboutHeroContent from "./AboutHeroContent";
import AboutHeroImage from "./AboutHeroImage";

import "../../styles/about/aboutHero.css";

function AboutHero() {
  return (
    <section className="about-hero section">

      <div className="container">

        <div className="about-hero-wrapper">

          <div className="about-hero-left">
            <AboutHeroContent />
          </div>

          <div className="about-hero-right">
            <AboutHeroImage />
          </div>

        </div>

      </div>

    </section>
  );
}

export default AboutHero;