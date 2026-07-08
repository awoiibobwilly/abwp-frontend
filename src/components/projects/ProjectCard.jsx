import {
  FaGithub,
  FaExternalLinkAlt,
} from "react-icons/fa";

// ==========================================================
// FORMAT PROJECT STATUS
// ==========================================================

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

// ==========================================================
// PROJECT CARD
// FEATURED PROJECTS
// ==========================================================

function ProjectCard({ project, reverse }) {
  const image =
    project?.home_media?.file || "/images/placeholder.webp";

  const technologies = project?.technologies || [];
  const limitedTech = technologies.slice(0, 8);

  return (
    <article
      className={`project-card ${
        reverse ? "reverse" : ""
      }`}
    >
      {/* ==========================================
          IMAGE PANEL
      ========================================== */}
      <div className="project-image-shell">
        <div className="project-image">
          <img
            src={image}
            alt={project?.title || "Project"}
          />
        </div>
      </div>

      {/* ==========================================
          CONTENT PANEL
      ========================================== */}
      <div className="project-content">
        {/* ======================================
            TOP META
        ====================================== */}
        <div className="project-top">
          <div className="project-top-left">
            <span className="project-category">
              {project?.category?.name || "Project"}
            </span>

            {project?.status && (
              <span className="project-status">
                {formatProjectStatus(project?.status)}
              </span>
            )}
          </div>
        </div>

        {/* ======================================
            TITLE + SUMMARY
        ====================================== */}
        <div className="project-copy">
          <h3>
            {project?.title}
          </h3>

          <p className="project-summary">
            {project?.short_description}
          </p>
        </div>

        {/* ======================================
            PROJECT DETAILS
        ====================================== */}
        <div className="project-meta-grid">
          <div className="project-meta-item">
            <span className="project-meta-label">
              Domain
            </span>
            <span className="project-meta-value">
              {project?.category?.name || "Project"}
            </span>
          </div>

          <div className="project-meta-item">
            <span className="project-meta-label">
              Status
            </span>
            <span className="project-meta-value">
              {formatProjectStatus(project?.status) || "Active"}
            </span>
          </div>

          <div className="project-meta-item">
            <span className="project-meta-label">
              Stack
            </span>
            <span className="project-meta-value project-meta-stack">
              {limitedTech.length > 0
                ? limitedTech
                    .slice(0, 3)
                    .map((tech) => tech.name)
                    .join(" • ")
                : "Modern Web Stack"}
            </span>
          </div>
        </div>

        {/* ======================================
            TECHNOLOGIES
        ====================================== */}
        {limitedTech.length > 0 && (
          <div className="project-tech">
            {limitedTech.map((tech, index) => (
              <span key={tech.id || index}>
                {tech.name}
              </span>
            ))}
          </div>
        )}

        {/* ======================================
            LINKS
        ====================================== */}
        <div className="project-links">
          {project?.github_url && project.github_url !== "#" && (
            <a
              href={project.github_url}
              target="_blank"
              rel="noopener noreferrer"
              className="project-link project-link-primary"
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
              className="project-link project-link-secondary"
            >
              <FaExternalLinkAlt />
              Live Demo
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

export default ProjectCard;