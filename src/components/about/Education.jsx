import { educationData } from "../../data/about/educationData";

import "../../styles/about/education.css";

function Education() {
  return (
    <section className="education section">

      <div className="container">

        <div className="education-header">

          <span className="education-badge">
            Education
          </span>

          <h2 className="section-title">
            Academic Journey
          </h2>

          <p className="section-subtitle">
            A lifelong commitment to learning, professional
            growth, and continuous development.
          </p>

        </div>

        <div className="education-timeline">

          {educationData.map((item, index) => (

            <div
              className="education-item"
              key={index}
            >

              <div className="education-dot"></div>

              <div className="education-content">

                <span className="education-period">
                  {item.period}
                </span>

                <h3>
                  {item.qualification}
                </h3>

                <h4>
                  {item.institution}
                </h4>

                <p>
                  {item.description}
                </p>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Education;