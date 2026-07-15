import { Link } from "react-router-dom";

import {
  FiArrowRight,
  FiBookOpen,
  FiCalendar,
  FiClock,
} from "react-icons/fi";

import "../../styles/insights/latestThoughts.css";

// ==========================================================
// DATE FORMATTER
// ==========================================================

function formatDate(date) {

  if (!date) return null;

  return new Date(date).toLocaleDateString(
    "en-US",
    {
      year: "numeric",
      month: "short",
      day: "numeric",
    }
  );

}

// ==========================================================
// LATEST THOUGHT CARD
// INSIGHTS PAGE
// ABW PORTFOLIO
// ==========================================================

function LatestThoughtCard({
  thought,
}) {

  if (!thought) {
    return null;
  }

  return (

    <article className="latest-thought-card">

      {/* ==========================================
          META
      ========================================== */}

      <div className="latest-thought-meta">

        <span className="latest-thought-category">

          <FiBookOpen />

          {thought.category || "Insights"}
        </span>

        <div className="latest-thought-reading">

          {thought.read_time && (

            <span>

              <FiClock />

              {thought.read_time}

            </span>

          )}

          {thought.published_at && (

            <span>

              <FiCalendar />

              {formatDate(
                thought.published_at
              )}

            </span>

          )}

        </div>

      </div>

      {/* ==========================================
          CONTENT
      ========================================== */}

      <div className="latest-thought-content">

        <h3 className="latest-thought-title">

          <Link
            to={`/insights/${thought.slug}`}
          >

            {thought.title}

          </Link>

        </h3>

        <p className="latest-thought-excerpt">

          {thought.excerpt ||
            thought.summary ||
            "Discover practical insights, thoughtful reflections, and evidence-driven perspectives from my latest writing."}

        </p>

      </div>

      {/* ==========================================
          FOOTER
      ========================================== */}

      <div className="latest-thought-footer">

        <Link
          to={`/insights/${thought.slug}`}
          className="latest-thought-link"
        >

          Continue Reading

          <FiArrowRight />

        </Link>

      </div>

    </article>

  );

}

export default LatestThoughtCard;