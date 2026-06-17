function CategoryCard({ category }) {

    const Icon = category.icon;
  
    return (
  
      <div className="category-card">
  
        <div className="category-icon">
  
          <Icon />
  
        </div>
  
        <h3>
          {category.title}
        </h3>
  
        <p>
          {category.description}
        </p>
  
        <span className="category-projects">
  
          {category.projects}
  
        </span>
  
      </div>
  
    );
  
  }
  
  export default CategoryCard;