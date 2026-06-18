import { insightsHeroData }
from "../../data/insights/insightsHeroData";

import "../../styles/insights/insightsHero.css";

function InsightsHero() {

  return (

    <section className="insights-hero section">

      <div className="container">

        <div className="insights-hero-content">

          <span className="insights-badge">

            {insightsHeroData.badge}

          </span>

          <h1>

            {insightsHeroData.title}

          </h1>

          <p>

            {insightsHeroData.subtitle}

          </p>

        </div>

      </div>

    </section>

  );

}

export default InsightsHero;