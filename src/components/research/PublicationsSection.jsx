import { publicationsData }
from "../../data/research/publicationsData";

import PublicationCard from "./PublicationCard";

import "../../styles/research/publications.css";

function PublicationsSection() {

  return (

    <section className="publications section">

      <div className="container">

        <div className="publications-header">

          <span className="publications-badge">

            Publications & Articles

          </span>

          <h2 className="section-title">

            Knowledge Shared Through Research

          </h2>

          <p className="section-subtitle">

            Publications, technical reports,
            conference papers, and scholarly insights
            focused on creating meaningful impact.

          </p>

        </div>


        <div className="publications-grid">

          {publicationsData.map((publication, index) => (

            <PublicationCard
              key={index}
              publication={publication}
            />

          ))}

        </div>

      </div>

    </section>

  );

}

export default PublicationsSection;