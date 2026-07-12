import "../../styles/insights/insightsHero.css";

// ==========================================================
// INSIGHTS HERO
// INSIGHTS PAGE
// ABW PORTFOLIO
//
// PREMIUM HERO SYSTEM
// ==========================================================

function InsightsHero({
  hero,
  stats = [],
}) {
  return (
    <section className="insights-hero">

      <div className="container">

        {/* ==========================================
            HERO CONTENT
        ========================================== */}

        <div className="insights-hero-content">

          {/* --------------------------------------
              EYEBROW
          -------------------------------------- */}

          <span className="insights-badge">

            {hero?.eyebrow ||
              "Insights & Perspectives"}

          </span>

          {/* --------------------------------------
              TITLE
          -------------------------------------- */}

          <h1 className="insights-hero-title">

            {hero?.title ||
              "Sharing Ideas That Inspire Learning and Meaningful Impact"}

          </h1>

          {/* --------------------------------------
              DESCRIPTION
          -------------------------------------- */}

          <p className="insights-hero-description">

            {hero?.description ||
              hero?.subtitle ||
              "Thoughts, reflections, research articles and evidence-driven perspectives exploring healthcare, leadership, technology, innovation and lifelong learning."}

          </p>

        </div>

        {/* ==========================================
            HERO STATISTICS
        ========================================== */}

        {stats.length > 0 && (

          <div className="insights-hero-stats">

            {stats.map((stat, index) => (

              <article
                key={`${stat.label}-${index}`}
                className="insights-stat-card"
              >

                <span className="insights-stat-value">

                  {stat.value}

                </span>

                <span className="insights-stat-label">

                  {stat.label}

                </span>

              </article>

            ))}

          </div>

        )}

      </div>

    </section>
  );
}

export default InsightsHero;