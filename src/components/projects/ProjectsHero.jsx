import { projectsHeroData }
from "../../data/projects/projectsHeroData";

import "../../styles/projects/projectsHero.css";

function ProjectsHero() {

  return (

    <section className="projects-hero section">

      <div className="container">

        <div className="projects-hero-content">

          <span className="projects-badge">
            {projectsHeroData.badge}
          </span>

          <h1>
            {projectsHeroData.title}
          </h1>

          <p>
            {projectsHeroData.subtitle}
          </p>

        </div>

      </div>

    </section>

  );

}

export default ProjectsHero;