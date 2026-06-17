import { achievementsData }
from "../../data/about/achievementsData";

import "../../styles/about/achievements.css";

function Achievements() {
  return (
    <section className="achievements section">

      <div className="container">

        {/* Header */}

        <div className="achievements-header">

          <span className="achievements-badge">
            Highlights & Achievements
          </span>

          <h2 className="section-title">
            Impact Across Multiple Disciplines
          </h2>

          <p className="section-subtitle">
            A journey characterized by service,
            innovation, leadership, and lifelong learning.
          </p>

        </div>


        {/* Grid */}

        <div className="achievements-grid">

          {achievementsData.map((item, index) => (

            <div
              className="achievement-card"
              key={index}
            >

              <div className="achievement-number">
                {item.number}
              </div>

              <h3>
                {item.title}
              </h3>

              <p>
                {item.description}
              </p>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Achievements;