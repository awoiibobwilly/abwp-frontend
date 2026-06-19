import PublicationCard from "./PublicationCard";

import {
  publicationsData,
} from "../../data/knowledgeHub/publicationsData";

import "../../styles/knowledgeHub/publicationsArchive.css";

function PublicationsArchive() {

  return (

    <section className="publications-archive section">

      <div className="container">

        <div className="publications-header">

          <span className="publications-badge">

            Publications Archive

          </span>


          <h2 className="section-title">

            Research and Scholarly Contributions

          </h2>


          <p className="section-subtitle">

            A collection of journal articles,
            conference papers, reports, and
            scholarly contributions supporting
            evidence-based practice and innovation.

          </p>

        </div>


        <div className="publications-grid">

          {publicationsData.map(

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

export default PublicationsArchive;