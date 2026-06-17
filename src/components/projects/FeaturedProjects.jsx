import { featuredProjectsData }
from "../../data/projects/featuredProjectsData";

import ProjectCard from "./ProjectCard";

import "../../styles/projects/featuredProjects.css";

function FeaturedProjects() {

  return (
    <section className="featured-projects section">

      <div className="container">

        <div className="featured-header">

          <span className="featured-badge">
            Featured Projects
          </span>

          <h2 className="section-title">
            Solutions Built For Impact
          </h2>

          <p className="section-subtitle">
            A selection of projects across healthcare,
            research, public health, and software engineering.
          </p>

        </div>

        <div className="projects-list">

          {featuredProjectsData.map((project, index) => (

            <ProjectCard
              key={index}
              project={project}
              reverse={index % 2 !== 0}
            />

          ))}

        </div>

      </div>

    </section>
  );
}

export default FeaturedProjects;