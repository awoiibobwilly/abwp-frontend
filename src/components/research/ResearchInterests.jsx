import "../../styles/research/researchInterests.css";

// ==========================================================
// RESEARCH INTERESTS
// RESEARCH PAGE
// ABW PORTFOLIO
// ==========================================================

function ResearchInterests({ intro, groups = [] }) {
  if (!groups.length) {
    return null;
  }

  return (
    <section className="research-interests section">
      <div className="container">
        {/* ==========================================
            SECTION HEADER
        ========================================== */}
        <div className="research-interests-header">
          <span className="research-interests-badge">
            {intro?.eyebrow || "Research Interests"}
          </span>

          <h2 className="section-title">
            {intro?.title || "Current and Emerging Interests"}
          </h2>

          <p className="section-subtitle">
            {intro?.intro ||
              "The themes, questions, and evolving areas of inquiry that continue to shape my research direction and long-term scholarly focus."}
          </p>
        </div>

        {/* ==========================================
            SECTION SUMMARY
        ========================================== */}
        <div className="research-interests-summary">
          <div className="research-interests-summary-card">
            <span className="research-interests-summary-value">
              {groups.length}
            </span>

            <span className="research-interests-summary-label">
              {groups.length === 1
                ? "interest cluster"
                : "interest clusters"}
            </span>
          </div>
        </div>

        {/* ==========================================
            INTEREST GROUPS
        ========================================== */}
        <div className="research-interests-grid">
          {groups.map((group, index) => (
            <article
              className="interest-card"
              key={group.id || index}
            >
              {/* ====================================
                  CARD TOP
              ==================================== */}
              <div className="interest-card-top">
                <div className="interest-card-heading">
                  <h3>{group.title}</h3>

                  {group.description && (
                    <p className="interest-description">
                      {group.description}
                    </p>
                  )}
                </div>

                <span className="interest-count">
                  {group.items?.length || 0}
                </span>
              </div>

              {/* ====================================
                  ITEMS
              ==================================== */}
              <div className="interest-items">
                {group.items?.map((item) => (
                  <span
                    key={item.id}
                    className="interest-item"
                  >
                    {item.name}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ResearchInterests;