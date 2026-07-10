import "../../styles/insights/categories.css";

// ==========================================================
// CATEGORIES SECTION
// INSIGHTS PAGE
// ABW PORTFOLIO
// PREMIUM BALANCE PASS
// ==========================================================

function CategoriesSection({
  intro,
  categories = [],
}) {
  if (!categories.length) {
    return null;
  }

  return (
    <section className="insights-categories section">
      <div className="container">
        {/* ==========================================
            HEADER
        ========================================== */}
        <div className="categories-header">
          <span className="categories-badge">
            {intro?.eyebrow || "Explore Topics"}
          </span>

          <h2 className="section-title">
            {intro?.title ||
              "Areas of Thought & Interest"}
          </h2>

          <p className="section-subtitle">
            {intro?.intro ||
              "A collection of themes and disciplines that shape my reflections, articles, and professional perspectives."}
          </p>
        </div>

        {/* ==========================================
            TOPIC CLOUD
        ========================================== */}
        <div className="categories-cloud-wrap">
          <div className="categories-cloud">
            {categories.map((category) => (
              <div
                className="category-pill"
                key={category.id}
              >
                {category.name}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default CategoriesSection;