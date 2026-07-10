import { FaArrowRight } from "react-icons/fa";

// ==========================================================
// THOUGHT CARD
// INSIGHTS PAGE
// ABW PORTFOLIO
// PREMIUM BALANCE PASS
// ==========================================================

function ThoughtCard({ thought }) {
  const hasLink = Boolean(thought?.external_url);

  return (
    <article className="thought-card">
      {/* ======================================
          META
      ====================================== */}
      <div className="thought-meta">
        {thought?.category && (
          <span className="thought-category">
            {thought.category}
          </span>
        )}

        {thought?.published_date && (
          <span className="thought-date">
            {thought.published_date}
          </span>
        )}
      </div>

      {/* ======================================
          CONTENT
      ====================================== */}
      <h3>{thought?.title}</h3>

      <p>{thought?.excerpt}</p>

      {/* ======================================
          LINK
      ====================================== */}
      {hasLink ? (
        <a
          href={thought.external_url}
          className="thought-link"
          target="_blank"
          rel="noreferrer"
        >
          Read More
          <FaArrowRight />
        </a>
      ) : (
        <span className="thought-link thought-link-disabled">
          Read More
          <FaArrowRight />
        </span>
      )}
    </article>
  );
}

export default ThoughtCard;