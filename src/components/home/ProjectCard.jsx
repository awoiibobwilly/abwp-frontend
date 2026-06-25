import { Link } from "react-router-dom";

function ProjectCard({ project }) {

  // ==========================================
  // Category Icons
  // ==========================================

  const categoryIcons = {

    "Software Engineering": "💻",

    "Healthcare Systems": "🏥",

    "Healthcare Management": "🩺",

    "Public Health": "🌍",

    "Data Science & Analytics": "📊",

    "Research & Academia": "📚",

    "Leadership & Governance": "🏛️",

  };

  // ==========================================
  // Status Configuration
  // ==========================================

  const statusConfig = {

    planning: {

      label: "Planning",

      icon: "📋",

    },

    in_progress: {

      label: "In Progress",

      icon: "🚧",

    },

    completed: {

      label: "Completed",

      icon: "✔",

    },

    maintenance: {

      label: "Maintenance",

      icon: "🛠",

    },

    archived: {

      label: "Archived",

      icon: "📦",

    },

  };

  const categoryName =
    project.category?.name || "Project";

  const categoryIcon =
    categoryIcons[categoryName] || "🚀";

  const status =
    statusConfig[project.status] || {

      label: project.status,

      icon: "📁",

    };

  const image =
    project.home_media?.file || null;

  // ==========================================
  // Component
  // ==========================================

  return (

    <article className="project-card">

      {/* =====================================
          Project Image
      ====================================== */}

      <div className="project-image">

        {

          image ? (

            <img

              src={image}

              alt={project.title}

              loading="lazy"

            />

          ) : (

            <div className="project-placeholder">

              <span>

                ABW

              </span>

              <p>

                Project Preview

              </p>

            </div>

          )

        }

        {

          project.featured && (

            <span className="featured-ribbon">

              ★ Featured

            </span>

          )

        }

      </div>

      {/* =====================================
          Card Content
      ====================================== */}

      <div className="project-content">

        {/* Metadata */}

        <div className="project-meta">

          <span className="project-category">

            {categoryIcon}

            {" "}

            {categoryName}

          </span>

          <span

            className={`project-status ${project.status}`}

          >

            {status.icon}

            {" "}

            {status.label}

          </span>

        </div>

        {/* Title */}

        <h3 className="project-title">

          {project.title}

        </h3>

        {/* Description */}

        <p className="project-description">

          {project.short_description}

        </p>

        {/* Technologies */}

        {

          project.technologies?.length > 0 && (

            <div className="project-technologies">

              {

                project.technologies.map(

                  (technology) => (

                    <span

                      key={technology.id}

                      className="technology-pill"

                    >

                      {technology.name}

                    </span>

                  )

                )

              }

            </div>

          )

        }

      </div>

      {/* =====================================
          Footer Actions
      ====================================== */}

      <div className="project-footer">

        <div className="project-links">

          {

            project.live_url && (

              <a

                href={project.live_url}

                target="_blank"

                rel="noopener noreferrer"

                className="project-btn primary"

              >

                Live Demo

              </a>

            )

          }

          {

            project.github_url && (

              <a

                href={project.github_url}

                target="_blank"

                rel="noopener noreferrer"

                className="project-btn secondary"

              >

                GitHub

              </a>

            )

          }

        </div>

        <Link

          to={`/projects/${project.slug}`}

          className="project-more"

        >

          Learn More →

        </Link>

      </div>

    </article>

  );

}

export default ProjectCard;