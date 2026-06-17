import JourneyCard from "./JourneyCard";
import { journeyData } from "../../data/home/journeyData";

import "../../styles/home/journey-preview.css";

function Journey() {
  return (
    <section className="journey section">

      <div className="container">

        <div className="section-header">

          <h2 className="section-title">
            Professional Journey
          </h2>

          <p className="section-subtitle">
            A timeline of education, leadership,
            research, technology, and impact.
          </p>

        </div>

        <div className="journey-timeline">

          {
            journeyData.map((item, index) => (
              <JourneyCard
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

export default Journey;