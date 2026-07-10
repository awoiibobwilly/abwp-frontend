import ThoughtCard from "./ThoughtCard";
import "../../styles/insights/latestThoughts.css";

// ==========================================================
// LATEST THOUGHTS
// INSIGHTS PAGE
// ABW PORTFOLIO
// PREMIUM BALANCE PASS
// ==========================================================

function LatestThoughts({
  intro,
  thoughts = [],
}) {
  if (!thoughts.length) {
    return null;
  }

  return (
    <section className="latest-thoughts section">
      <div className="container">
        {/* ==========================================
            HEADER
        ========================================== */}
        <div className="thoughts-header">
          <span className="thoughts-badge">
            {intro?.eyebrow || "Latest Reflections"}
          </span>

          <h2 className="section-title">
            {intro?.title || "Thoughts Worth Sharing"}
          </h2>

          <p className="section-subtitle">
            {intro?.intro ||
              "Brief reflections and perspectives on healthcare, research, leadership, technology, and lifelong learning."}
          </p>
        </div>

        {/* ==========================================
            THOUGHTS GRID
        ========================================== */}
        <div className="thoughts-grid">
          {thoughts.map((thought) => (
            <ThoughtCard
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