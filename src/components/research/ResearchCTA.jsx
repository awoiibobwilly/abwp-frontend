import { NavLink } from "react-router-dom";

import { researchCTAData }
from "../../data/research/researchCTAData";

import "../../styles/research/researchCTA.css";

function ResearchCTA() {

  return (

    <section className="research-cta section">

      <div className="container">

        <div className="research-cta-card">

          <span className="research-cta-badge">

            {researchCTAData.badge}

          </span>

          <h2>

            {researchCTAData.title}

          </h2>

          <p>

            {researchCTAData.subtitle}

          </p>


          <div className="research-cta-buttons">

            <NavLink
              to={researchCTAData.primaryButton.link}
              className="btn btn-primary"
            >

              {researchCTAData.primaryButton.text}

            </NavLink>


            <NavLink
              to={researchCTAData.secondaryButton.link}
              className="btn btn-outline"
            >

              {researchCTAData.secondaryButton.text}

            </NavLink>

          </div>

        </div>

      </div>

    </section>

  );

}

export default ResearchCTA;