import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

import ResearchMedia from "./ResearchMedia";
import ResearchMeta from "./ResearchMeta";

function ResearchCard({ research }) {

  return (

    <article className="research-card">

      {/* ======================================
          Research Media
      ======================================= */}

      <ResearchMedia

        research={research}

      />

      {/* ======================================
          Research Content
      ======================================= */}

      <div className="research-content">

        {/* ======================================
            Badges
        ======================================= */}

        <div className="research-badges">

          {

            research.category && (

              <span
                className="research-category"
                style={{
                  backgroundColor: `${research.category.color}20`,
                  color: research.category.color,
                }}
              >

                {research.category.name}

              </span>

            )

          }

          {

            research.publication_type_display && (

              <span className="research-type">

                {research.publication_type_display}

              </span>

            )

          }

        </div>

        {/* ======================================
            Title
        ======================================= */}

        <h3 className="research-title">

          {research.title}

        </h3>

        {/* ======================================
            Summary
        ======================================= */}

        <p className="research-summary">

          {research.summary}

        </p>

        {/* ======================================
            Research Details
        ======================================= */}

        <ResearchMeta

          research={research}

        />

        {/* ======================================
            Keywords
        ======================================= */}

        {

          research.keywords?.length > 0 && (

            <div className="research-keywords">

              {

                research.keywords.map((keyword) => (

                  <span

                    key={keyword.id}

                    className="keyword-pill"

                    style={{

                      borderColor: keyword.color,

                      color: keyword.color,

                    }}

                  >

                    {

                      keyword.name

                    }

                  </span>

                ))

              }

            </div>

          )

        }

      </div>

      {/* ======================================
          Footer
      ======================================= */}

      <div className="research-footer">

        {

          research.year && (

            <span className="research-year">

              {research.year}

            </span>

          )

        }

        <Link

          to={`/research/${research.slug}`}

          className="research-link"

        >

          Read More

          <FaArrowRight />

        </Link>

      </div>

    </article>

  );

}

export default ResearchCard;