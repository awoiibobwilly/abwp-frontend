import ExpertiseCard from "./ExpertiseCard";
import { expertiseData } from "../../data/home/expertiseData";

import "../../styles/home/expertise.css";

function Expertise() {
  return (
    <section className="expertise section">

      <div className="container">

        <div className="section-header">

          <h2 className="section-title">
            My Expertise
          </h2>

          <p className="section-subtitle">
            Building solutions across technology, health,
            data, research, and leadership.
          </p>

        </div>

        <div className="expertise-grid">

          {
            expertiseData.map((item, index) => (
              <ExpertiseCard
                key={index}
                title={item.title}
                description={item.description}
              />
            ))
          }

        </div>

      </div>

    </section>
  );
}

export default Expertise;