import SectionHeader from "../common/SectionHeader";
import SectionMessage from "../common/SectionMessage";

import TechnologyBadge from "./TechnologyBadge";
import TechnologyRibbonSkeleton from "./TechnologyRibbonSkeleton";

import useApiResource from "../../hooks/useApiResource";

import {
  getTechnologies,
} from "../../services/technologyService";

import "../../styles/home/technology-ribbon.css";

function TechnologyRibbon() {

  // ======================================================
  // Fetch Technologies
  // ======================================================

  const {

    data: technologies,

    loading,

    error,

  } = useApiResource(

    getTechnologies

  );

  // ======================================================
  // Component
  // ======================================================

  return (

    <section

      className="technology-ribbon section"

      id="technologies"

    >

      <div className="container">

        {/* ======================================
            Section Header
        ======================================= */}

        <SectionHeader

          eyebrow="Tech Stack"

          title="Technologies I Use"

          description="A carefully selected ecosystem of programming languages, frameworks, databases, cloud platforms and development tools used to build secure, scalable and modern digital solutions."

        />

        {/* ======================================
            Loading
        ======================================= */}

        {

          loading && (

            <TechnologyRibbonSkeleton />

          )

        }

        {/* ======================================
            Error
        ======================================= */}

        {

          !loading &&

          error && (

            <SectionMessage

              type="error"

              message={error}

            />

          )

        }

        {/* ======================================
            Empty
        ======================================= */}

        {

          !loading &&

          !error &&

          technologies.length === 0 && (

            <SectionMessage

              type="empty"

              message="Technologies will appear here soon."

            />

          )

        }

        {/* ======================================
            Technology Grid
        ======================================= */}

        {

          !loading &&

          !error &&

          technologies.length > 0 && (

            <div className="technology-ribbon-grid">

              {

                technologies.map(

                  (technology) => (

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

    </section>

  );

}

export default TechnologyRibbon;