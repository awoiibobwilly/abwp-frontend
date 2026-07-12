import FlagshipArticleCard from "./FlagshipArticleCard";
import SupportingArticleCard from "./SupportingArticleCard";

import "../../styles/insights/featuredArticles.css";

// ==========================================================
// FEATURED ARTICLES
// INSIGHTS PAGE
// ABW PORTFOLIO
//
// EDITORIAL ARCHITECTURE RESTORATION
// ==========================================================

function FeaturedArticles({
  intro,
  featuredArticles = [],
}) {

  // ==================================================
  // NO FEATURED ARTICLES
  // KEEP THE PAGE CLEAN
  // ==================================================

  if (!featuredArticles.length) {
    return null;
  }

  // ==================================================
  // EDITOR'S PICK
  // DISPLAY ORDER CONTROLS PRIORITY
  // ==================================================

  const flagshipArticle =
    featuredArticles[0];

  // ==================================================
  // SUPPORTING ARTICLES
  // ==================================================

  const supportingArticles =
    featuredArticles.slice(1);

  // ==================================================
  // COMPONENT
  // ==================================================

  return (

    <section className="featured-articles section">

      <div className="container">

        {/* ==========================================
            SECTION HEADER
        ========================================== */}

        <div className="featured-header">

          <span className="featured-badge">

            {intro?.eyebrow ||
              "Editor's Picks"}

          </span>

          <h2 className="section-title">

            {intro?.title ||
              "Ideas Worth Exploring"}

          </h2>

          <p className="section-subtitle">

            {intro?.intro ||

              "Curated articles, essays and evidence-driven perspectives exploring healthcare, leadership, research, technology, innovation and lifelong learning."

            }

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

        {/* ==========================================
            FLAGSHIP ARTICLE
        ========================================== */}

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