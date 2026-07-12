import {
  FiArrowRight,
  FiBookOpen,
  FiCalendar,
  FiClock,
} from "react-icons/fi";

import "../../styles/insights/featuredArticles.css";

// ==========================================================
// SUPPORTING ARTICLE CARD
// INSIGHTS PAGE
// ABW PORTFOLIO
//
// PREMIUM EDITORIAL SYSTEM
// ==========================================================

function SupportingArticleCard({
  article,
}) {

  if (!article) {
    return null;
  }

  return (

    <article className="supporting-article-card">

      {/* ==========================================
          CATEGORY
      ========================================== */}

      <div className="supporting-meta">

        {article.category && (

          <span className="supporting-category">

            <FiBookOpen />

            {typeof article.category === "object"
              ? article.category.name
              : article.category}

          </span>

        )}

      </div>

      {/* ==========================================
          TITLE
      ========================================== */}

      <h3 className="supporting-title">

        {article.title}

      </h3>

      {/* ==========================================
          SUMMARY
      ========================================== */}

      <p className="supporting-summary">

        {article.excerpt}

      </p>

      {/* ==========================================
          FOOTER
      ========================================== */}

      <div className="supporting-footer">

        <div className="supporting-information">

          {article.read_time && (

            <span>

              <FiClock />

              {article.read_time}

            </span>

          )}

          {article.published_at && (

            <span>

              <FiCalendar />

              {article.published_at}

            </span>

          )}

        </div>

        {article.external_url && (

          <a
            href={article.external_url}
            target="_blank"
            rel="noopener noreferrer"
            className="supporting-link"
          >

            Read

            <FiArrowRight />

          </a>

        )}

      </div>

    </article>

  );

}

export default SupportingArticleCard;