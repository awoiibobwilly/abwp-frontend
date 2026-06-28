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

                project.category?.color

                    ? `${project.category.color}22`

                    : "#eef2ff",

                color:

                project.category?.color ||

                "#2563eb",

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

                project.status

                    ? project.status.replace("_", " ")

                    : "Unknown"

            }

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

                    <div className="project-meta-item">

                        <strong>

                            Client

                        </strong>

                        <span>

                            {project.client}

                        </span>

                    </div>

                )

            }

            {

                project.role && (

                    <div className="project-meta-item">

                        <strong>

                            Role

                        </strong>

                        <span>

                            {project.role}

                        </span>

                    </div>

                )

            }

            </div>

      {/* ======================================
          Technologies
      ======================================= */}

      {

        project.technologies?.length > 0 && (

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