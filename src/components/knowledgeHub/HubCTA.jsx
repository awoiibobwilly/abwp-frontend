import { Link } from "react-router-dom";

import "../../styles/knowledgeHub/hubCTA.css";

function HubCTA() {

  return (

    <section className="hub-cta section">

      <div className="container">

        <div className="hub-cta-card">

          <span className="hub-cta-badge">

            Lifelong Learning

          </span>


          <h2>

            Continue Learning and Growing

          </h2>


          <p>

            Stay connected with new resources,
            publications, insights, and practical
            tools supporting healthcare, research,
            leadership, and technology.

          </p>


          <div className="hub-cta-buttons">

            <Link
              to="/contact"
              className="btn btn-primary"
            >

              Contact Me

            </Link>


            <Link
              to="/insights"
              className="btn btn-outline"
            >

              Explore Insights

            </Link>

          </div>

        </div>

      </div>

    </section>

  );

}

export default HubCTA;