import "../../styles/about/about-hero.css";

function AboutHero({ data }) {
  if (!data) return null;

  const {
    eyebrow,
    title,
    description,
    image,
    image_alt,
    stats = [],
    highlights = [],
  } = data;

  
  console.log("ABOUT HERO DATA:", data);
  return (
    <section className="about-hero section">
      <div className="container">
        <div className="about-hero-grid">
          {/* ==================================================
              LEFT CONTENT
          ================================================== */}
          <div className="about-hero-content">
            {eyebrow && (
              <span className="section-eyebrow">
                {eyebrow}
              </span>
            )}
            

            {title && (
              <h1 className="about-hero-title">
                {title}
              </h1>
            )}

            {description && (
              <p className="about-hero-description">
                {description}
              </p>
            )}

            {/* ==================================================
                HIGHLIGHT STRIP
            ================================================== */}
            {highlights.length > 0 && (
              <div className="about-hero-highlights">
                {highlights.map((item, index) => (
                  <span
                    key={`${item}-${index}`}
                    className="about-hero-highlight-pill"
                  >
                    {item}
                  </span>
                ))}
              </div>
            )}

            {/* ==================================================
                STATS
            ================================================== */}
            {stats.length > 0 && (
              <div className="about-hero-stats">
                {stats.map((stat, index) => (
                  <article
                    key={`${stat.label}-${index}`}
                    className="about-hero-stat-card"
                  >
                    <h3>
                      {stat.value}
                      {stat.suffix}
                    </h3>

                    <p>{stat.label}</p>
                  </article>
                ))}
              </div>
            )}
          </div>

          {/* ==================================================
              RIGHT IMAGE
          ================================================== */}
          <div className="about-hero-image-wrap">
            <div className="about-hero-image-card">
              <img
                src={image}
                alt={image_alt || "Awoii Bob Willy portrait"}
                className="about-hero-image"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutHero;