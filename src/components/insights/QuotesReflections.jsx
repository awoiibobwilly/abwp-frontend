import ReflectionCard from "./ReflectionCard";

import "../../styles/insights/quotesReflections.css";

// ==========================================================
// QUOTES & REFLECTIONS
// INSIGHTS PAGE
// ABW PORTFOLIO
//
// PREMIUM EDITORIAL REFLECTIONS
// ==========================================================

function QuotesReflections({
  intro,
  quotes = [],
}) {

  // ==================================================
  // EMPTY STATE
  // ==================================================

  if (!quotes.length) {
    return null;
  }

  // ==================================================
  // COMPONENT
  // ==================================================

  return (

    <section className="quotes-reflections section">

      <div className="container">

        {/* ==========================================
            SECTION HEADER
        ========================================== */}

        <header className="quotes-header">

          <span className="quotes-badge">

            {intro?.eyebrow ||
              "Quotes & Reflections"}

          </span>

          <h2 className="section-title">

            {intro?.title ||
              "Ideas Worth Remembering"}

          </h2>

          <p className="section-subtitle">

            {intro?.intro ||

              "Short reflections that capture the principles shaping my work across healthcare, leadership, research, technology, and lifelong learning."

            }

          </p>

        </header>

        {/* ==========================================
            REFLECTION GRID
        ========================================== */}

        <div className="quotes-grid">

          {quotes.map((quote) => (

            <ReflectionCard

              key={quote.id}

              quote={quote}

            />

          ))}

        </div>

      </div>

    </section>

  );

}

export default QuotesReflections;