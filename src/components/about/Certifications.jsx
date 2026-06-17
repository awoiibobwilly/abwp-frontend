import { certificationsData } from "../../data/about/certificationsData";

import "../../styles/about/certifications.css";

function Certifications() {
  return (
    <section className="certifications section">

      <div className="container">

        <div className="certifications-header">

          <span className="certifications-badge">
            Certifications
          </span>

          <h2 className="section-title">
            Professional Credentials
          </h2>

          <p className="section-subtitle">
            Continuous learning and professional development
            have been essential parts of my journey.
          </p>

        </div>


        <div className="certifications-grid">

          {certificationsData.map((item, index) => (

            <div
              className="certification-card"
              key={index}
            >

              <span className="certification-issuer">
                {item.issuer}
              </span>

              <h3>
                {item.title}
              </h3>

              <p>
                {item.description}
              </p>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Certifications;