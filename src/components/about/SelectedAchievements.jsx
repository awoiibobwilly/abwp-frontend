import "../../styles/about/selected-achievements.css";


function SelectedAchievements({ intro, achievements = [] }) {
  if (!intro && achievements.length === 0) return null;

  return (
    <section className="selected-achievements section">
      <div className="container">
        {/* ==================================================
            SECTION HEADING
        ================================================== */}
        <div className="section-heading">
          {intro?.eyebrow && (
            <span className="section-eyebrow">
              {intro.eyebrow}
            </span>
          )}

          {intro?.title && (
            <h2>{intro.title}</h2>
          )}

          {intro?.intro && (
            <p>{intro.intro}</p>
          )}
        </div>

        {/* ==================================================
            ACHIEVEMENTS GRID
        ================================================== */}
        {achievements.length > 0 && (
          <div className="selected-achievements-grid">
            {achievements.map((achievement) => (
              <article
                key={achievement.id}
                className="achievement-card"
              >
                <div className="achievement-meta">
                  {achievement.category && (
                    <span className="achievement-category">
                      {achievement.category}
                    </span>
                  )}

                  {achievement.year && (
                    <span className="achievement-year">
                      {achievement.year}
                    </span>
                  )}
                </div>

                <h3>{achievement.title}</h3>

                {achievement.description && (
                  <p>{achievement.description}</p>
                )}
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default SelectedAchievements;