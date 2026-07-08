import TechGroup from "./TechGroup";
import "../../styles/projects/technologiesCloud.css";

function TechnologiesCloud({ intro, technologyGroups = [] }) {
  return (
    <section className="technologies section">
      <div className="container">
        <div className="technologies-header">
          <span className="technologies-badge">
            {intro?.eyebrow || "Technology Ecosystem"}
          </span>

          <h2 className="section-title">
            {intro?.title || "Tools & Technologies"}
          </h2>

          <p className="section-subtitle">
            {intro?.intro ||
              "A growing ecosystem of technologies used to build scalable and impactful solutions."}
          </p>
        </div>

        <div className="technologies-grid">
          {technologyGroups.map((group, index) => (
            <TechGroup
              key={group.id || index}
              group={group}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default TechnologiesCloud;