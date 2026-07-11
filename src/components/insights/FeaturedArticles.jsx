import FlagshipArticleCard from "./FlagshipArticleCard";
import SupportingArticleCard from "./SupportingArticleCard";

import "../../styles/insights/featuredArticles.css";

// ==========================================================
// FEATURED ARTICLES
// INSIGHTS PAGE
// ABW PORTFOLIO
// ==========================================================

function FeaturedArticles({
  intro,
  featuredArticles = [],
}) {
  if (!featuredArticles.length) {
    return null;
  }

  const flagshipArticle =
    featuredArticles[0];

  const supportingArticles =
    featuredArticles.slice(1);

  return (
    <section className="featured-articles section">
      <div className="container">

        {/* ==========================================
            SECTION HEADER
        ========================================== */}

        <div className="featured-header">

          <span className="featured-badge">
            {intro?.eyebrow || "Editor's Picks"}
          </span>

          <h2 className="section-title">
            {intro?.title || "Ideas Worth Exploring"}
          </h2>

          <p className="section-subtitle">
            {intro?.intro ||
              "Curated articles, essays and evidence-driven perspectives exploring healthcare, leadership, research, technology and innovation."}
          </p>

        </div>

        {/* ==========================================
            EDITOR'S PICK
        ========================================== */}

        <div className="editorial-label">

          <span>
            Editor's Pick
          </span>

        </div>

        <FlagshipArticleCard
          article={flagshipArticle}
        />

        {/* ==========================================
            SUPPORTING ARTICLES
        ========================================== */}

        {supportingArticles.length > 0 && (

          <>

            <div className="editorial-divider">

              <span>
                Continue Reading
              </span>

            </div>

            <div className="featured-supporting">

              {supportingArticles.map(
                (article) => (

                  <SupportingArticleCard
                    key={article.id}
                    article={article}
                  />

                )
              )}

            </div>

          </>

        )}

      </div>
    </section>
  );
}

export default FeaturedArticles;