import LeadershipCard from "./LeadershipCard";

import {
  leadershipData,
} from "../../data/cv/leadershipData";

import "../../styles/cv/leadership.css";

function LeadershipSection() {

  return (

    <section className="leadership section">

      <div className="container">

        <div className="leadership-header">

          <span className="leadership-badge">

            Leadership & Governance

          </span>


          <h2 className="section-title">

            Serving Through Leadership

          </h2>


          <p className="section-subtitle">

            Leadership is not merely a position,
            but an opportunity to inspire,
            empower, and create lasting impact
            across organizations and communities.

          </p>

        </div>


        <div className="leadership-grid">

          {leadershipData.map(

            (leadership, index) => (

              <LeadershipCard
                key={index}
                leadership={leadership}
              />

            )

          )}

        </div>

      </div>

    </section>

  );

}

export default LeadershipSection;