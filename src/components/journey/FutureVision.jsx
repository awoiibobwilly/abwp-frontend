import { futureVisionData }
from "../../data/journey/futureVisionData";

import "../../styles/journey/futureVision.css";

function FutureVision() {
  return (
    <section className="future-vision section">

      <div className="container">

        <div className="future-header">

          <span className="future-badge">
            Looking Ahead
          </span>

          <h2 className="section-title">
            Building the Future with Purpose
          </h2>

          <p className="section-subtitle">
            My journey continues with a commitment to
            healthcare transformation, research,
            leadership, and digital innovation.
          </p>

        </div>


        <div className="future-grid">

          {futureVisionData.map((item, index) => {

            const Icon = item.icon;

            return (

              <div
                className="future-card"
                key={index}
              >

                <div className="future-icon">

                  <Icon />

                </div>

                <h3>
                  {item.title}
                </h3>

                <p>
                  {item.description}
                </p>

              </div>

            );

          })}

        </div>

      </div>

    </section>
  );
}

export default FutureVision;