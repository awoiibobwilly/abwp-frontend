import "../../styles/insights/newsletter.css";

// ==========================================================
// NEWSLETTER SECTION
// INSIGHTS PAGE
// ABW PORTFOLIO
// PREMIUM BALANCE PASS
// ==========================================================

function NewsletterSection({ newsletter }) {
  if (!newsletter) {
    return null;
  }

  return (
    <section className="newsletter-section section">
      <div className="container">
        <div className="newsletter-card">
          <span className="newsletter-badge">
            {newsletter?.eyebrow || "Stay Connected"}
          </span>

          <h2>
            {newsletter?.title ||
              "Subscribe for Insights and Updates"}
          </h2>

          <p>
            {newsletter?.description ||
              "Receive reflections, articles, and perspectives on healthcare, research, leadership, data science, and technology."}
          </p>

          <form className="newsletter-form">
            <input
              type="email"
              placeholder={
                newsletter?.placeholder ||
                "Enter your email address"
              }
            />

            <button type="submit">
              {newsletter?.button_text ||
                "Subscribe"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default NewsletterSection;