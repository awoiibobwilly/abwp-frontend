
import SectionHeader from "../common/SectionHeader";

import JourneyTimeline from "./JourneyTimeline";

import JourneySkeleton from "./JourneySkeleton";

import {getJourney,} from "../../services/journeyService";

import "../../styles/home/journey-preview.css";

import SectionMessage from "../common/SectionMessage";

import useApiResource from "../../hooks/useApiResource";

function JourneyPreview() {

  // ==================================================
  // State
  // ==================================================

  const {

    data: journey,

    loading,

    error,

} = useApiResource(

    getJourney

);

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
            Section Header
        =========================================== */}

        <SectionHeader

          eyebrow="Journey"

          title="Professional Journey"

          description="A journey built on continuous learning, leadership, innovation, healthcare, technology and service."

        />

        {/* ===========================================
            Loading
        =========================================== */}

        {

          loading && (

            <JourneySkeleton />

          )

        }

        {/* ===========================================
            Error
        =========================================== */}

        {

          !loading &&

          error && (

            <SectionMessage

              type="error"

              message={error}

            />

          )

        }

        {/* ===========================================
            Empty
        =========================================== */}

        {

          !loading &&

          !error &&

          journey.length === 0 && (

            <SectionMessage

              type="empty"

              message="Journey information will appear here soon."

            />

          )

        }

        {/* ===========================================
            Timeline
        =========================================== */}

        {

          !loading &&

          !error &&

          journey.length > 0 && (

            <JourneyTimeline

              journey={journey}

            />

          )

        }

      </div>

    </section>

  );

}

export default JourneyPreview;