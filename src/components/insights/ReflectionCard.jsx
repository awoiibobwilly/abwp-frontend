import {
    FiBookmark,
    FiMessageSquare,
  } from "react-icons/fi";
  
  import "../../styles/insights/quotesReflections.css";
  
  // ==========================================================
  // REFLECTION CARD
  // INSIGHTS PAGE
  // ABW PORTFOLIO
  // ==========================================================
  
  function ReflectionCard({
    quote,
  }) {
  
    // ==================================================
    // EMPTY STATE
    // ==================================================
  
    if (!quote) {
      return null;
    }
  
    return (
  
      <article
        className="reflection-card"
        style={{
          "--reflection-accent":
            quote.accent_color ||
            "#2563eb",
        }}
      >
  
        {/* ==========================================
            QUOTE MARK
        ========================================== */}
  
        <div className="reflection-icon">
  
          <FiMessageSquare />
  
        </div>
  
        {/* ==========================================
            CATEGORY
        ========================================== */}
  
        <span className="reflection-category">
  
          {quote.category ||
            "Reflection"}
  
        </span>
  
        {/* ==========================================
            QUOTE
        ========================================== */}
  
        <blockquote className="reflection-quote">
  
          “{quote.quote}”
  
        </blockquote>
  
        {/* ==========================================
            FOOTER
        ========================================== */}
  
        <footer className="reflection-footer">
  
          <div className="reflection-author">
  
            <strong>
  
              {quote.author ||
                "Awoii Bob Willy"}
  
            </strong>
  
          </div>
  
          <div className="reflection-bookmark">
  
            <FiBookmark />
  
          </div>
  
        </footer>
  
      </article>
  
    );
  
  }
  
  export default ReflectionCard;