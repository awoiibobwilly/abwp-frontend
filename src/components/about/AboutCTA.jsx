import { NavLink } from "react-router-dom";

import { aboutCTAData }
from "../../data/about/aboutCTAData";

import "../../styles/about/aboutCTA.css";

function AboutCTA() {
  return (
    <section className="about-cta section">

      <div className="container">

        <div className="about-cta-card">

          <span className="about-cta-badge">
            {aboutCTAData.badge}
          </span>

          <h2>
            {aboutCTAData.title}
          </h2>

          <p>
            {aboutCTAData.subtitle}
          </p>

          <div className="about-cta-buttons">

            <NavLink
              to={aboutCTAData.primaryButton.link}
              className="btn btn-primary"
            >
              {aboutCTAData.primaryButton.text}
            </NavLink>

            <NavLink
              to={aboutCTAData.secondaryButton.link}
              className="btn btn-outline"
            >
              {aboutCTAData.secondaryButton.text}
            </NavLink>

          </div>

        </div>

      </div>

    </section>
  );
}

export default AboutCTA;