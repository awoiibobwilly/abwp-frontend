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

  if (!publications.length) {
    return null;
  }

  const flagshipPublication = publications[0];
  const supportingPublications = publications.slice(1, 5);

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
              "A curated selection of research publications, analytical reports, and evidence-focused work across healthcare systems, leadership, public health, and data-informed decision making."}
          </p>
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
              <h3>Additional Publications</h3>
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