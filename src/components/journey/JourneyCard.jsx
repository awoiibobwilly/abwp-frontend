// ==========================================================
// JOURNEY CARD
// JOURNEY PAGE
// ABW PORTFOLIO
// ==========================================================

function JourneyCard({ item, index }) {
  const alignmentClass = index % 2 === 0 ? "left" : "right";

  return (
    <div className={`timeline-item ${alignmentClass}`}>
      <div className="timeline-dot">
        <span />
      </div>

      <div className="timeline-card">
        {item?.year && (
          <div className="timeline-year">
            {item.year}
          </div>
        )}

        {item?.title && <h3>{item.title}</h3>}

        {(item?.organization || item?.duration) && (
          <div className="timeline-meta">
            {item?.organization && (
              <span className="timeline-org">
                {item.organization}
              </span>
            )}

            {item?.duration && (
              <span className="timeline-duration">
                {item.duration}
              </span>
            )}
          </div>
        )}

        {item?.summary && <p>{item.summary}</p>}
      </div>
    </div>
  );
}

export default JourneyCard;