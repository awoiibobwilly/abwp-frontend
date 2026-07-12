import { FaArrowRight, FaClock } from "react-icons/fa";

import "../../styles/insights/flagshipArticle.css";

// ==========================================================
// FLAGSHIP ARTICLE
// PREMIUM EDITORIAL FEATURE
// ==========================================================

function FlagshipArticle({ article }) {

  if (!article) return null;

  const {
    title,
    excerpt,
    cover_image,
    category,
    published_at,
    read_time,
    external_url,
  } = article;

  const formattedDate = published_at
  ? new Date(published_at).toLocaleDateString(
      "en-US",
      {
        year: "numeric",
        month: "long",
        day: "numeric",
      }
    )
  : "";

  return (

    <article className="flagship-article">

      {/* ==========================================
          IMAGE
      ========================================== */}

      <div className="flagship-media">

        {cover_image && (

          <img
            src={cover_image}
            alt={title}
          />

        )}

      </div>

      {/* ==========================================
          CONTENT
      ========================================== */}

      <div className="flagship-content">

        <div className="flagship-meta">

          {category && (

            <span className="flagship-category">
              {category.name}
            </span>

          )}

          {published_at && (

            <span className="flagship-date">
              {published_at}
            </span>

          )}

          {read_time && (

            <span className="flagship-readtime">

              <FaClock />

              {read_time}

            </span>

          )}

        </div>

        <h2 className="flagship-title">
          {title}
        </h2>

        <p className="flagship-summary">
          {excerpt}
        </p>

        {external_url && (

          <a
            href={external_url}
            target="_blank"
            rel="noopener noreferrer"
            className="flagship-button"
          >

            Continue Reading

            <FaArrowRight />

          </a>

        )}

      </div>

    </article>

  );

}

export default FlagshipArticle;