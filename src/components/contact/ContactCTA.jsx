import { FaEnvelope, FaDownload }
from "react-icons/fa";

import "../../styles/contact/contactCTA.css";

function ContactCTA() {

  return (

    <section className="contact-cta section">

      <div className="container">

        <div className="contact-cta-card">

          <span className="contact-cta-badge">

            Ready to Collaborate?

          </span>

          <h2>

            Let's Create Meaningful Solutions Together

          </h2>

          <p>

            Whether in healthcare, public health,
            research, leadership, data science,
            or software engineering, I would be delighted
            to connect and contribute to impactful work.

          </p>


          <div className="contact-cta-buttons">

            <a
              href="/contact"
              className="contact-btn-primary"
            >

              <FaEnvelope />

              <span>

                Send a Message

              </span>

            </a>


            <a
              href="/cv"
              className="contact-btn-secondary"
            >

              <FaDownload />

              <span>

                Download CV

              </span>

            </a>

          </div>

        </div>

      </div>

    </section>

  );

}

export default ContactCTA;