import { FaQuoteLeft } from "react-icons/fa";

import { quotesData }
from "../../data/insights/quotesData";

import "../../styles/insights/quotesReflections.css";

function QuotesReflections() {

  return (

    <section className="quotes-reflections section">

      <div className="container">

        <div className="quotes-header">

          <span className="quotes-badge">

            Quotes & Reflections

          </span>

          <h2 className="section-title">

            Thoughts That Inspire Action

          </h2>

          <p className="section-subtitle">

            Ideas and reflections that shape my approach to
            healthcare, research, leadership, and technology.

          </p>

        </div>


        <div className="quotes-grid">

          {quotesData.map((item, index) => (

            <div
              className="quote-card"
              key={index}
            >

              <FaQuoteLeft className="quote-icon" />

              <blockquote>

                {item.quote}

              </blockquote>

              <span>

                — {item.author}

              </span>

            </div>

          ))}

        </div>

      </div>

    </section>

  );

}

export default QuotesReflections;