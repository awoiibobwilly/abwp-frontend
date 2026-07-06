import { useEffect, useState } from "react";
import JourneyHero from "../components/journey/JourneyHero";
import JourneyTimeline from "../components/journey/JourneyTimeline";
import FutureVision from "../components/journey/FutureVision";
import UniversalCTA from "../components/common/UniversalCTA/UniversalCTA";
import { getJourneyPage } from "../services/journeyService";
import { PAGE_KEYS } from "../config/portfolioConstants";


// ==========================================================
// JOURNEY PAGE
// ABW PORTFOLIO
// ==========================================================

function Journey() {
  const [journeyData, setJourneyData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchJourneyPage = async () => {
      try {
        setLoading(true);
        setError("");

        const data = await getJourneyPage();
        setJourneyData(data);
      } catch (err) {
        console.error("Failed to load Journey page:", err);
        setError("Failed to load Journey page content.");
      } finally {
        setLoading(false);
      }
    };

    fetchJourneyPage();
  }, []);

  if (loading) {
    return (
      <main className="journey-page">
        <section className="section">
          <div className="container">
            <p>Loading Journey page...</p>
          </div>
        </section>
      </main>
    );
  }

  if (error) {
    return (
      <main className="journey-page">
        <section className="section">
          <div className="container">
            <p>{error}</p>
          </div>
        </section>
      </main>
    );
  }

  return (
    <main className="journey-page">
      <JourneyHero data={journeyData?.hero} />

      <JourneyTimeline
        intro={journeyData?.timeline_intro}
        items={journeyData?.timeline || []}
      />

      <FutureVision
        intro={journeyData?.future_intro}
        items={journeyData?.future_focus || []}
      />

      <UniversalCTA page={PAGE_KEYS.JOURNEY} />
    </main>
  );
}

export default Journey;