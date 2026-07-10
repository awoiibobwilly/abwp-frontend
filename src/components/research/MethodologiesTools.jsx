import "../../styles/research/methodologiesTools.css";

// ==========================================================
// METHODOLOGIES & TOOLS
// RESEARCH PAGE
// ABW PORTFOLIO
// ==========================================================

function MethodologiesTools({ intro, groups = [] }) {
  if (!groups.length) {
    return null;
  }

  return (
    <section className="methodologies-tools section">
      <div className="container">
        {/* ==========================================
            SECTION HEADER
        ========================================== */}
        <div className="methodologies-header">
          <span className="methodologies-badge">
            {intro?.eyebrow || "Methodologies & Tools"}
          </span>

          <h2 className="section-title">
            {intro?.title ||
              "Approaches That Support Rigorous and Practical Inquiry"}
          </h2>

          <p className="section-subtitle">
            {intro?.intro ||
              "The research methodologies, analytical frameworks, and evidence-generation tools that shape how I investigate questions, interpret findings, and translate knowledge into practical insight."}
          </p>
        </div>

        {/* ==========================================
            GROUPS GRID
        ========================================== */}
        <div className="methodologies-grid">
          {groups.map((group, index) => (
            <article
              className="methodology-card"
              key={group.id || index}
            >
              {/* ====================================
                  CARD TOP
              ==================================== */}
              <div className="methodology-card-top">
                <div className="methodology-card-heading">
                  <h3>{group.title}</h3>

                  {group.description && (
                    <p className="methodology-description">
                      {group.description}
                    </p>
                  )}
                </div>

                <span className="methodology-count">
                  {group.items?.length || 0}
                </span>
              </div>

              {/* ====================================
                  ITEMS
              ==================================== */}
              <div className="methodology-items">
                {group.items?.map((item) => (
                  <span
                    key={item.id}
                    className="methodology-item"
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

export default MethodologiesTools;