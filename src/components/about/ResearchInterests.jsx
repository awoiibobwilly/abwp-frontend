import { researchInterestsData }
from "../../data/about/researchInterestsData";

import "../../styles/about/researchInterests.css";

function ResearchInterests() {
  return (
    <section className="research-interests section">

      <div className="container">

        <div className="research-header">

          <span className="research-badge">
            Research Interests
          </span>

          <h2 className="section-title">
            Areas That Inspire My Curiosity
          </h2>

          <p className="section-subtitle">
            I am passionate about exploring ideas and
            technologies that can transform healthcare,
            research, leadership, and society through
            innovation and evidence-driven solutions.
          </p>

        </div>


        <div className="research-tags">

          {researchInterestsData.map((item, index) => (

            <div
              className="research-tag"
              key={index}
            >
              {item}
            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default ResearchInterests;