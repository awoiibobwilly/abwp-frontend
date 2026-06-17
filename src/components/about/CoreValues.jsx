import { coreValuesData }
from "../../data/about/coreValuesData";

import "../../styles/about/coreValues.css";

function CoreValues() {
  return (
    <section className="core-values section">

      <div className="container">

        {/* Header */}

        <div className="core-values-header">

          <span className="core-values-badge">
            Core Values
          </span>

          <h2 className="section-title">
            Principles That Guide My Journey
          </h2>

          <p className="section-subtitle">
            These values shape my work, leadership,
            relationships, and commitment to creating
            meaningful impact.
          </p>

        </div>


        <div className="core-values-grid">

          {coreValuesData.map((value, index) => {

            const Icon = value.icon;

            return (

              <div
                className="core-value"
                key={index}
              >

                <div className="core-value-icon">

                  <Icon />

                </div>

                <h3>
                  {value.title}
                </h3>

                <p>
                  {value.description}
                </p>

              </div>

            );

          })}

        </div>

      </div>

    </section>
  );
}

export default CoreValues;