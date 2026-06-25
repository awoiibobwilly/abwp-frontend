import { Link } from "react-router-dom";

import {
  FaBuilding,
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaStar,
  FaArrowRight,
} from "react-icons/fa";

function JourneyCard({ journey }) {

  return (

    <article
      className="journey-card"
      style={{
        "--accent": journey.accent_color,
      }}
    >

      {/* ======================================
          Timeline Indicator
      ======================================= */}

      <div className="journey-marker">

        <span
          className="journey-dot"
          style={{
            backgroundColor: journey.accent_color,
          }}
        />

        <span className="journey-line" />

      </div>

      {/* ======================================
          Card
      ======================================= */}

      <div className="journey-content">

        {/* ======================================
            Image
        ======================================= */}

        {

          journey.image ? (

            <div className="journey-image">

              <img

                src={journey.image}

                alt={journey.title}

                loading="lazy"

              />

            </div>

          ) : (

            <div className="journey-placeholder">

              <span>

                {journey.organization
                  ?.charAt(0)
                  ?.toUpperCase() || "A"}

              </span>

            </div>

          )

        }

        {/* ======================================
            Header
        ======================================= */}

        <div className="journey-header">

          <div className="journey-badges">

            <span

              className="journey-type"

              style={{

                backgroundColor:

                  `${journey.accent_color}20`,

                color:

                  journey.accent_color,

              }}

            >

              {journey.journey_type_display}

            </span>

            {

              journey.featured && (

                <span className="journey-featured">

                  <FaStar />

                  Featured

                </span>

              )

            }

            {

              journey.is_current && (

                <span className="journey-current">

                  Current

                </span>

              )

            }

          </div>

          <h3>

            {journey.title}

          </h3>

        </div>

        {/* ======================================
            Organization
        ======================================= */}

        <div className="journey-meta">

          <span>

            <FaBuilding />

            {journey.organization}

          </span>

          {

            journey.location && (

              <span>

                <FaMapMarkerAlt />

                {journey.location}

              </span>

            )

          }

          <span>

            <FaCalendarAlt />

            {journey.duration}

          </span>

        </div>

        {/* ======================================
            Summary
        ======================================= */}

        <p className="journey-summary">

          {journey.summary}

        </p>

        {/* ======================================
            Footer
        ======================================= */}

        <div className="journey-footer">

          <span className="journey-year">

            {journey.year}

          </span>

          <Link

            to={`/journey/${journey.slug}`}

            className="journey-link"

          >

            Learn More

            <FaArrowRight />

          </Link>

        </div>

      </div>

    </article>

  );

}

export default JourneyCard;