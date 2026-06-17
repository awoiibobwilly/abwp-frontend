import ResearchCard from "./ResearchCard";
import { researchData } from "../../data/home/researchData";

import "../../styles/home/research.css";

function Research() {
  return (
    <section className="research section">

      <div className="container">

        <div className="section-header">

          <h2 className="section-title">
            Research & Publications
          </h2>

          <p className="section-subtitle">
            Exploring the intersection of health,
            data, technology, and evidence-based
            solutions.
          </p>

        </div>

        <div className="research-grid">

          {
            researchData.map((item, index) => (
              <ResearchCard
                key={index}
                {...item}
              />
            ))
          }

        </div>

      </div>

    </section>
  );
}

export default Research;