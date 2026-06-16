import "../../styles/home/contact-cta.css";

function ContactCTA() {
  return (
    <section className="contact-cta section">

      <div className="container">

        <div className="contact-cta-wrapper">

          <span className="contact-tag">
            Let's Connect
          </span>

          <h2 className="contact-title">
            Ready to Collaborate?
          </h2>

          <p className="contact-description">
            Let's build impactful solutions together
            across healthcare, technology, research,
            and leadership.
          </p>

          <div className="contact-buttons">

            <button className="btn btn-primary">
              Get In Touch
            </button>

            <button className="btn btn-secondary">
              Download CV
            </button>

          </div>

        </div>

      </div>

    </section>
  );
}

export default ContactCTA;