import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

import ResearchMedia from "./ResearchMedia";
import ResearchMeta from "./ResearchMeta";

function ResearchCard({ research }) {

  return (

    <article
      className="research-card"
      data-category={research.category?.slug}
    >

      {/* ======================================
          Publication Cover
      ======================================= */}

      <ResearchMedia

        research={research}

      />

      {/* ======================================
          Publication Content
      ======================================= */}

      <div className="research-content">

        {/* ======================================
            Publication Header
        ======================================= */}
{/* 
        <header className="research-header">

          <div className="research-badges">

            {

              research.category && (

                <span

                  className="research-category"

                  style={{

                    backgroundColor:
                      `${research.category.color}20`,

                    color:

                      research.category.color,

                  }}

                >

                  {research.category.name}

                </span>

              )

            }

            {

              research.publication_type_display && (

                <span className="research-type">

                  {

                    research.publication_type_display

                  }

                </span>

              )

            }

          </div>

        </header> */}

        {/* ======================================
            Publication Body
        ======================================= */}

        <div className="research-body">

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
              Publication Divider
          ======================================= */}

          <div className="research-divider" />

          {/* ======================================
              Metadata
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

                  research.keywords.map(

                    (keyword) => (

                      <span

                        key={keyword.id}

                        className="keyword-pill"

                        style={{

                          borderColor:

                            keyword.color,

                          color:

                            keyword.color,

                        }}

                      >

                        {keyword.name}

                      </span>

                    )

                  )

                }

              </div>

            )

          }

        </div>

      </div>

      {/* ======================================
          Publication Footer
      ======================================= */}

      <footer className="research-footer">

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

          Read Publication

          <FaArrowRight />

        </Link>

      </footer>

    </article>

  );

}

export default ResearchCard;