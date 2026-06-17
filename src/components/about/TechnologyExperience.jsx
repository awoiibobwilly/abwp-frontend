import { technologyExperienceData }
from "../../data/about/technologyExperienceData";

import "../../styles/about/technologyExperience.css";

function TechnologyExperience() {
  return (
    <section className="technology section">

      <div className="container">

        <div className="technology-header">

          <span className="technology-badge">
            Technology Experience
          </span>

          <h2 className="section-title">
            Building Solutions Through
            Engineering and Innovation
          </h2>

          <p className="section-subtitle">
            My technology journey focuses on software
            engineering, digital transformation, and
            leveraging innovation to create meaningful impact.
          </p>

        </div>


        <div className="technology-grid">

          {technologyExperienceData.map((item, index) => (

            <div
              className="technology-card"
              key={index}
            >

              <h3>{item.title}</h3>

              <h4>{item.organization}</h4>

              <p>{item.description}</p>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default TechnologyExperience;