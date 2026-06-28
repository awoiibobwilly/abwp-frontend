import { getIcon } from "../../utils/iconMapper";

import StatusBadge from "../common/StatusBadge";
import TechnologyBadge from "./TechnologyBadge";

function ProjectMeta({

  project,

}) {

  const CategoryIcon = getIcon(

    project.category?.icon

  );

  /* ==========================================
     Temporary Status Variant Mapping
     Remove once supplied by the API
  ========================================== */

  const statusVariant = {

    completed: "success",

    in_progress: "warning",

    planned: "info",

    paused: "secondary",

  }[

    project.status

  ] || "info";

  return (

    <div className="project-content">

      {/* ======================================
          Category & Status
      ======================================= */}

      <div className="project-meta">

        {

          project.category && (

            <span

              className="project-category"

              style={{

                backgroundColor:

                  `${project.category.color}22`,

                color:

                  project.category.color,

              }}

            >

              {

                CategoryIcon && (

                  <CategoryIcon />

                )

              }

              {project.category.name}

            </span>

          )

        }

        <StatusBadge

          label={

            project.status?.replace(

              "_",

              " "

            )

          }

          variant={statusVariant}

        />

      </div>

      {/* ======================================
          Title
      ======================================= */}

      <h3 className="project-title">

        {project.title}

      </h3>

      {/* ======================================
          Description
      ======================================= */}

      <p className="project-description">

        {project.short_description}

      </p>

      {/* ======================================
          Client & Role
      ======================================= */}

      <div className="project-client-role">

        {

          project.client && (

            <p>

              <strong>

                Client:

              </strong>

              {" "}

              {project.client}

            </p>

          )

        }

        {

          project.role && (

            <p>

              <strong>

                Role:

              </strong>

              {" "}

              {project.role}

            </p>

          )

        }

      </div>

      {/* ======================================
          Technologies
      ======================================= */}

      {

        !!project.technologies?.length && (

          <div className="project-technologies">

            {

              project.technologies.map(

                (

                  technology

                ) => (

                  <TechnologyBadge

                    key={technology.id}

                    technology={technology}

                  />

                )

              )

            }

          </div>

        )

      }

    </div>

  );

}

export default ProjectMeta;