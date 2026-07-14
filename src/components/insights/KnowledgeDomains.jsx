import KnowledgeDomainCard from "./KnowledgeDomainCard";

import "../../styles/insights/knowledgeDomains.css";

// ==========================================================
// KNOWLEDGE DOMAINS
// INSIGHTS PAGE
// ABW PORTFOLIO
//
// PREMIUM KNOWLEDGE GRID
// ==========================================================

function KnowledgeDomains({
  intro,
  categories = [],
}) {

  // ==================================================
  // EMPTY STATE
  // ==================================================

  if (!categories.length) {
    return null;
  }

  // ==================================================
  // COMPONENT
  // ==================================================

  return (

    <section className="knowledge-domains section">

      <div className="container">

        {/* ==========================================
            SECTION HEADER
        ========================================== */}

        <div className="knowledge-header">

          <span className="knowledge-badge">

            {intro?.eyebrow ||
              "Knowledge Domains"}

          </span>

          <h2 className="section-title">

            {intro?.title ||
              "Explore My Areas of Expertise"}

          </h2>

          <p className="section-subtitle">

            {intro?.intro ||

              "A multidisciplinary collection of knowledge spanning healthcare, research, leadership, software engineering, data science and innovation."

            }

          </p>

        </div>

        {/* ==========================================
            KNOWLEDGE GRID
        ========================================== */}

        <div className="knowledge-grid">

          {categories.map((category) => (

            <KnowledgeDomainCard

              key={category.id}

              category={category}

            />

          ))}

        </div>

      </div>

    </section>

  );

}

export default KnowledgeDomains;