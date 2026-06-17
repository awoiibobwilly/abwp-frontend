import { researchHeroData }
from "../../data/research/researchHeroData";

import "../../styles/research/researchHero.css";

function ResearchHero() {

  return (

    <section className="research-hero section">

      <div className="container">

        <div className="research-hero-content">

          <span className="research-badge">

            {researchHeroData.badge}

          </span>

          <h1>

            {researchHeroData.title}

          </h1>

          <p>

            {researchHeroData.subtitle}

          </p>

        </div>

      </div>

    </section>

  );

}

export default ResearchHero;