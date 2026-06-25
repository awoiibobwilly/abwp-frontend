import { useEffect, useState } from "react";

import { motion } from "framer-motion";

import JourneyCard from "./JourneyCard";
import JourneySkeleton from "./JourneySkeleton";

import { getJourneyPreview } from "../../services/journeyService";

import "../../styles/home/journey-preview.css";

function JourneyPreview() {

  // ==================================================
  // State
  // ==================================================

  const [journey, setJourney] = useState([]);

  const [loading, setLoading] = useState(true);

  const [error, setError] = useState("");

  // ==================================================
  // Fetch Journey
  // ==================================================

  useEffect(() => {

    const fetchJourney = async () => {

      try {

        setLoading(true);

        setError("");

        const response = await getJourneyPreview();

        // Supports both paginated and plain list APIs

        const data = Array.isArray(response)
          ? response
          : response.results || [];

        setJourney(data);

      }

      catch (err) {

        console.error(err);

        setError(

          err?.detail ||

          "Unable to load journey."

        );

      }

      finally {

        setLoading(false);

      }

    };

    fetchJourney();

  }, []);

  // ==================================================
  // Loading
  // ==================================================

  if (loading) {

    return (

      <section
        className="journey-preview section"
      >

        <div className="container">

          <div className="section-header">

            <h2 className="section-title">

              My Journey

            </h2>

            <p className="section-subtitle">

              Every milestone has shaped the professional
              I am today.

            </p>

          </div>

          <JourneySkeleton />

        </div>

      </section>

    );

  }

  // ==================================================
  // Error
  // ==================================================

  if (error) {

    return (

      <section
        className="journey-preview section"
      >

        <div className="container">

          <div className="section-header">

            <h2 className="section-title">

              My Journey

            </h2>

          </div>

          <div className="journey-message error">

            {error}

          </div>

        </div>

      </section>

    );

  }

  // ==================================================
  // Empty
  // ==================================================

  if (journey.length === 0) {

    return (

      <section
        className="journey-preview section"
      >

        <div className="container">

          <div className="section-header">

            <h2 className="section-title">

              My Journey

            </h2>

          </div>

          <div className="journey-message">

            Journey information coming soon.

          </div>

        </div>

      </section>

    );

  }

  // ==================================================
  // Component
  // ==================================================

  return (

    <section

      id="journey"

      className="journey-preview section"

    >

      <div className="container">

        {/* ===========================================
            Header
        =========================================== */}

        <motion.div

          className="section-header"

          initial={{

            opacity: 0,

            y: 40,

          }}

          whileInView={{

            opacity: 1,

            y: 0,

          }}

          viewport={{

            once: true,

          }}

          transition={{

            duration: 0.6,

          }}

        >

          <h2 className="section-title">

            My Journey

          </h2>

          <p className="section-subtitle">

            A journey built on continuous learning,
            leadership, innovation, healthcare,
            technology and service.

          </p>

        </motion.div>

        {/* ===========================================
            Timeline
        =========================================== */}

        <div className="journey-timeline">

          {

            journey.map(

              (

                item,

                index,

              ) => (

                <motion.div

                  key={item.id}

                  initial={{

                    opacity: 0,

                    x:

                      index % 2 === 0

                        ? -40

                        : 40,

                  }}

                  whileInView={{

                    opacity: 1,

                    x: 0,

                  }}

                  viewport={{

                    once: true,

                  }}

                  transition={{

                    duration: 0.5,

                    delay: index * 0.12,

                  }}

                >

                  <JourneyCard

                    journey={item}

                  />

                </motion.div>

              )

            )

          }

        </div>

      </div>

    </section>

  );

}

export default JourneyPreview;