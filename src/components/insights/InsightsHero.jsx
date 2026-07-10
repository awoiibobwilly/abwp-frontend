import "../../styles/insights/insightsHero.css";

// ==========================================================
// INSIGHTS HERO
// INSIGHTS PAGE
// ABW PORTFOLIO
// FINAL EDITORIAL HARMONY PASS
// ==========================================================

function InsightsHero({ hero, stats = [] }) {
  return (
    <section className="insights-hero section">
      <div className="container">
        <div className="insights-hero-shell">
          {/* ==========================================
              HERO COPY
          ========================================== */}
          <div className="insights-hero-content">
            <span className="insights-badge">
              {hero?.eyebrow || "Insights & Perspectives"}
            </span>

            <h1>
              {hero?.title ||
                "Sharing Ideas That Inspire Learning and Meaningful Impact"}
            </h1>

            <p>
              {hero?.subtitle ||
                "Thoughts, reflections, articles, and perspectives on healthcare, research, leadership, technology, and lifelong learning."}
            </p>
          </div>

          {/* ==========================================
              HERO STATS
          ========================================== */}
          {stats.length > 0 && (
            <div className="insights-hero-stats">
              {stats.map((stat, index) => (
                <div
                  className="insights-stat-card"
                  key={`${stat.label}-${index}`}
                >
                  <span className="insights-stat-value">
                    {stat.value}
                  </span>

                  <span className="insights-stat-label">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default InsightsHero;