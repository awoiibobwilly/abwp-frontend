import {
    FaArrowRight,
    FaFolderOpen,
  } from "react-icons/fa";
  
  // ==========================================================
  // SUPPORTING ARTICLE CARD
  // INSIGHTS PAGE
  // ABW PORTFOLIO
  // ==========================================================
  
  function SupportingArticleCard({
    article,
  }) {
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
  
    const articleLink =
      article?.external_url ||
      `/insights/${article.slug}`;
  
    return (
      <article className="supporting-article-card">
  
        {/* ======================================
            CATEGORY
        ====================================== */}
  
        <div className="supporting-category">
  
          <FaFolderOpen />
  
          <span>{category}</span>
  
        </div>
  
        {/* ======================================
            TITLE
        ====================================== */}
  
        <h3 className="supporting-title">
          {article.title}
        </h3>
  
        {/* ======================================
            SUMMARY
        ====================================== */}
  
        <p className="supporting-summary">
          {summary}
        </p>
  
        {/* ======================================
            CTA
        ====================================== */}
  
        <a
          href={articleLink}
          className="supporting-link"
        >
          Read Insight
  
          <FaArrowRight />
  
        </a>
  
      </article>
    );
  }
  
  export default SupportingArticleCard;