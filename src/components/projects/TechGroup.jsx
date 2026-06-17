function TechGroup({ group }) {

    return (
  
      <div className="tech-group">
  
        <h3>
          {group.title}
        </h3>
  
        <div className="tech-items">
  
          {group.technologies.map((tech, index) => (
  
            <span
              className="tech-badge"
              key={index}
            >
              {tech}
            </span>
  
          ))}
  
        </div>
  
      </div>
  
    );
  
  }
  
  export default TechGroup;