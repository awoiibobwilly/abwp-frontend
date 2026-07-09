import "../../styles/research/researchPhilosophy.css";

// ==========================================================
// RESEARCH PHILOSOPHY
// RESEARCH PAGE
// ABW PORTFOLIO
// ==========================================================

function ResearchPhilosophy({ intro, points = [] }) {
  if (!points.length) {
    return null;
  }

  return (
    <section className="research-philosophy section">
      <div className="container">
        {/* ==========================================
            SECTION HEADER
        ========================================== */}
        <div className="research-philosophy-header">
          <span className="research-philosophy-badge">
            {intro?.eyebrow || "Research Philosophy"}
          </span>

          <h2 className="section-title">
            {intro?.title || "How I Approach Research"}
          </h2>

          <p className="section-subtitle">
            {intro?.intro ||
              "My research philosophy is grounded in rigor, relevance, ethics, and a commitment to translating evidence into meaningful action."}
          </p>
        </div>

        {/* ==========================================
            PHILOSOPHY GRID
        ========================================== */}
        <div className="research-philosophy-grid">
          {points.map((point, index) => {
            const accent =
              point?.accent_color ||
              point?.color ||
              "#2563EB";

            const pointInitial =
              point?.title?.charAt(0)?.toUpperCase() || "P";

            return (
              <article
                className="philosophy-card"
                key={point.id || index}
              >
                {/* ====================================
                    CARD TOP
                ==================================== */}
                <div className="philosophy-card-top">
                  <div
                    className="philosophy-icon"
                    style={{
                      background: `${accent}14`,
                      color: accent,
                    }}
                  >
                    <span>{pointInitial}</span>
                  </div>

                  <span
                    className="philosophy-accent"
                    style={{
                      background: accent,
                    }}
                  />
                </div>

                {/* ====================================
                    CARD BODY
                ==================================== */}
                <div className="philosophy-card-body">
                  <h3>{point.title}</h3>
                  <p>{point.description}</p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default ResearchPhilosophy;