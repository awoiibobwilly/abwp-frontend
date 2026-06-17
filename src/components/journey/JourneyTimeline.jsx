import { journeyTimelineData }
from "../../data/journey/journeyTimelineData";

import JourneyCard from "./JourneyCard";

import "../../styles/journey/journeyTimeline.css";

function JourneyTimeline() {

  return (

    <section className="journey-timeline section">

      <div className="container">

        <div className="timeline-header">

          <span className="timeline-badge">
            Journey Timeline
          </span>

          <h2 className="section-title">
            Milestones That Shaped My Path
          </h2>

          <p className="section-subtitle">
            Every chapter has contributed to a
            broader mission of service, leadership,
            innovation, and impact.
          </p>

        </div>


        <div className="timeline">

          {journeyTimelineData.map((item, index) => (

            <JourneyCard
              key={index}
              item={item}
              index={index}
            />

          ))}

        </div>

      </div>

    </section>

  );

}

export default JourneyTimeline;