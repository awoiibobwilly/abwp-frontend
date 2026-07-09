// ==========================================================
// RESEARCH AREA CARD
// RESEARCH PAGE
// ABW PORTFOLIO
// ==========================================================

function ResearchAreaCard({ area }) {
  const accent =
    area?.accent_color ||
    area?.color ||
    "#2563EB";

  const areaTitleInitial =
    area?.title?.charAt(0)?.toUpperCase() || "R";

  return (
    <article className="research-area-card">
      {/* ========================================
          CARD TOP
      ======================================== */}
      <div className="research-area-card-top">
        <div
          className="research-area-icon"
          style={{
            background: `${accent}14`,
            color: accent,
          }}
        >
          <span>{areaTitleInitial}</span>
        </div>

        <span
          className="research-area-accent"
          style={{
            background: accent,
          }}
        />
      </div>

      {/* ========================================
          CARD BODY
      ======================================== */}
      <div className="research-area-card-body">
        <h3>{area?.title}</h3>

        <p>
          {area?.description}
        </p>
      </div>
    </article>
  );
}

export default ResearchAreaCard;