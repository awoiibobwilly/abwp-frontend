import "../../styles/research/researchHero.css";

// ==========================================================
// RESEARCH HERO
// RESEARCH PAGE
// ABW PORTFOLIO
// ==========================================================

function ResearchHero({ hero, stats = [] }) {
  return (
    <section className="research-hero section">
      <div className="container">
        <div className="research-hero-shell">
          {/* ======================================
              HERO CONTENT
          ====================================== */}
          <div className="research-hero-content">
            <span className="research-badge">
              {hero?.eyebrow || "Research & Inquiry"}
            </span>

            <h1>
              {hero?.title ||
                "Research That Bridges Evidence, Systems, and Innovation"}
            </h1>

            <p>
              {hero?.description ||
                "A growing body of research and analytical work across health systems, healthcare financing, leadership, monitoring and evaluation, digital transformation, and evidence-based decision making."}
            </p>
          </div>

          {/* ======================================
              HERO INSIGHTS STRIP
          ====================================== */}
          {stats.length > 0 && (
            <div className="research-hero-stats">
              {stats.map((stat, index) => (
                <div
                  className="research-hero-stat-card"
                  key={`${stat.label}-${index}`}
                >
                  <span className="research-hero-stat-value">
                    {stat.value}
                  </span>

                  <span className="research-hero-stat-label">
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

export default ResearchHero;