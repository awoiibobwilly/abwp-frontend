import { useEffect, useState } from "react";

import { motion } from "framer-motion";

import ProjectCard from "./ProjectCard";
import FeaturedProjectsSkeleton from "./FeaturedProjectsSkeleton";

import { getFeaturedProjects } from "../../services/projectService";

import "../../styles/home/featured-projects.css";

function FeaturedProjects() {

  // ==========================================
  // State
  // ==========================================

  const [projects, setProjects] = useState([]);

  const [loading, setLoading] = useState(true);

  const [error, setError] = useState("");

  // ==========================================
  // Fetch Featured Projects
  // ==========================================

  useEffect(() => {

    const fetchProjects = async () => {

      try {

        setLoading(true);

        setError("");

        const data = await getFeaturedProjects();

        setProjects(

          Array.isArray(data)
      
              ? data
      
              : data.results || []
      
      );

      }

      catch (err) {

        console.error(err);

        setError(

          "Unable to load featured projects."

        );

      }

      finally {

        setLoading(false);

      }

    };

    fetchProjects();

  }, []);

  // ==========================================
  // Loading
  // ==========================================

  if (loading) {

    return (

      <section className="featured-projects section">

        <div className="container">

          <div className="section-header">

            <h2 className="section-title">

              Featured Projects

            </h2>

            <p className="section-subtitle">

              Building solutions that create impact.

            </p>

          </div>

          <FeaturedProjectsSkeleton />

        </div>

      </section>

    );

  }

  // ==========================================
  // Error
  // ==========================================

  if (error) {

    return (

      <section className="featured-projects section">

        <div className="container">

          <div className="section-header">

            <h2 className="section-title">

              Featured Projects

            </h2>

          </div>

          <div className="projects-message error">

            {error}

          </div>

        </div>

      </section>

    );

  }

  // ==========================================
  // Empty
  // ==========================================

  if (projects.length === 0) {

    return (

      <section className="featured-projects section">

        <div className="container">

          <div className="section-header">

            <h2 className="section-title">

              Featured Projects

            </h2>

          </div>

          <div className="projects-message">

            Featured projects will appear here soon.

          </div>

        </div>

      </section>

    );

  }

  // ==========================================
  // Component
  // ==========================================

  return (

    <section

      className="featured-projects section"

      id="featured-projects"

    >

      <div className="container">

        {/* ===================================
            Section Header
        ==================================== */}

        <motion.div

          className="section-header"

          initial={{

            opacity: 0,

            y: 30,

          }}

          whileInView={{

            opacity: 1,

            y: 0,

          }}

          viewport={{

            once: true,

          }}

          transition={{

            duration: 0.6,

          }}

        >

          <h2 className="section-title">

            Featured Projects

          </h2>

          <p className="section-subtitle">

            A selection of healthcare, software engineering,
            research, leadership and digital transformation
            projects demonstrating innovation, impact and
            continuous growth.

          </p>

        </motion.div>

        {/* ===================================
            Projects Grid
        ==================================== */}

        <div className="projects-grid">

          {

            projects.map(

              (

                project,

                index,

              ) => (

                <motion.div

                  key={project.id}

                  initial={{

                    opacity: 0,

                    y: 40,

                  }}

                  whileInView={{

                    opacity: 1,

                    y: 0,

                  }}

                  viewport={{

                    once: true,

                  }}

                  transition={{

                    duration: 0.5,

                    delay: index * 0.12,

                  }}

                >

                  <ProjectCard

                    project={project}

                  />

                </motion.div>

              )

            )

          }

        </div>

      </div>

    </section>

  );

}

export default FeaturedProjects;