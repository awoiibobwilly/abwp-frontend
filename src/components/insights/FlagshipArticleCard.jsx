import {
  FiArrowRight,
  FiBookOpen,
  FiCalendar,
  FiClock,
} from "react-icons/fi";

import "../../styles/insights/featuredArticles.css";


// ==========================================================
// FLAGSHIP ARTICLE CARD
// PREMIUM EDITORIAL FEATURE
// ABW PORTFOLIO
// ==========================================================

function FlagshipArticleCard({
  article,
}) {

  if (!article) {
    return null;
  }
  return (

    <article className="flagship-article-card">

      {/* ==========================================
          FEATURED IMAGE
      ========================================== */}

        <div className="flagship-image">

        <img
          src={article.cover_image}
          alt={article.title}
          loading="lazy"
          onLoad={() => console.log("IMAGE LOADED")}
          onError={(e) => {
            console.log("IMAGE FAILED", e);
          }}
          style={{
            width: "100%",
            height: "500px",
            objectFit: "cover",
            border: "4px solid red",
            display: "block",
          }}
        />

        </div>

      {/* ==========================================
          CONTENT
      ========================================== */}

      <div className="flagship-content">

        {/* --------------------------------------
            META
        -------------------------------------- */}

        <div className="flagship-meta">

          {article.category && (

            <span className="flagship-category">

              <FiBookOpen />

              {typeof article.category === "object"
                ? article.category.name
                : article.category}

            </span>

          )}

          {article.read_time && (

            <span className="flagship-read-time">

              <FiClock />

              {article.read_time}

            </span>

          )}

          {article.published_at && (

            <span className="flagship-date">

              <FiCalendar />

              {article.published_at}

            </span>

          )}

        </div>

        {/* --------------------------------------
            TITLE
        -------------------------------------- */}

        <h3 className="flagship-title">

          {article.title}

        </h3>

        {/* --------------------------------------
            SUMMARY
        -------------------------------------- */}

        <p className="flagship-summary">

          {article.excerpt}

        </p>

        {/* --------------------------------------
            FOOTER
        -------------------------------------- */}

        <div className="flagship-footer">

          <div className="flagship-author">

            <span>

              By

            </span>

            <strong>

              Awoii Bob Willy

            </strong>

          </div>

          {article.external_url && (

          <Link
          to={`/insights/${article.slug}`}
          className="flagship-button"
          >
          Continue Reading
          <FiArrowRight />
          </Link>

          )}

        </div>

      </div>

    </article>

  );

}

export default FlagshipArticleCard;