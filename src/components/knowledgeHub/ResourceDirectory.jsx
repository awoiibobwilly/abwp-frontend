import ResourceDirectoryCard from "./ResourceDirectoryCard";

import {
  linksData,
} from "../../data/knowledgeHub/linksData";

import "../../styles/knowledgeHub/resourceDirectory.css";

function ResourceDirectory() {

  return (

    <section className="resource-directory section">

      <div className="container">

        <div className="resource-directory-header">

          <span className="resource-directory-badge">

            Resource Directory

          </span>


          <h2 className="section-title">

            Trusted Platforms and Organizations

          </h2>


          <p className="section-subtitle">

            Discover globally recognized organizations,
            repositories, journals, and learning platforms
            supporting healthcare, research, leadership,
            and technology.

          </p>

        </div>


        <div className="resource-directory-grid">

          {linksData.map(

            (resource, index) => (

              <ResourceDirectoryCard
                key={index}
                resource={resource}
              />

            )

          )}

        </div>

      </div>

    </section>

  );

}

export default ResourceDirectory;