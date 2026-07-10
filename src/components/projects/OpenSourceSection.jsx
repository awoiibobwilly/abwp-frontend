import ContributionCard from "./ContributionCard";
import "../../styles/projects/openSource.css";

// ==========================================================
// OPEN SOURCE / BEYOND PROJECTS
// PROJECTS PAGE
// FINAL BALANCE PASS
// ==========================================================

function OpenSourceSection({
  intro,
  stats = [],
  items = [],
}) {
  if (!stats.length && !items.length) {
    return null;
  }

  return (
    <section className="open-source section">
      <div className="container">
        {/* ==========================================
            SECTION HEADER
        ========================================== */}
        <div className="open-source-header">
          <span className="open-source-badge">
            {intro?.eyebrow ||
              "Collaboration & Contributions"}
          </span>

          <h2 className="section-title">
            {intro?.title || "Beyond Projects"}
          </h2>

          <p className="section-subtitle">
            {intro?.intro ||
              "The broader habits, contributions, and professional commitments that shape how I collaborate, keep learning, and create impact beyond individual project delivery."}
          </p>
        </div>

        {/* ==========================================
            STATS STRIP
        ========================================== */}
        {stats.length > 0 && (
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
        )}

        {/* ==========================================
            CONTRIBUTION LEAD-IN
        ========================================== */}
        {items.length > 0 && (
          <div className="contribution-lead">
            <p>
              The work extends beyond delivery into
              collaboration, learning, leadership, and
              continuous improvement.
            </p>
          </div>
        )}

        {/* ==========================================
            CONTRIBUTION GRID
        ========================================== */}
        {items.length > 0 && (
          <div className="contribution-grid">
            {items.map((item, index) => (
              <ContributionCard
                key={item.id || index}
                item={item}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default OpenSourceSection;