import { getIcon } from "../../utils/iconMapper";

function CategoryCard({ category }) {
  const Icon = getIcon(category?.icon);

  return (
    <div className="category-card">
      <div
        className="category-icon"
        style={{
          backgroundColor: `${category?.color || "#2563eb"}15`,
          color: category?.color || "#2563eb",
        }}
      >
        <Icon />
      </div>

      <h3>{category?.name}</h3>

      <p>{category?.description}</p>

      <span className="category-projects">
        {category?.project_count || 0} Projects
      </span>
    </div>
  );
}

export default CategoryCard;