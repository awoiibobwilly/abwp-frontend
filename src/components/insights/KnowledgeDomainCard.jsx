import { FaArrowRight, FaBookOpen } from "react-icons/fa";

import "../../styles/insights/knowledgeDomainCard.css";

// ==========================================================
// KNOWLEDGE DOMAIN CARD
// INSIGHTS PAGE
// ABW PORTFOLIO
// ==========================================================

function KnowledgeDomainCard({ category }) {
  if (!category) return null;

  const {
    name,
    description,
    accent_color,
    article_count,
  } = category;

  const articleLabel =
    article_count === 1
      ? "Published Insight"
      : "Published Insights";

  return (
    <article
      className="knowledge-domain-card"
      style={{
        "--domain-accent":
          accent_color || "#2563EB",
      }}
    >
      {/* ==========================================
          TOP
      ========================================== */}

      <div className="domain-top">
        <span className="domain-accent-dot" />

        <div className="domain-heading">
          <h3>{name}</h3>

          <p>
            {description ||
              "Exploring research, innovation and evidence-driven thinking within this knowledge domain."}
          </p>
        </div>
      </div>

      {/* ==========================================
          FOOTER
      ========================================== */}

      <div className="domain-footer">
        <div className="domain-count">
          <FaBookOpen />

          <span>
            <strong>{article_count}</strong>{" "}
            {articleLabel}
          </span>
        </div>

        <button
          className="domain-link"
          type="button"
        >
          <span>Explore Domain</span>

          <FaArrowRight />
        </button>
      </div>
    </article>
  );
}

export default KnowledgeDomainCard;