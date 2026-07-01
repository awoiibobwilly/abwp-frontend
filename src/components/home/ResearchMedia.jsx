import { FaBookOpen } from "react-icons/fa";

function ResearchMedia({ research }) {

  return (

    <div className="research-cover">

      {/* ======================================
          Cover Image
      ======================================= */}

      {

        research.image ? (

          <img

            src={research.image}

            alt={research.title}

            className="research-cover-image"

            loading="lazy"

          />

        ) : (

          <div className="research-cover-placeholder">

            <FaBookOpen />

          </div>

        )

      }

      {/* ======================================
          Publication Overlay
      ======================================= */}

      <div className="research-cover-overlay">

        {/* ==================================
            Top Bar
        =================================== */}

        <div className="research-cover-top">

          <span className="research-cover-label">

            {

              research.category?.name ||

              "Research Publication"

            }

          </span>

        </div>

        {/* ==================================
            Bottom Bar
        =================================== */}

        <div className="research-cover-bottom">

          {

            research.publication_type_display && (

              <span className="research-cover-type">

                {

                  research.publication_type_display

                }

              </span>

            )

          }

        </div>

      </div>

    </div>

  );

}

export default ResearchMedia;