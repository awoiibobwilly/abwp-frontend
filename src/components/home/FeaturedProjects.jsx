import { useEffect, useState } from "react";

import { motion } from "framer-motion";

import SectionHeader from "../common/SectionHeader";
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

        setProjects(data);

      }

      catch (err) {

        console.error(err);

        setError(

          err?.detail ||

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

        <SectionHeader

          eyebrow="Portfolio"

          title="Featured Work"

          description="A selection of healthcare, software engineering, research, leadership and digital transformation projects demonstrating innovation, impact and continuous growth."

        />

        {/* ===================================
            Loading
        ==================================== */}

        {

          loading && (

            <FeaturedProjectsSkeleton />

          )

        }

        {/* ===================================
            Error
        ==================================== */}

        {

          !loading && error && (

            <div className="projects-message error">

              {error}

            </div>

          )

        }

        {/* ===================================
            Empty
        ==================================== */}

        {

          !loading &&

          !error &&

          projects.length === 0 && (

            <div className="projects-message">

              Featured projects will appear here soon.

            </div>

          )

        }

        {/* ===================================
            Projects Grid
        ==================================== */}

        {

          !loading &&

          !error &&

          projects.length > 0 && (

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

          )

        }

      </div>

    </section>

  );

}

export default FeaturedProjects;