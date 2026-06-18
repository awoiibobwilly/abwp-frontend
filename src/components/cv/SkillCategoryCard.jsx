function SkillCategoryCard({ category }) {

    return (
  
      <div className="skill-card">
  
        <h3>
  
          {category.category}
  
        </h3>
  
  
        <div className="skill-tags">
  
          {category.skills.map(
  
            (skill, index) => (
  
              <span
                key={index}
                className="skill-tag"
              >
  
                {skill}
  
              </span>
  
            )
  
          )}
  
        </div>
  
      </div>
  
    );
  
  }
  
  export default SkillCategoryCard;