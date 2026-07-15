import LatestThoughtCard from "./LatestThoughtCard";

import "../../styles/insights/latestThoughts.css";

// ==========================================================
// LATEST THOUGHTS
// INSIGHTS PAGE
// ABW PORTFOLIO
//
// PREMIUM EDITORIAL FEED
// ==========================================================

function LatestThoughts({
  intro,
  thoughts = [],
}) {

  // ==================================================
  // EMPTY STATE
  // ==================================================

  if (!thoughts.length) {
    return null;
  }

  // ==================================================
  // COMPONENT
  // ==================================================

  return (

    <section className="latest-thoughts section">

      <div className="container">

        {/* ==========================================
            SECTION HEADER
        ========================================== */}

        <header className="latest-thoughts-header">

          <span className="latest-thoughts-badge">

            {intro?.eyebrow ||
              "Latest Thoughts"}

          </span>

          <h2 className="section-title">

            {intro?.title ||
              "Recent Articles & Perspectives"}

          </h2>

          <p className="section-subtitle">

            {intro?.intro ||

              "A continuous stream of ideas, reflections, and evidence-driven perspectives exploring healthcare, leadership, research, software engineering, innovation, and lifelong learning."

            }

          </p>

        </header>

        {/* ==========================================
            EDITORIAL GRID
        ========================================== */}

        <div className="latest-thoughts-grid">

          {thoughts.map((thought) => (

            <LatestThoughtCard

              key={thought.id}

              thought={thought}

            />

          ))}

        </div>

      </div>

    </section>

  );

}

export default LatestThoughts;