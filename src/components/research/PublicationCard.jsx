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
  if (publication?.external_url)
    return publication.external_url;
  return "";
}

function getPublicationLinkLabel(publication) {
  if (publication?.pdf) return "Read Publication";
  if (publication?.external_url)
    return "Visit Publication";
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

function PublicationCard({
  publication,
  variant = "default",
}) {
  const publicationLink =
    getPublicationLink(publication);

  const publicationLinkLabel =
    getPublicationLinkLabel(publication);

  const categoryName =
    publication?.category?.name || "";

  const publicationSource =
    publication?.journal ||
    publication?.publisher ||
    publication?.institution ||
    "";

  const keywords =
    publication?.keywords?.slice(0, 4) || [];

  const hasImage = Boolean(publication?.image);

  return (
    <article
      className={`publication-card publication-card-${variant}`}
    >
      {/* ========================================
          FLAGSHIP MEDIA
      ======================================== */}
      {variant === "flagship" && hasImage && (
        <div className="publication-flagship-media">
          <img
            src={publication.image}
            alt={publication?.title || "Publication"}
          />
        </div>
      )}

      {/* ========================================
          CONTENT WRAPPER
      ======================================== */}
      <div className="publication-card-content">
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

            {categoryName && (
              <span className="publication-category">
                {categoryName}
              </span>
            )}
          </div>

          <span className="publication-status">
            {formatPublicationStatus(
              publication?.status
            )}
          </span>
        </div>

        {/* ========================================
            BODY
        ======================================== */}
        <div className="publication-body">
          <h3>{publication?.title}</h3>

          {(publication?.authors ||
            publicationSource) && (
            <div className="publication-authors-row">
              {publication?.authors && (
                <span className="publication-authors">
                  {publication.authors}
                </span>
              )}

              {publicationSource && (
                <span className="publication-source">
                  {publicationSource}
                </span>
              )}
            </div>
          )}

          <p className="publication-summary">
            {publication?.summary ||
              publication?.abstract}
          </p>

          {keywords.length > 0 && (
            <div className="publication-keywords">
              {keywords.map((keyword, index) => (
                <span
                  key={keyword.id || index}
                  className="publication-keyword"
                >
                  {keyword.name}
                </span>
              ))}
            </div>
          )}
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
      </div>
    </article>
  );
}

export default PublicationCard;