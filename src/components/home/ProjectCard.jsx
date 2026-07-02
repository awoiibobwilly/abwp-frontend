import { Link } from "react-router-dom";

import ProjectMedia from "./ProjectMedia";
import ProjectMeta from "./ProjectMeta";

function ProjectCard({

  project,

}) {

  return (

    <article className="project-card">

      {/* ======================================
          PROJECT MEDIA
      ======================================= */}

      <ProjectMedia

        project={project}

      />

      {/* ======================================
          PROJECT META
      ======================================= */}

      <ProjectMeta

        project={project}

      />

      {/* ======================================
          PROJECT FOOTER
      ======================================= */}

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
                  🌐 Live Demo
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

            <Link
              to={`/projects/${project.slug}`}
              className="project-more"
            >
              <span>Learn More</span>
              <span className="project-more-arrow">→</span>
            </Link>

          </div>

          </div>

    </article>

  );

}

export default ProjectCard;