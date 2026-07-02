function SkillCategoryCard({ category }) {
    return (
      <article className="skill-category-card">
  
        {/* ======================================
            CATEGORY TITLE
        ======================================= */}
        <h3 className="skill-category-title">
          {category.title}
        </h3>
  
        {/* ======================================
            CATEGORY ITEMS
        ======================================= */}
        {category.items?.length > 0 && (
          <ul className="skill-category-list">
            {category.items.map((item) => (
              <li
                key={item}
                className="skill-category-item"
              >
                {item}
              </li>
            ))}
          </ul>
        )}
      </article>
    );
  }
  
  export default SkillCategoryCard;