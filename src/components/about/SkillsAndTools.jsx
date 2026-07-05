import "../../styles/about/skills-tools.css";

function SkillsAndTools({ intro, categories = [] }) {
  if (!intro && categories.length === 0) return null;

  return (
    <section className="skills-tools section">
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
            SKILLS CATEGORIES GRID
        ================================================== */}
        {categories.length > 0 && (
          <div className="skills-tools-grid">
            {categories.map((category) => (
              <article
                key={category.id}
                className="skills-category-card"
              >
                <h3>{category.title}</h3>

                {category.skills?.length > 0 && (
                  <div className="skills-list">
                    {category.skills.map((skill, index) => (
                      <span
                        key={`${category.id}-${index}`}
                        className="skill-pill"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                )}
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default SkillsAndTools;