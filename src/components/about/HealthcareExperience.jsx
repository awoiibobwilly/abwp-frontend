import { healthcareExperienceData }
from "../../data/about/healthcareExperienceData";

import "../../styles/about/healthcareExperience.css";

function HealthcareExperience() {
  return (
    <section className="healthcare section">

      <div className="container">

        <div className="healthcare-header">

          <span className="healthcare-badge">
            Healthcare Experience
          </span>

          <h2 className="section-title">
            Advancing Health Through Service,
            Research, and Leadership
          </h2>

          <p className="section-subtitle">
            My healthcare journey combines clinical practice,
            public health, monitoring and evaluation, and
            organizational leadership to improve lives and
            strengthen systems.
          </p>

        </div>


        <div className="healthcare-grid">

          {healthcareExperienceData.map((item, index) => (

            <div
              className="healthcare-card"
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

export default HealthcareExperience;