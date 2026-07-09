import { useEffect, useState } from "react";

import ResearchHero from "../components/research/ResearchHero";
import ResearchAreas from "../components/research/ResearchAreas";
import PublicationsSection from "../components/research/PublicationsSection";
import MethodologiesTools from "../components/research/MethodologiesTools";
import ResearchInterests from "../components/research/ResearchInterests";
import ResearchPhilosophy from "../components/research/ResearchPhilosophy";
import UniversalCTA from "../components/common/UniversalCTA/UniversalCTA";
import SectionMessage from "../components/common/SectionMessage";

import { getResearchPage } from "../services/researchService";
import { PAGE_KEYS } from "../config/portfolioConstants";

// ==========================================================
// RESEARCH PAGE
// ABW PORTFOLIO
// ==========================================================

function Research() {
  // ==================================================
  // STATE
  // ==================================================

  const [researchPageData, setResearchPageData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // ==================================================
  // FETCH PAGE DATA
  // ==================================================

  useEffect(() => {
    const fetchResearchPage = async () => {
      try {
        setLoading(true);
        setError("");

        const data = await getResearchPage();
        setResearchPageData(data);
      } catch (err) {
        console.error("Failed to load research page:", err);
        setError("Failed to load research page content.");
      } finally {
        setLoading(false);
      }
    };

    fetchResearchPage();
  }, []);

  // ==================================================
  // LOADING STATE
  // ==================================================

  if (loading) {
    return (
      <main className="research-page">
        <section className="section">
          <div className="container">
            <p>Loading research page...</p>
          </div>
        </section>
      </main>
    );
  }

  // ==================================================
  // ERROR STATE
  // ==================================================

  if (error) {
    return (
      <main className="research-page">
        <section className="section">
          <div className="container">
            <SectionMessage
              type="error"
              message={error}
            />
          </div>
        </section>
      </main>
    );
  }

  // ==================================================
  // COMPONENT
  // ==================================================

  return (
    <main className="research-page">
      <ResearchHero hero={researchPageData?.hero} />

      <ResearchAreas
        intro={researchPageData?.areas_intro}
        areas={researchPageData?.areas || []}
      />

      <PublicationsSection
        intro={researchPageData?.publications_intro}
        featuredPublications={
          researchPageData?.featured_publications || []
        }
        allPublications={
          researchPageData?.all_publications || []
        }
      />

      <MethodologiesTools
        intro={researchPageData?.methodologies_intro}
        groups={researchPageData?.methodology_groups || []}
      />

      <ResearchInterests
        intro={researchPageData?.interests_intro}
        groups={researchPageData?.interest_groups || []}
      />

      <ResearchPhilosophy
        intro={researchPageData?.philosophy_intro}
        points={researchPageData?.philosophy_points || []}
      />

      <UniversalCTA page={PAGE_KEYS.RESEARCH} />
    </main>
  );
}

export default Research;