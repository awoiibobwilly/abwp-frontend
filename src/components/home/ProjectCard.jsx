function ProjectCard({
    title,
    category,
    description,
    technologies,
  }) {
    return (
      <div className="project-card">
  
        <span className="project-category">
          {category}
        </span>
  
        <h3>
          {title}
        </h3>
  
        <p>
          {description}
        </p>

        <p>
          {technologies}
        </p>
  
        <button className="project-btn">
          Learn More →
        </button>
  
      </div>
    );
  }
  
  export default ProjectCard;