import KnowledgeDomainsGrid from "./KnowledgeDomainsGrid";

import "../../styles/insights/knowledgeDomains.css";

// ==========================================================
// KNOWLEDGE DOMAINS
// INSIGHTS PAGE
// ABW PORTFOLIO
// ==========================================================

function CategoriesSection({
  intro,
  categories = [],
}) {
  if (!categories.length) {
    return null;
  }

  return (
    <section className="knowledge-domains section">
      <div className="container">

        {/* ==========================================
            SECTION HEADER
        ========================================== */}

        <div className="knowledge-domains-header">

          <span className="knowledge-domains-badge">
            {intro?.eyebrow || "Knowledge Domains"}
          </span>

          <h2 className="section-title">
            {intro?.title ||
              "Knowledge Domains"}
          </h2>

          <p className="section-subtitle">
            {intro?.intro ||
              "Explore the interdisciplinary themes that shape my research, writing, engineering practice, leadership, and evidence-driven thinking."}
          </p>

        </div>

        {/* ==========================================
            SUMMARY
        ========================================== */}

        <div className="knowledge-domains-summary">

          <div className="knowledge-domains-summary-card">

            <span className="knowledge-domains-summary-value">
              {categories.length}
            </span>

            <span className="knowledge-domains-summary-label">
              {categories.length === 1
                ? "Knowledge Domain"
                : "Knowledge Domains"}
            </span>

          </div>

        </div>

        {/* ==========================================
            DOMAINS GRID
        ========================================== */}

        <KnowledgeDomainsGrid
          categories={categories}
        />

      </div>
    </section>
  );
}

export default CategoriesSection;