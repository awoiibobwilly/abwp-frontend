import {
    FaGithub,
    FaExternalLinkAlt
  } from "react-icons/fa";
  
  function ProjectCard({ project, reverse }) {
  
    return (
  
      <div
        className={`project-card ${
          reverse ? "reverse" : ""
        }`}
      >
  
        {/* IMAGE */}
  
        <div className="project-image">
  
          <img
            src={project.image}
            alt={project.title}
          />
  
        </div>
  
  
        {/* CONTENT */}
  
        <div className="project-content">
  
          <div className="project-top">
  
            <span className="project-category">
              {project.category}
            </span>
  
            <span className="project-status">
              {project.status}
            </span>
  
          </div>
  
  
          <h3>
            {project.title}
          </h3>
  
          <p>
            {project.description}
          </p>
  
  
          <div className="project-tech">
  
            {project.technologies.map((tech, index) => (
  
              <span key={index}>
                {tech}
              </span>
  
            ))}
  
          </div>
  
  
          <div className="project-links">
  
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
            >
  
              <FaGithub />
  
              GitHub
  
            </a>
  
  
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
            >
  
              <FaExternalLinkAlt />
  
              Live Demo
  
            </a>
  
          </div>
  
        </div>
  
      </div>
  
    );
  
  }
  
  export default ProjectCard;