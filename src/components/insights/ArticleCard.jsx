import { FaArrowRight } from "react-icons/fa";

// ==========================================================
// ARTICLE CARD
// INSIGHTS PAGE
// ABW PORTFOLIO
// PREMIUM EDITORIAL PASS
// ==========================================================

function ArticleCard({
  article,
  variant = "default",
}) {
  const isFlagship = variant === "flagship";
  const hasLink = Boolean(article?.external_url);

  return (
    <article
      className={`article-card ${
        isFlagship
          ? "article-card-flagship"
          : "article-card-default"
      }`}
    >
      {/* ======================================
          MEDIA
      ====================================== */}
      <div className="article-image">
        {article?.cover_image_url ? (
          <img
            src={article.cover_image_url}
            alt={article.title}
          />
        ) : (
          <div className="article-image-placeholder">
            <span className="article-placeholder-category">
              {article?.category || "Insight"}
            </span>

            <h3 className="article-placeholder-title">
              {article?.title}
            </h3>
          </div>
        )}
      </div>

      {/* ======================================
          CONTENT
      ====================================== */}
      <div className="article-content">
        <div className="article-meta">
          {article?.category && (
            <span className="article-category">
              {article.category}
            </span>
          )}

          {article?.published_date && (
            <span>{article.published_date}</span>
          )}

          {article?.read_time && (
            <span>{article.read_time}</span>
          )}
        </div>

        <h3>{article?.title}</h3>

        <p>{article?.excerpt}</p>

        {hasLink ? (
          <a
            href={article.external_url}
            className="article-link"
            target="_blank"
            rel="noreferrer"
          >
            Read Article
            <FaArrowRight />
          </a>
        ) : (
          <span className="article-link article-link-disabled">
            Read Article
            <FaArrowRight />
          </span>
        )}
      </div>
    </article>
  );
}

export default ArticleCard;