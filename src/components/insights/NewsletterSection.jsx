import { newsletterData }
from "../../data/insights/newsletterData";

import "../../styles/insights/newsletter.css";

function NewsletterSection() {

  return (

    <section className="newsletter-section section">

      <div className="container">

        <div className="newsletter-card">

          <span className="newsletter-badge">

            {newsletterData.badge}

          </span>

          <h2>

            {newsletterData.title}

          </h2>

          <p>

            {newsletterData.description}

          </p>


          <form className="newsletter-form">

            <input
              type="email"
              placeholder={newsletterData.placeholder}
            />

            <button type="submit">

              {newsletterData.buttonText}

            </button>

          </form>

        </div>

      </div>

    </section>

  );

}

export default NewsletterSection;