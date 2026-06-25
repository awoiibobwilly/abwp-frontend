import { Link } from "react-router-dom";
import * as FaIcons from "react-icons/fa";

function ProjectCard({ project }) {
  const getIcon = (name) => (name ? FaIcons[name] || null : null);
  const CategoryIcon = getIcon(project.category?.icon);

  const heroImage =
    project.hero_media?.file ||
    project.thumbnail ||
    (project.media?.length ? project.media[0].file : null);

  return (
    <article className="project-card">
      <div className="project-image">
        {heroImage ? (
          <img src={heroImage} alt={project.title} loading="lazy" />
        ) : (
          <div className="project-placeholder">
            <span>ABW</span>
            <p>Project Preview</p>
          </div>
        )}
        {project.featured && <span className="featured-ribbon">★ Featured</span>}
      </div>

      <div className="project-content">
        <div className="project-meta">
          <span className="project-category"
            style={{backgroundColor:`${project.category?.color}22`,color:project.category?.color}}>
            {CategoryIcon && <CategoryIcon />}
            {project.category?.name}
          </span>
          <span className={`project-status ${project.status}`}>
            {project.status.replace("_"," ")}
          </span>
        </div>

        <h3 className="project-title">{project.title}</h3>
        <p className="project-description">{project.short_description}</p>

        <div className="project-client-role">
          {project.client && <p><strong>Client:</strong> {project.client}</p>}
          {project.role && <p><strong>Role:</strong> {project.role}</p>}
        </div>

        {!!project.technologies?.length && (
          <div className="project-technologies">
            {project.technologies.map((tech)=>{
              const TechIcon=getIcon(tech.icon);
              return (
                <span key={tech.id} className="technology-pill" style={{borderColor:tech.color}}>
                  {TechIcon && <TechIcon style={{color:tech.color,marginRight:6}} />}
                  {tech.name}
                </span>
              );
            })}
          </div>
        )}
      </div>

      <div className="project-footer">
        <div className="project-links">
          {project.live_url && <a href={project.live_url} target="_blank" rel="noopener noreferrer" className="project-btn primary">🌐 Live Demo</a>}
          {project.github_url && <a href={project.github_url} target="_blank" rel="noopener noreferrer" className="project-btn secondary">GitHub</a>}
        </div>
        <Link to={`/projects/${project.slug}`} className="project-more">Learn More →</Link>
      </div>
    </article>
  );
}

export default ProjectCard;
