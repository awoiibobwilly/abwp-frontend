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
// PROJECTS PAGE
// FINAL BALANCE PASS — FLAGSHIP REFINEMENT
// ==========================================================

function ProjectCard({ project, reverse }) {
  const image =
    project?.home_media?.file || "/images/placeholder.webp";

  const technologies = project?.technologies || [];
  const limitedTech = technologies.slice(0, 8);

  const statusLabel =
    formatProjectStatus(project?.status) || "Active";

  const stackPreview =
    limitedTech.length > 0
      ? limitedTech
          .slice(0, 3)
          .map((tech) => tech.name)
          .join(" • ")
      : "Modern Web Stack";

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
                {statusLabel}
              </span>
            )}
          </div>
        </div>

        {/* ======================================
            TITLE + SUMMARY
        ====================================== */}
        <div className="project-copy">
          <h3>{project?.title}</h3>

          <p className="project-summary">
            {project?.short_description}
          </p>
        </div>

        {/* ======================================
            PROJECT HIGHLIGHTS
        ====================================== */}
        <div className="project-highlights">
          <span className="project-highlight-item">
            <span className="project-highlight-label">
              Domain
            </span>
            <span className="project-highlight-value">
              {project?.category?.name || "Project"}
            </span>
          </span>

          <span className="project-highlight-divider" />

          <span className="project-highlight-item">
            <span className="project-highlight-label">
              Status
            </span>
            <span className="project-highlight-value">
              {statusLabel}
            </span>
          </span>

          <span className="project-highlight-divider" />

          <span className="project-highlight-item">
            <span className="project-highlight-label">
              Stack
            </span>
            <span className="project-highlight-value">
              {stackPreview}
            </span>
          </span>
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
          {project?.github_url &&
            project.github_url !== "#" && (
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

          {project?.live_url &&
            project.live_url !== "#" && (
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