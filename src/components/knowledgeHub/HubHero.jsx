import "../../styles/knowledgeHub/hubHero.css";

function HubHero() {
  return (
    <section className="hub-hero">

      <div className="container">

        <div className="hub-hero-content">

          <span className="hub-badge">

            Lifelong Learning

          </span>


          <h1>

            Hub

          </h1>


          <h2>

            Curated Resources, Research,
            Books, Videos, and Tools
            for Continuous Growth

          </h2>


          <p>

            Empowering healthcare professionals,
            researchers, leaders, and innovators
            through knowledge, collaboration,
            and lifelong learning.

          </p>


          <div className="hub-buttons">

            <a
              href="#collections"
              className="btn btn-primary"
            >

              Explore Resources

            </a>


            <a
              href="/contact"
              className="btn btn-outline"
            >

              Collaborate

            </a>

          </div>

        </div>

      </div>

    </section>
  );
}

export default HubHero;