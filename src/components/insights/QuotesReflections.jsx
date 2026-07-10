import { FaQuoteLeft } from "react-icons/fa";
import "../../styles/insights/quotesReflections.css";

// ==========================================================
// QUOTES & REFLECTIONS
// INSIGHTS PAGE
// ABW PORTFOLIO
// FINAL EDITORIAL HARMONY PASS
// ==========================================================

function QuotesReflections({
  intro,
  quotes = [],
}) {
  if (!quotes.length) {
    return null;
  }

  return (
    <section className="quotes-reflections section">
      <div className="container">
        {/* ==========================================
            HEADER
        ========================================== */}
        <div className="quotes-header">
          <span className="quotes-badge">
            {intro?.eyebrow || "Quotes & Reflections"}
          </span>

          <h2 className="section-title">
            {intro?.title || "Thoughts That Inspire Action"}
          </h2>

          <p className="section-subtitle">
            {intro?.intro ||
              "Ideas and reflections that shape my approach to healthcare, research, leadership, and technology."}
          </p>
        </div>

        {/* ==========================================
            QUOTES GRID
        ========================================== */}
        <div className="quotes-grid">
          {quotes.map((item, index) => (
            <article
              className={`quote-card ${
                index === 0 ? "quote-card-featured" : ""
              }`}
              key={item.id}
            >
              <div className="quote-card-top">
                <div className="quote-icon-wrap">
                  <FaQuoteLeft className="quote-icon" />
                </div>
              </div>

              <blockquote>{item.quote}</blockquote>

              <div className="quote-card-footer">
                <span className="quote-author">
                  — {item.author}
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default QuotesReflections;