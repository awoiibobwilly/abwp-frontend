import "../../styles/about/credentials.css";


function Credentials({ intro, credentials }) {
  const education = credentials?.education || [];
  const certifications = credentials?.certifications || [];

  if (!intro && education.length === 0 && certifications.length === 0) {
    return null;
  }

  return (
    <section className="credentials section">
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
            CREDENTIALS GRID
        ================================================== */}
        <div className="credentials-grid">
          {/* ==============================================
              EDUCATION COLUMN
          ============================================== */}
          <div className="credentials-column">
            <div className="credentials-column-header">
              <h3>Education</h3>
            </div>

            {education.length > 0 && (
              <div className="credentials-list">
                {education.map((item) => (
                  <article
                    key={item.id}
                    className="credential-card"
                  >
                    <h4>{item.title}</h4>

                    <div className="credential-meta">
                      {item.institution && (
                        <span>{item.institution}</span>
                      )}

                      {item.period && (
                        <span>{item.period}</span>
                      )}
                    </div>

                    {item.note && <p>{item.note}</p>}
                  </article>
                ))}
              </div>
            )}
          </div>

          {/* ==============================================
              CERTIFICATIONS COLUMN
          ============================================== */}
          <div className="credentials-column">
            <div className="credentials-column-header">
              <h3>Certifications & Training</h3>
            </div>

            {certifications.length > 0 && (
              <div className="credentials-list">
                {certifications.map((item) => (
                  <article
                    key={item.id}
                    className="credential-card"
                  >
                    <h4>{item.title}</h4>

                    <div className="credential-meta">
                      {item.institution && (
                        <span>{item.institution}</span>
                      )}

                      {item.period && (
                        <span>{item.period}</span>
                      )}
                    </div>

                    {item.note && <p>{item.note}</p>}
                  </article>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Credentials;