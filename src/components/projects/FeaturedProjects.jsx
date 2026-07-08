import ProjectCard from "./ProjectCard";
import "../../styles/projects/featuredProjects.css";

function FeaturedProjects({ intro, projects = [] }) {
  return (
    <section className="featured-projects section">
      <div className="container">
        <div className="featured-header">
          <span className="featured-badge">
            {intro?.eyebrow || "Featured Projects"}
          </span>

          <h2 className="section-title">
            {intro?.title || "Solutions Built For Impact"}
          </h2>

          <p className="section-subtitle">
            {intro?.intro ||
              "A selection of projects across healthcare, research, public health, and software engineering."}
          </p>
        </div>

        <div className="projects-list">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id || index}
              project={project}
              reverse={index % 2 !== 0}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeaturedProjects;