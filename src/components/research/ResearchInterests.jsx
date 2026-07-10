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
            {intro?.eyebrow || "Current Inquiry Themes"}
          </span>

          <h2 className="section-title">
            {intro?.title || "Questions and Themes I Continue to Explore"}
          </h2>

          <p className="section-subtitle">
            {intro?.intro ||
              "Selected themes and evolving lines of inquiry that continue to shape my research direction, professional curiosity, and long-term scholarly focus."}
          </p>
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