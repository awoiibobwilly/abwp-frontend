import { researchAreasData }
from "../../data/research/researchAreasData";

import ResearchAreaCard from "./ResearchAreaCard";

import "../../styles/research/researchAreas.css";

function ResearchAreas() {

  return (

    <section className="research-areas section">

      <div className="container">

        <div className="research-header">

          <span className="research-section-badge">

            Areas of Inquiry

          </span>

          <h2 className="section-title">

            Research Domains

          </h2>

          <p className="section-subtitle">

            Investigating healthcare, public health,
            digital transformation, and emerging technologies
            through evidence-based approaches.

          </p>

        </div>


        <div className="research-grid">

          {researchAreasData.map((area, index) => (

            <ResearchAreaCard
              key={index}
              area={area}
            />

          ))}

        </div>

      </div>

    </section>

  );

}

export default ResearchAreas;