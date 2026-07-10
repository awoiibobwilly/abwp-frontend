import ArticleCard from "./ArticleCard";
import "../../styles/insights/featuredArticles.css";

// ==========================================================
// FEATURED ARTICLES
// INSIGHTS PAGE
// ABW PORTFOLIO
// PREMIUM EDITORIAL PASS
// ==========================================================

function FeaturedArticles({
  intro,
  articles = [],
}) {
  if (!articles.length) {
    return null;
  }

  const flagshipArticle = articles[0];
  const supportingArticles = articles.slice(1);

  return (
    <section className="featured-articles section">
      <div className="container">
        {/* ==========================================
            SECTION HEADER
        ========================================== */}
        <div className="articles-header">
          <span className="articles-badge">
            {intro?.eyebrow || "Featured Articles"}
          </span>

          <h2 className="section-title">
            {intro?.title || "Insights Worth Exploring"}
          </h2>

          <p className="section-subtitle">
            {intro?.intro ||
              "Articles, reflections, and perspectives that bridge healthcare, research, leadership, and technology."}
          </p>
        </div>

        {/* ==========================================
            SECTION SUMMARY
        ========================================== */}
        <div className="articles-summary">
          <div className="articles-summary-card">
            <span className="articles-summary-value">
              {articles.length}
            </span>

            <span className="articles-summary-label">
              {articles.length === 1
                ? "featured article"
                : "featured articles"}
            </span>
          </div>
        </div>

        {/* ==========================================
            FLAGSHIP ARTICLE
        ========================================== */}
        {flagshipArticle && (
          <div className="articles-flagship">
            <ArticleCard
              article={flagshipArticle}
              variant="flagship"
            />
          </div>
        )}

        {/* ==========================================
            SUPPORTING ARTICLES
        ========================================== */}
        {supportingArticles.length > 0 && (
          <div className="articles-supporting">
            <div className="articles-supporting-header">
              <h3>More Featured Perspectives</h3>
              <p>
                Additional articles and reflections exploring
                leadership, healthcare, research, and technology.
              </p>
            </div>

            <div className="articles-grid">
              {supportingArticles.map((article) => (
                <ArticleCard
                  key={article.id}
                  article={article}
                  variant="default"
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default FeaturedArticles;