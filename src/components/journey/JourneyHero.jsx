import { journeyHeroData }
from "../../data/journey/journeyHeroData";

import "../../styles/journey/journeyHero.css";

function JourneyHero() {
  return (
    <section className="journey-hero section">

      <div className="container">

        <div className="journey-hero-content">

          <span className="journey-badge">
            {journeyHeroData.badge}
          </span>

          <h1>
            {journeyHeroData.title}
          </h1>

          <p>
            {journeyHeroData.subtitle}
          </p>

        </div>

      </div>

    </section>
  );
}

export default JourneyHero;