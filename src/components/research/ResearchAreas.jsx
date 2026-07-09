import ResearchAreaCard from "./ResearchAreaCard";

import "../../styles/research/researchAreas.css";

// ==========================================================
// RESEARCH AREAS
// RESEARCH PAGE
// ABW PORTFOLIO
// ==========================================================

function ResearchAreas({ intro, areas = [] }) {
  if (!areas.length) {
    return null;
  }

  return (
    <section className="research-areas section">
      <div className="container">
        {/* ==========================================
            SECTION HEADER
        ========================================== */}
        <div className="research-areas-header">
          <span className="research-areas-badge">
            {intro?.eyebrow || "Research Areas"}
          </span>

          <h2 className="section-title">
            {intro?.title || "Domains of Inquiry"}
          </h2>

          <p className="section-subtitle">
            {intro?.intro ||
              "The major areas where my research, analytical work, and evidence-driven inquiry are currently focused."}
          </p>
        </div>

        {/* ==========================================
            SECTION SUMMARY
        ========================================== */}
        <div className="research-areas-summary">
          <div className="research-areas-summary-card">
            <span className="research-areas-summary-value">
              {areas.length}
            </span>

            <span className="research-areas-summary-label">
              {areas.length === 1
                ? "core research area"
                : "core research areas"}
            </span>
          </div>
        </div>

        {/* ==========================================
            AREAS GRID
        ========================================== */}
        <div className="research-areas-grid">
          {areas.map((area, index) => (
            <ResearchAreaCard
              key={area.id || index}
              area={area}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ResearchAreas;