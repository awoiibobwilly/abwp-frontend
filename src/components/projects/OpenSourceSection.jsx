import ContributionCard from "./ContributionCard";
import "../../styles/projects/openSource.css";



function OpenSourceSection({
  intro,
  stats = [],
  items = [],
}) {
  return (
    <section className="open-source section">
      <div className="container">
        <div className="open-source-header">
          <span className="open-source-badge">
            {intro?.eyebrow || "Collaboration & Contributions"}
          </span>

          <h2 className="section-title">
            {intro?.title || "Beyond Projects"}
          </h2>

          <p className="section-subtitle">
            {intro?.intro ||
              "A commitment to collaboration, innovation, research dissemination, and lifelong learning."}
          </p>
        </div>

        <div className="contribution-stats">
          {stats.map((stat, index) => (
            <div
              className="stat-card"
              key={stat.id || index}
            >
              <h3>{stat.value}</h3>
              <p>{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="contribution-grid">
          {items.map((item, index) => (
            <ContributionCard
              key={item.id || index}
              item={item}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default OpenSourceSection;