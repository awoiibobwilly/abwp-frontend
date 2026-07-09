import {
  FaArrowRight,
  FaBookOpen,
  FaFileAlt,
  FaGlobe,
} from "react-icons/fa";

// ==========================================================
// HELPERS
// ==========================================================

function formatPublicationStatus(status) {
  if (!status) return "Published";

  const map = {
    published: "Published",
    draft: "Draft",
    under_review: "Under Review",
  };

  return map[status] || status;
}

function getPublicationLink(publication) {
  if (publication?.pdf) return publication.pdf;
  if (publication?.external_url) return publication.external_url;
  return "";
}

function getPublicationLinkLabel(publication) {
  if (publication?.pdf) return "Read Publication";
  if (publication?.external_url) return "Visit Publication";
  return "";
}

function getPublicationIcon(publication) {
  if (publication?.pdf) return <FaFileAlt />;
  if (publication?.external_url) return <FaGlobe />;
  return <FaBookOpen />;
}

// ==========================================================
// PUBLICATION CARD
// RESEARCH PAGE
// ABW PORTFOLIO
// ==========================================================

function PublicationCard({ publication }) {
  const publicationLink = getPublicationLink(publication);
  const publicationLinkLabel =
    getPublicationLinkLabel(publication);

  const categoryName =
    publication?.category?.name || "";

  const publicationSource =
    publication?.journal ||
    publication?.publisher ||
    publication?.institution ||
    "";

  return (
    <article className="publication-card">
      {/* ========================================
          TOP META
      ======================================== */}
      <div className="publication-top">
        <div className="publication-meta">
          <span className="publication-type">
            {publication?.publication_type_display ||
              "Publication"}
          </span>

          {publication?.year && (
            <span className="publication-year">
              {publication.year}
            </span>
          )}
        </div>

        <span className="publication-status">
          {formatPublicationStatus(publication?.status)}
        </span>
      </div>

      {/* ========================================
          CONTENT
      ======================================== */}
      <div className="publication-body">
        <h3>
          {publication?.title}
        </h3>

        {(publication?.authors || categoryName) && (
          <div className="publication-authors-row">
            {publication?.authors && (
              <span className="publication-authors">
                {publication.authors}
              </span>
            )}

            {categoryName && (
              <span className="publication-category">
                {categoryName}
              </span>
            )}
          </div>
        )}

        {publicationSource && (
          <p className="publication-source">
            {publicationSource}
          </p>
        )}

        <p className="publication-summary">
          {publication?.summary || publication?.abstract}
        </p>
      </div>

      {/* ========================================
          FOOTER
      ======================================== */}
      <div className="publication-footer">
        {publicationLink ? (
          <a
            href={publicationLink}
            target="_blank"
            rel="noopener noreferrer"
            className="publication-link"
          >
            <span className="publication-link-icon">
              {getPublicationIcon(publication)}
            </span>

            <span className="publication-link-text">
              {publicationLinkLabel}
            </span>

            <span className="publication-link-arrow">
              <FaArrowRight />
            </span>
          </a>
        ) : (
          <div className="publication-link publication-link-disabled">
            <span className="publication-link-icon">
              <FaBookOpen />
            </span>

            <span className="publication-link-text">
              Publication details coming soon
            </span>
          </div>
        )}
      </div>
    </article>
  );
}

export default PublicationCard;