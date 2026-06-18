import PublicationCard from "./PublicationCard";

import {
  researchData,
} from "../../data/cv/researchData";

import "../../styles/cv/researchSection.css";

function ResearchSection() {

  return (

    <section className="research-section section">

      <div className="container">

        <div className="research-header">

          <span className="research-badge">

            Research & Publications

          </span>


          <h2 className="section-title">

            Advancing Knowledge Through Research

          </h2>


          <p className="section-subtitle">

            A commitment to evidence-based practice,
            scientific inquiry, and multidisciplinary
            innovation across healthcare, public health,
            leadership, and technology.

          </p>

        </div>


        <div className="publication-grid">

          {researchData.map(

            (publication, index) => (

              <PublicationCard
                key={index}
                publication={publication}
              />

            )

          )}

        </div>

      </div>

    </section>

  );

}

export default ResearchSection;