import { contactHeroData }
from "../../data/contact/contactHeroData";

import "../../styles/contact/contactHero.css";

function ContactHero() {

  return (

    <section className="contact-hero section">

      <div className="container">

        <div className="contact-hero-content">

          <span className="contact-badge">

            {contactHeroData.badge}

          </span>

          <h1>

            {contactHeroData.title}

          </h1>

          <p>

            {contactHeroData.subtitle}

          </p>

        </div>

      </div>

    </section>

  );

}

export default ContactHero;