import ProjectCard from "./ProjectCard";
import { projectData } from "../../data/projectData";

import "../../styles/home/featured-projects.css";

function FeaturedProjects() {
  return (
    <section className="featured-projects section">

      <div className="container">

        <div className="section-header">

          <h2 className="section-title">
            Featured Projects
          </h2>

          <p className="section-subtitle">
            Some of the solutions, platforms, and initiatives
            I've designed and developed.
          </p>

        </div>

        <div className="projects-grid">

          {
            projectData.map((project, index) => (
              <ProjectCard
                key={index}
                {...project}
              />
            ))
          }

        </div>

      </div>

    </section>
  );
}

export default FeaturedProjects;