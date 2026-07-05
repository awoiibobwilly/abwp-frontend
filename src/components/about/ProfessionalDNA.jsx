import { getAboutIcon } from "../../utils/aboutIcons";
import "../../styles/about/professional-dna.css";

function ProfessionalDNA({ intro, pillars = [] }) {
  if (!intro && pillars.length === 0) return null;

  return (
    <section className="professional-dna section">
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
            DNA PILLARS GRID
        ================================================== */}
        <div className="professional-dna-grid">
          {pillars.map((pillar) => {
            const Icon = getAboutIcon(pillar.icon);

            return (
              <article
                key={pillar.id}
                className="professional-dna-card"
              >
                <div className="professional-dna-icon">
                  <Icon />
                </div>

                <h3>{pillar.title}</h3>
                <p>{pillar.description}</p>

                {pillar.highlights?.length > 0 && (
                  <ul className="professional-dna-highlights">
                    {pillar.highlights.map((highlight, index) => (
                      <li key={`${pillar.id}-${index}`}>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                )}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default ProfessionalDNA;