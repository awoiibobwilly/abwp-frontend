import CategoryCard from "./CategoryCard";
import "../../styles/projects/projectCategories.css";

function ProjectCategories({ intro, categories = [] }) {
  return (
    <section className="project-categories section">
      <div className="container">
        <div className="categories-header">
          <span className="categories-badge">
            {intro?.eyebrow || "Domains of Impact"}
          </span>

          <h2 className="section-title">
            {intro?.title || "Areas Where Innovation Meets Purpose"}
          </h2>

          <p className="section-subtitle">
            {intro?.intro ||
              "Projects spanning healthcare, research, data science, and software engineering."}
          </p>
        </div>

        <div className="categories-grid">
          {categories.map((category, index) => (
            <CategoryCard
              key={category.id || index}
              category={category}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProjectCategories;