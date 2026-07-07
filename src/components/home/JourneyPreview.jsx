import SectionHeader from "../common/SectionHeader";
import SectionMessage from "../common/SectionMessage";

import JourneyTimeline from "./JourneyTimeline";
import JourneySkeleton from "./JourneySkeleton";

import useApiResource from "../../hooks/useApiResource";
import { getJourney } from "../../services/journeyService";

import "../../styles/home/journey-preview.css";

// ==========================================================
// JOURNEY PREVIEW
// HOME PAGE
// ABW PORTFOLIO
// ==========================================================

function JourneyPreview() {
  // ==================================================
  // API RESOURCE
  // ==================================================

  const {
    data: journeyData,
    loading,
    error,
  } = useApiResource(getJourney);

  const journeyItems = journeyData?.timeline || [];

  // ==================================================
  // COMPONENT
  // ==================================================

  return (
    <section
      id="journey"
      className="journey-preview section"
    >
      <div className="container">
        {/* ==========================================
            SECTION HEADER
        ========================================== */}
        <SectionHeader
          eyebrow="Journey"
          title="Professional Journey"
          description="A journey built on continuous learning, leadership, innovation, healthcare, technology, and service."
        />

        {/* ==========================================
            LOADING
        ========================================== */}
        {loading && <JourneySkeleton />}

        {/* ==========================================
            ERROR
        ========================================== */}
        {!loading && error && (
          <SectionMessage
            type="error"
            message={error}
          />
        )}

        {/* ==========================================
            EMPTY
        ========================================== */}
        {!loading && !error && journeyItems.length === 0 && (
          <SectionMessage
            type="empty"
            message="Journey information will appear here soon."
          />
        )}

        {/* ==========================================
            TIMELINE
        ========================================== */}
        {!loading && !error && journeyItems.length > 0 && (
          <JourneyTimeline
            journey={journeyItems}
          />
        )}
      </div>
    </section>
  );
}

export default JourneyPreview;