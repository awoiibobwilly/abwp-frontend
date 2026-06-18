import SkillCategoryCard from "./SkillCategoryCard";

import {
  skillsData,
} from "../../data/cv/skillsData";

import "../../styles/cv/skills.css";

function SkillsSection() {

  return (

    <section className="skills section">

      <div className="container">

        <div className="skills-header">

          <span className="skills-badge">

            Skills & Technologies

          </span>

          <h2 className="section-title">

            Expertise Across Disciplines

          </h2>

          <p className="section-subtitle">

            A multidisciplinary combination of
            healthcare, research, leadership,
            public health, data science,
            and software engineering skills.

          </p>

        </div>


        <div className="skills-grid">

          {skillsData.map(

            (category, index) => (

              <SkillCategoryCard
                key={index}
                category={category}
              />

            )

          )}

        </div>

      </div>

    </section>

  );

}

export default SkillsSection;