import { Link } from "react-router-dom";

import { FaArrowRight } from "react-icons/fa";

import JourneyMedia from "./JourneyMedia";
import JourneyMeta from "./JourneyMeta";

function JourneyCard({

  journey,

}) {

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

            backgroundColor:

              journey.accent_color,

          }}

        />

        <span className="journey-line" />

      </div>

      {/* ======================================
          Card
      ======================================= */}

      <div className="journey-content">

        {/* ======================================
            Journey Media
        ======================================= */}

        <JourneyMedia

          journey={journey}

        />

        {/* ======================================
            Journey Meta
        ======================================= */}

        <JourneyMeta

          journey={journey}

        />

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