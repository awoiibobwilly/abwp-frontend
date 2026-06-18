import EducationCard from "./EducationCard";

import {
  educationData,
} from "../../data/cv/educationData";

import "../../styles/cv/education.css";

function EducationSection() {

  return (

    <section className="education section">

      <div className="container">

        <div className="education-header">

          <span className="education-badge">

            Education

          </span>

          <h2 className="section-title">

            Academic Foundation

          </h2>

          <p className="section-subtitle">

            A journey of formal education,
            continuous learning, and professional
            development across healthcare,
            research, leadership, and technology.

          </p>

        </div>


        <div className="education-timeline">

          {educationData.map(
            (education, index) => (

              <EducationCard
                key={index}
                education={education}
              />

            )
          )}

        </div>

      </div>

    </section>

  );

}

export default EducationSection;