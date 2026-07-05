import "../../styles/about/core-values.css";

function CoreValues({ intro, data }) {
  if (!intro && !data) return null;

  const values = data?.values || [];

  return (
    <section className="core-values section">
      <div className="container">
        <div className="section-heading">
          {intro?.eyebrow && (
            <span className="section-eyebrow">{intro.eyebrow}</span>
          )}
          {intro?.title && <h2>{intro.title}</h2>}
          {intro?.intro && <p>{intro.intro}</p>}
        </div>

        <div className="core-values-top">
          <article className="core-values-mission card">
            <h3>{data?.mission?.title}</h3>
            <p>{data?.mission?.description}</p>
          </article>

          <article className="core-values-vision card">
            <h3>{data?.vision?.title}</h3>
            <p>{data?.vision?.description}</p>
          </article>
        </div>

        <div className="core-values-grid">
          {values.map((value, index) => (
            <article key={value.id || index} className="core-value-card">
              <div className="core-value-letter">{value.letter}</div>
              <h3>{value.title}</h3>
              <p>{value.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CoreValues;