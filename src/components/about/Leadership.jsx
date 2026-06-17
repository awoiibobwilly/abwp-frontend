import { leadershipData } from "../../data/about/leadershipData";

import "../../styles/about/leadership.css";

function Leadership() {
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
            Leadership has been a central part of my journey,
            enabling me to guide organizations, mentor teams,
            and create lasting impact.
          </p>

        </div>


        <div className="leadership-timeline">

          {leadershipData.map((item, index) => (

            <div
              className="leadership-item"
              key={index}
            >

              <div className="leadership-dot"></div>

              <div className="leadership-content">

                <h3>
                  {item.role}
                </h3>

                <h4>
                  {item.organization}
                </h4>

                <p>
                  {item.description}
                </p>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Leadership;