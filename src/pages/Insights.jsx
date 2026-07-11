import { useEffect, useState } from "react";

import InsightsHero from "../components/insights/InsightsHero";
import FeaturedArticles from "../components/insights/FeaturedArticles";
import CategoriesSection from "../components/insights/CategoriesSection";
import LatestThoughts from "../components/insights/LatestThoughts";
import QuotesReflections from "../components/insights/QuotesReflections";
import UniversalCTA from "../components/common/UniversalCTA/UniversalCTA";
import SectionMessage from "../components/common/SectionMessage";

import { getInsightsPage } from "../services/insightsService";
import { PAGE_KEYS } from "../config/portfolioConstants";

import "../styles/insights/insights.css";
import "../styles/insights/insightsPage.css";

// ==========================================================
// INSIGHTS PAGE
// ABW PORTFOLIO
// ==========================================================

function Insights() {
  // ==================================================
  // STATE
  // ==================================================

  const [insightsPageData, setInsightsPageData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // ==================================================
  // FETCH PAGE DATA
  // ==================================================

  useEffect(() => {
    let isMounted = true;

    async function fetchInsightsPage() {
      try {
        setLoading(true);
        setError("");

        const data = await getInsightsPage();

        if (isMounted) {
          setInsightsPageData(data);
        }
      } catch (err) {
        console.error(
          "Failed to load insights page:",
          err
        );

        if (isMounted) {
          setError(
            "Failed to load insights page content."
          );
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    }

    fetchInsightsPage();

    return () => {
      isMounted = false;
    };
  }, []);

  // ==================================================
  // LOADING STATE
  // ==================================================

  if (loading) {
    return (
      <main className="insights-page">
        <section className="section">
          <div className="container">
            <p>Loading insights page...</p>
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
      <main className="insights-page">
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
    <main className="insights-page">
      {/* ==========================================
          HERO
      ========================================== */}

      <InsightsHero
        hero={insightsPageData?.hero}
        stats={
          insightsPageData?.hero?.stats || []
        }
      />

      {/* ==========================================
          EDITOR'S PICKS
      ========================================== */}

      <FeaturedArticles
        intro={insightsPageData?.featured_intro}
        featuredArticles={
          insightsPageData?.featured_articles || []
        }
      />

      {/* ==========================================
          TOPICS
      ========================================== */}

      <CategoriesSection
        intro={insightsPageData?.categories_intro}
        categories={
          insightsPageData?.categories || []
        }
      />

      {/* ==========================================
          LATEST PERSPECTIVES
      ========================================== */}

      <LatestThoughts
        intro={insightsPageData?.thoughts_intro}
        thoughts={
          insightsPageData?.latest_thoughts || []
        }
      />

      {/* ==========================================
          QUICK REFLECTIONS
      ========================================== */}

      <QuotesReflections
        intro={insightsPageData?.quotes_intro}
        quotes={
          insightsPageData?.quotes || []
        }
      />

      {/* ==========================================
          PAGE CTA
      ========================================== */}

      <UniversalCTA
        page={PAGE_KEYS.INSIGHTS}
      />
    </main>
  );
}

export default Insights;