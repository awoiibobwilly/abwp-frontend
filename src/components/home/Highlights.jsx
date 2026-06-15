import HighlightCard from "./HighlightCard";
import { highlightData } from "../../data/highlightData";

import "../../styles/home/highlights.css";

function Highlights() {
  return (
    <section className="highlights section">

      <div className="container">

        <div className="section-header">

          <h2 className="section-title">
            Highlights
          </h2>

          <p className="section-subtitle">
            A multidisciplinary professional committed to
            technology, healthcare, research, and impact.
          </p>

        </div>

        <div className="highlights-grid">

          {
            highlightData.map((item, index) => (
              <HighlightCard
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

export default Highlights;