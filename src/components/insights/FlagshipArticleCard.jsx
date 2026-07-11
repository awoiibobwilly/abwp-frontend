import {
    FaArrowRight,
    FaCalendarAlt,
    FaFolderOpen,
    FaUser,
  } from "react-icons/fa";
  
  import "../../styles/insights/featuredArticles.css";
  
  // ==========================================================
  // FLAGSHIP ARTICLE CARD
  // INSIGHTS PAGE
  // ABW PORTFOLIO
  // ==========================================================
  
  function FlagshipArticleCard({ article }) {
    if (!article) {
      return null;
    }
  
    const category =
      article?.category?.name ||
      article?.category ||
      "Insight";
  
    const summary =
      article?.summary ||
      article?.excerpt ||
      article?.description ||
      "";
  
    const author =
      article?.author ||
      "Awoii Bob Willy";
  
    const publicationType =
      article?.publication_type_display ||
      article?.type ||
      "Article";
  
    const articleLink =
      article?.external_url ||
      `/insights/${article.slug}`;
  
    return (
      <article className="flagship-article-card">
  
        {/* ======================================
            COVER IMAGE
        ====================================== */}
  
        {article?.image && (
          <div className="flagship-media">
  
            <img
              src={article.image}
              alt={article.title}
            />
  
          </div>
        )}
  
        {/* ======================================
            CONTENT
        ====================================== */}
  
        <div className="flagship-content">
  
          {/* META */}
  
          <div className="flagship-meta">
  
            <span className="flagship-category">
  
              <FaFolderOpen />
  
              {category}
  
            </span>
  
            {article?.year && (
  
              <span className="flagship-year">
  
                <FaCalendarAlt />
  
                {article.year}
  
              </span>
  
            )}
  
          </div>
  
          {/* TITLE */}
  
          <h2 className="flagship-title">
  
            {article.title}
  
          </h2>
  
          {/* SUMMARY */}
  
          <p className="flagship-summary">
  
            {summary}
  
          </p>
  
          {/* FOOTER */}
  
          <div className="flagship-footer">
  
            <div className="flagship-author">
  
              <FaUser />
  
              <span>
  
                {author}
  
              </span>
  
              <span className="flagship-dot">
  
                •
  
              </span>
  
              <span>
  
                {publicationType}
  
              </span>
  
            </div>
  
            <a
              href={articleLink}
              className="flagship-button"
            >
              Read Insight
  
              <FaArrowRight />
  
            </a>
  
          </div>
  
        </div>
  
      </article>
    );
  }
  
  export default FlagshipArticleCard;