import "../../styles/journey/journeyHero.css";

function JourneyHero({ data }) {
  if (!data) return null;

  return (
    <section className="journey-hero section">
      <div className="container">
        <div className="journey-hero-content">
          {data.eyebrow && (
            <span className="journey-badge">
              {data.eyebrow}
            </span>
          )}

          {data.title && <h1>{data.title}</h1>}

          {data.description && <p>{data.description}</p>}
        </div>
      </div>
    </section>
  );
}

export default JourneyHero;