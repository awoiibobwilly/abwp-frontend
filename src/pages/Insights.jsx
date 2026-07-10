import { useEffect, useMemo, useState } from "react";

import InsightsHero from "../components/insights/InsightsHero";
import FeaturedArticles from "../components/insights/FeaturedArticles";
import CategoriesSection from "../components/insights/CategoriesSection";
import LatestThoughts from "../components/insights/LatestThoughts";
import QuotesReflections from "../components/insights/QuotesReflections";
import NewsletterSection from "../components/insights/NewsletterSection";
import UniversalCTA from "../components/common/UniversalCTA/UniversalCTA";
import SectionMessage from "../components/common/SectionMessage";

import { getInsightsPage } from "../services/insightsService";
import { PAGE_KEYS } from "../config/portfolioConstants";

import "../styles/insights/insights.css";

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
    const fetchInsightsPage = async () => {
      try {
        setLoading(true);
        setError("");

        const data = await getInsightsPage();
        setInsightsPageData(data);
      } catch (err) {
        console.error("Failed to load insights page:", err);
        setError("Failed to load insights page content.");
      } finally {
        setLoading(false);
      }
    };

    fetchInsightsPage();
  }, []);

  // ==================================================
  // HERO STATS
  // ==================================================

  const heroStats = useMemo(() => {
    const featuredArticlesCount =
      insightsPageData?.featured_articles?.length || 0;

    const categoriesCount =
      insightsPageData?.categories?.length || 0;

    const thoughtsCount =
      insightsPageData?.latest_thoughts?.length || 0;

    const quotesCount =
      insightsPageData?.quotes?.length || 0;

    return [
      {
        value: `${featuredArticlesCount}+`,
        label: "Featured Articles",
      },
      {
        value: `${categoriesCount}+`,
        label: "Topics",
      },
      {
        value: `${thoughtsCount}+`,
        label: "Reflections",
      },
      {
        value: `${quotesCount}+`,
        label: "Quotes",
      },
    ];
  }, [insightsPageData]);

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
      <InsightsHero
        hero={insightsPageData?.hero}
        stats={heroStats}
      />

      <FeaturedArticles
        intro={insightsPageData?.featured_intro}
        articles={
          insightsPageData?.featured_articles || []
        }
      />

      <CategoriesSection
        intro={insightsPageData?.categories_intro}
        categories={insightsPageData?.categories || []}
      />

      <LatestThoughts
        intro={insightsPageData?.thoughts_intro}
        thoughts={insightsPageData?.latest_thoughts || []}
      />

      <QuotesReflections
        intro={insightsPageData?.quotes_intro}
        quotes={insightsPageData?.quotes || []}
      />

      <NewsletterSection
        newsletter={insightsPageData?.newsletter}
      />

      <UniversalCTA page={PAGE_KEYS.INSIGHTS} />
    </main>
  );
}

export default Insights;