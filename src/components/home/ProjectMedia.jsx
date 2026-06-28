import { Link } from "react-router-dom";

function ProjectMedia({

  project,

}) {

  const heroImage =

    project.hero_media?.file ||

    project.thumbnail ||

    (project.media?.length

      ? project.media[0].file

      : null);

  return (

    <div className="project-image">

      {

        heroImage ? (

          <img

            src={heroImage}

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

      {/* Optional clickable overlay */}

      <Link

        to={`/projects/${project.slug}`}

        className="project-image-overlay"

        aria-label={`View ${project.title}`}

      />

    </div>

  );

}

export default ProjectMedia;