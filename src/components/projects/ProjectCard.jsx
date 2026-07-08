import {
  FaGithub,
  FaExternalLinkAlt,
} from "react-icons/fa";



function formatProjectStatus(status) {
  if (!status) return "";

  const map = {
    planning: "Planning",
    in_progress: "Ongoing",
    completed: "Completed",
    maintenance: "Maintenance",
    archived: "Archived",
  };

  return map[status] || status;
}

function ProjectCard({ project, reverse }) {
  const image =
    project?.home_media?.file || "/images/placeholder.webp";

  return (
    <div
      className={`project-card ${
        reverse ? "reverse" : ""
      }`}
    >
      <div className="project-image">
        <img
          src={image}
          alt={project?.title || "Project"}
        />
      </div>

      <div className="project-content">
        <div className="project-top">
          <span className="project-category">
            {project?.category?.name || "Project"}
          </span>

          <span className="project-status">
            {formatProjectStatus(project?.status)}
          </span>
        </div>

        <h3>
          {project?.title}
        </h3>

        <p>
          {project?.short_description}
        </p>

        <div className="project-tech">
          {project?.technologies?.map((tech, index) => (
            <span key={tech.id || index}>
              {tech.name}
            </span>
          ))}
        </div>

        <div className="project-links">
          {project?.github_url && project.github_url !== "#" && (
            <a
              href={project.github_url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub />
              GitHub
            </a>
          )}

          {project?.live_url && project.live_url !== "#" && (
            <a
              href={project.live_url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaExternalLinkAlt />
              Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;