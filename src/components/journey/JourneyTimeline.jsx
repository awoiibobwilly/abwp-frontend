import JourneyCard from "./JourneyCard";
import "../../styles/journey/journeyTimeline.css";

function JourneyTimeline({ intro, items = [] }) {
  return (
    <section className="journey-timeline section">
      <div className="container">
        <div className="timeline-header">
          {intro?.eyebrow && (
            <span className="timeline-badge">
              {intro.eyebrow}
            </span>
          )}

          {intro?.title && (
            <h2 className="section-title">
              {intro.title}
            </h2>
          )}

          {intro?.intro && (
            <p className="section-subtitle">
              {intro.intro}
            </p>
          )}
        </div>

        <div className="timeline">
          {items.map((item, index) => (
            <JourneyCard
              key={item.id || index}
              item={item}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default JourneyTimeline;