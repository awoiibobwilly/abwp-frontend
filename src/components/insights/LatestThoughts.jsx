import { thoughtsData }
from "../../data/insights/thoughtsData";

import ThoughtCard from "./ThoughtCard";

import "../../styles/insights/latestThoughts.css";

function LatestThoughts() {

  return (

    <section className="latest-thoughts section">

      <div className="container">

        <div className="thoughts-header">

          <span className="thoughts-badge">

            Latest Reflections

          </span>

          <h2 className="section-title">

            Thoughts Worth Sharing

          </h2>

          <p className="section-subtitle">

            Brief reflections and perspectives on healthcare,
            research, leadership, technology, and lifelong learning.

          </p>

        </div>


        <div className="thoughts-grid">

          {thoughtsData.map((thought, index) => (

            <ThoughtCard
              key={index}
              thought={thought}
            />

          ))}

        </div>

      </div>

    </section>

  );

}

export default LatestThoughts;