import PublicationCard from "./PublicationCard";

import "../../styles/research/publications.css";

// ==========================================================
// PUBLICATIONS SECTION
// RESEARCH PAGE
// ABW PORTFOLIO
// ==========================================================

function PublicationsSection({
  intro,
  featuredPublications = [],
  allPublications = [],
}) {
  const publications =
    featuredPublications.length > 0
      ? featuredPublications
      : allPublications;

  const publicationCount = publications.length;

  if (publicationCount === 0) {
    return null;
  }

  return (
    <section className="publications section">
      <div className="container">
        {/* ==========================================
            SECTION HEADER
        ========================================== */}
        <div className="publications-header">
          <span className="publications-badge">
            {intro?.eyebrow || "Publications"}
          </span>

          <h2 className="section-title">
            {intro?.title || "Selected Publications"}
          </h2>

          <p className="section-subtitle">
            {intro?.intro ||
              "A selection of research publications, technical reports, white papers, and analytical work focused on healthcare systems, evidence generation, leadership, and data-informed decision making."}
          </p>
        </div>

        {/* ==========================================
            PUBLICATIONS SUMMARY
        ========================================== */}
        <div className="publications-summary">
          <div className="publications-summary-card">
            <span className="publications-summary-value">
              {publicationCount}
            </span>

            <span className="publications-summary-label">
              {publicationCount === 1
                ? "Featured publication"
                : "Featured publications"}
            </span>
          </div>
        </div>

        {/* ==========================================
            PUBLICATIONS GRID
        ========================================== */}
        <div className="publications-grid">
          {publications.map((publication, index) => (
            <PublicationCard
              key={publication.id || index}
              publication={publication}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default PublicationsSection;