import {
  FaLaptopCode,
  FaHeartbeat,
  FaChartLine,
  FaDatabase,
  FaGlobe,
  FaLightbulb,
  FaCodeBranch,
  FaProjectDiagram,
  FaArrowRight,
} from "react-icons/fa";

// ==========================================================
// CATEGORY ICON MAP
// ==========================================================

const iconMap = {
  software: FaLaptopCode,
  healthcare: FaHeartbeat,
  data: FaChartLine,
  analytics: FaDatabase,
  public_health: FaGlobe,
  innovation: FaLightbulb,
  open_source: FaCodeBranch,
  systems: FaProjectDiagram,
};

// ==========================================================
// CATEGORY CARD
// PROJECT CATEGORIES
// PROJECTS PAGE
// FINAL BALANCE PASS
// ==========================================================

function CategoryCard({ category }) {
  const Icon =
    iconMap[category?.slug] || FaProjectDiagram;

  const count = category?.projects_count || 0;

  return (
    <article className="category-card">
      {/* ======================================
          TOP
      ====================================== */}
      <div className="category-card-top">
        <div className="category-icon">
          <Icon />
        </div>

        <div className="category-card-heading">
          <h3>{category?.name}</h3>
          <span className="category-count">
            {count} {count === 1 ? "project" : "projects"}
          </span>
        </div>
      </div>

      {/* ======================================
          BODY
      ====================================== */}
      <p className="category-description">
        {category?.description ||
          "Project work and problem-solving initiatives in this focus area."}
      </p>

      {/* ======================================
          FOOTER
      ====================================== */}
      <div className="category-card-footer">
        <span className="category-focus-chip">
          Focus Area
          <FaArrowRight />
        </span>
      </div>
    </article>
  );
}

export default CategoryCard;