import { NavLink } from "react-router-dom";

import { projectsCTAData }
from "../../data/projects/projectsCTAData";

import "../../styles/projects/projectsCTA.css";

function ProjectsCTA() {

  return (

    <section className="projects-cta section">

      <div className="container">

        <div className="projects-cta-card">

          <span className="projects-cta-badge">

            {projectsCTAData.badge}

          </span>

          <h2>

            {projectsCTAData.title}

          </h2>

          <p>

            {projectsCTAData.subtitle}

          </p>


          <div className="projects-cta-buttons">

            <NavLink
              to={projectsCTAData.primaryButton.link}
              className="btn btn-primary"
            >

              {projectsCTAData.primaryButton.text}

            </NavLink>


            <NavLink
              to={projectsCTAData.secondaryButton.link}
              className="btn btn-outline"
            >

              {projectsCTAData.secondaryButton.text}

            </NavLink>

          </div>

        </div>

      </div>

    </section>

  );

}

export default ProjectsCTA;