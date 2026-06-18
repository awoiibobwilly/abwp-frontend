import { NavLink } from "react-router-dom";

import { insightsCTAData }
from "../../data/insights/insightsCTAData";

import "../../styles/insights/insightsCTA.css";

function InsightsCTA() {

  return (

    <section className="insights-cta section">

      <div className="container">

        <div className="insights-cta-card">

          <span className="insights-cta-badge">

            {insightsCTAData.badge}

          </span>


          <h2>

            {insightsCTAData.title}

          </h2>


          <p>

            {insightsCTAData.subtitle}

          </p>


          <div className="insights-cta-buttons">

            <NavLink
              to={insightsCTAData.primaryButton.link}
              className="btn btn-primary"
            >

              {insightsCTAData.primaryButton.text}

            </NavLink>


            <NavLink
              to={insightsCTAData.secondaryButton.link}
              className="btn btn-outline"
            >

              {insightsCTAData.secondaryButton.text}

            </NavLink>

          </div>

        </div>

      </div>

    </section>

  );

}

export default InsightsCTA;