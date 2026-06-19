import { FaDownload, FaEnvelope } from "react-icons/fa";

import "../../styles/cv/cvCTA.css";

function CVCTA() {

  return (

    <section className="cv-cta section">

      <div className="container">

        <div className="cv-cta-card">

          <span className="cv-cta-badge">

            Let's Connect

          </span>


          <h2>

            Ready to Make a Difference?

          </h2>


          <p>

            Let's collaborate to create meaningful
            solutions across healthcare, research,
            leadership, and technology.

          </p>


          <div className="cv-cta-buttons">

            <a
              href="/cv.pdf"
              download
              className="btn btn-primary"
            >

              <FaDownload />

              <span>

                Download CV

              </span>

            </a>


            <a
              href="/contact"
              className="btn btn-outline"
            >

              <FaEnvelope />

              <span>

                Get In Touch

              </span>

            </a>

          </div>

        </div>

      </div>

    </section>

  );

}

export default CVCTA;