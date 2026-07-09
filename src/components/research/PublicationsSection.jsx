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

  const flagshipPublication = publications[0];
  const supportingPublications = publications.slice(1);

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
            FLAGSHIP PUBLICATION
        ========================================== */}
        {flagshipPublication && (
          <div className="publications-flagship">
            <PublicationCard
              publication={flagshipPublication}
              variant="flagship"
            />
          </div>
        )}

        {/* ==========================================
            SUPPORTING PUBLICATIONS
        ========================================== */}
        {supportingPublications.length > 0 && (
          <div className="publications-supporting">
            <div className="publications-supporting-header">
              <h3>More Research Outputs</h3>
              <p>
                Additional publications, reports, and
                evidence-focused work that extend the
                research themes explored above.
              </p>
            </div>

            <div className="publications-grid">
              {supportingPublications.map(
                (publication, index) => (
                  <PublicationCard
                    key={publication.id || index}
                    publication={publication}
                    variant="default"
                  />
                )
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default PublicationsSection;