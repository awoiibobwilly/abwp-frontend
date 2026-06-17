import { technologiesData }
from "../../data/projects/technologiesData";

import TechGroup from "./TechGroup";

import "../../styles/projects/technologiesCloud.css";

function TechnologiesCloud() {

  return (

    <section className="technologies section">

      <div className="container">

        <div className="technologies-header">

          <span className="technologies-badge">

            Technology Ecosystem

          </span>

          <h2 className="section-title">

            Tools & Technologies

          </h2>

          <p className="section-subtitle">

            A growing ecosystem of technologies used
            to build scalable and impactful solutions.

          </p>

        </div>


        <div className="technologies-grid">

          {technologiesData.map((group, index) => (

            <TechGroup
              key={index}
              group={group}
            />

          ))}

        </div>

      </div>

    </section>

  );

}

export default TechnologiesCloud;