import { professionalSummaryData } from "../../data/about/professionalSummaryData";

import "../../styles/about/professionalSummary.css";

function ProfessionalSummary() {
  return (
    <section className="professional-summary section">

      <div className="container">

        <div className="summary-header">

          <span className="summary-badge">
            Professional Summary
          </span>

          <h2 className="section-title">
            Bringing Together Health, Research,
            Leadership, and Technology.
          </h2>

          <p className="section-subtitle">
            My career journey spans multiple disciplines,
            united by a commitment to creating meaningful
            and sustainable impact through innovation,
            knowledge, and service.
          </p>

        </div>


        <div className="summary-grid">

          {professionalSummaryData.map((item, index) => (

            <div
              className="summary-card"
              key={index}
            >

              <h3>{item.title}</h3>

              <p>{item.description}</p>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default ProfessionalSummary;