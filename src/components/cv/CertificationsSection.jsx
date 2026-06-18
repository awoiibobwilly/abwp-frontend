import CertificationCard from "./CertificationCard";

import {
  certificationsData,
} from "../../data/cv/certificationsData";

import "../../styles/cv/certifications.css";

function CertificationsSection() {

  return (

    <section className="certifications section">

      <div className="container">

        <div className="certifications-header">

          <span className="certifications-badge">

            Certifications & Licenses

          </span>


          <h2 className="section-title">

            Continuous Learning and Professional Development

          </h2>


          <p className="section-subtitle">

            Lifelong learning has been central to my
            growth across healthcare, research,
            leadership, and technology.

          </p>

        </div>


        <div className="certifications-grid">

          {certificationsData.map(

            (certification, index) => (

              <CertificationCard
                key={index}
                certification={certification}
              />

            )

          )}

        </div>

      </div>

    </section>

  );

}

export default CertificationsSection;