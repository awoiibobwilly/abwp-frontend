import { skillsData } from "../../data/about/skillsData";

import "../../styles/about/skills.css";

function Skills() {
  return (
    <section className="skills section">

      <div className="container">

        {/* Header */}

        <div className="skills-header">

          <span className="skills-badge">
            Skills & Technologies
          </span>

          <h2 className="section-title">
            Expertise Across Multiple Domains
          </h2>

          <p className="section-subtitle">
            Combining healthcare, research, technology,
            and leadership to create meaningful impact.
          </p>

        </div>


        {/* Categories */}

        <div className="skills-wrapper">

          {skillsData.map((group, index) => (

            <div
              className="skill-category"
              key={index}
            >

              <h3>
                {group.category}
              </h3>

              <div className="skill-pills">

                {group.skills.map((skill, i) => (

                  <span
                    className="skill-pill"
                    key={i}
                  >
                    {skill}
                  </span>

                ))}

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Skills;