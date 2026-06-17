import { NavLink } from "react-router-dom";

import { journeyCTAData }
from "../../data/journey/journeyCTAData";

import "../../styles/journey/journeyCTA.css";

function JourneyCTA() {

  return (
    <section className="journey-cta section">

      <div className="container">

        <div className="journey-cta-card">

          <span className="journey-cta-badge">
            {journeyCTAData.badge}
          </span>

          <h2>
            {journeyCTAData.title}
          </h2>

          <p>
            {journeyCTAData.subtitle}
          </p>

          <div className="journey-cta-buttons">

            <NavLink
              to={journeyCTAData.primaryButton.link}
              className="btn btn-primary"
            >
              {journeyCTAData.primaryButton.text}
            </NavLink>

            <NavLink
              to={journeyCTAData.secondaryButton.link}
              className="btn btn-outline"
            >
              {journeyCTAData.secondaryButton.text}
            </NavLink>

          </div>

        </div>

      </div>

    </section>
  );
}

export default JourneyCTA;