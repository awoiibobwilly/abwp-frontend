import {
  FaHeartbeat,
  FaFlask,
  FaLaptopCode,
  FaUsersCog,
  FaChartLine,
  FaSeedling,
} from "react-icons/fa";

import "../../styles/journey/futureVision.css";

// ==========================================================
// FUTURE VISION
// JOURNEY PAGE
// ABW PORTFOLIO
// ==========================================================

const iconMap = {
  healthcare: FaHeartbeat,
  research: FaFlask,
  technology: FaLaptopCode,
  leadership: FaUsersCog,
  business: FaChartLine,
  growth: FaSeedling,
};

function FutureVision({ intro, items = [] }) {
  return (
    <section className="future-vision section">
      <div className="container">
        <div className="future-header">
          {intro?.eyebrow && (
            <span className="future-badge">
              {intro.eyebrow}
            </span>
          )}

          {intro?.title && (
            <h2 className="section-title">
              {intro.title}
            </h2>
          )}

          {intro?.intro && (
            <p className="section-subtitle">
              {intro.intro}
            </p>
          )}
        </div>

        <div className="future-grid">
          {items.map((item, index) => {
            const Icon = iconMap[item.icon] || FaSeedling;

            return (
              <div
                className="future-card"
                key={item.id || index}
              >
                <div className="future-icon">
                  <Icon />
                </div>

                <h3>{item.title}</h3>

                <p>{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default FutureVision;