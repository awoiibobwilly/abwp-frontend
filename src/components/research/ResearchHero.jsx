import "../../styles/research/researchHero.css";

// ==========================================================
// RESEARCH HERO
// RESEARCH PAGE
// ABW PORTFOLIO
// ==========================================================

function ResearchHero({ hero }) {
  return (
    <section className="research-hero section">
      <div className="container">
        <div className="research-hero-content">
          <span className="research-badge">
            {hero?.eyebrow || "Research & Inquiry"}
          </span>

          <h1>
            {hero?.title ||
              "Research That Bridges Evidence, Systems, and Innovation"}
          </h1>

          <p>
            {hero?.description ||
              "A growing body of research and analytical work across health systems, healthcare financing, leadership, monitoring and evaluation, digital transformation, and evidence-based decision making."}
          </p>
        </div>
      </div>
    </section>
  );
}

export default ResearchHero;