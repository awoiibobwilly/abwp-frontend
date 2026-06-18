import ExperienceCard from "./ExperienceCard";

import {
  experienceData,
} from "../../data/cv/experienceData";

import "../../styles/cv/experience.css";

function ExperienceSection() {

  return (

    <section className="experience section">

      <div className="container">

        <div className="experience-header">

          <span className="experience-badge">

            Professional Experience

          </span>

          <h2 className="section-title">

            Experience and Impact

          </h2>

          <p className="section-subtitle">

            A multidisciplinary journey spanning
            healthcare, research, leadership,
            public health, and software engineering.

          </p>

        </div>


        <div className="experience-timeline">

          {experienceData.map(
            (experience, index) => (

              <ExperienceCard
                key={index}
                experience={experience}
              />

            )
          )}

        </div>

      </div>

    </section>

  );

}

export default ExperienceSection;