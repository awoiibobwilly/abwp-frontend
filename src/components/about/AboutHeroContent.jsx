function AboutHeroContent({ hero }) {
  return (
    <div className="about-hero-content">

      {/* ======================================
          EYEBROW
      ======================================= */}
      <span className="about-hero-eyebrow">
        {hero.eyebrow}
      </span>

      {/* ======================================
          TITLE
      ======================================= */}
      <h1 className="about-hero-title">
        {hero.title}
      </h1>

      {/* ======================================
          DESCRIPTION
      ======================================= */}
      <p className="about-hero-description">
        {hero.description}
      </p>

      {/* ======================================
          STATS
      ======================================= */}
      {hero.stats?.length > 0 && (
        <div className="about-hero-stats">
          {hero.stats.map((stat) => (
            <div
              key={stat.label}
              className="about-hero-stat-card"
            >
              <h3 className="about-hero-stat-value">
                {stat.value}
                {stat.suffix}
              </h3>

              <p className="about-hero-stat-label">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      )}

      {/* ======================================
          HIGHLIGHT STRIP
      ======================================= */}
      {hero.highlightStrip?.length > 0 && (
        <div className="about-hero-highlights">
          {hero.highlightStrip.map((item) => (
            <span
              key={item}
              className="about-hero-highlight-pill"
            >
              {item}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}

export default AboutHeroContent;