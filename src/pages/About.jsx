import { useEffect, useState } from "react";
import "../styles/about/about-page.css";
import AboutHero from "../components/about/AboutHero";
import WhoIAm from "../components/about/WhoIAm";
import ProfessionalDNA from "../components/about/ProfessionalDNA";
import CoreValues from "../components/about/CoreValues";
import SelectedAchievements from "../components/about/SelectedAchievements";
import Credentials from "../components/about/Credentials";
import SkillsAndTools from "../components/about/SkillsAndTools";
import UniversalCTA from "../components/common/UniversalCTA/UniversalCTA";

import { getAboutPage } from "../services/aboutService";

import { PAGE_KEYS } from "../config/portfolioConstants";


function About() {
  const [aboutData, setAboutData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchAboutPage = async () => {
      try {
        setLoading(true);
        setError("");

        const data = await getAboutPage();
        setAboutData(data);
      } catch (err) {
        console.error("Failed to load About page:", err);
        setError("Failed to load About page content.");
      } finally {
        setLoading(false);
      }
    };

    fetchAboutPage();
  }, []);

  if (loading) {
    return (
      <main className="about-page">
        <section className="section">
          <div className="container">
            <p>Loading About page...</p>
          </div>
        </section>
      </main>
    );
  }

  if (error) {
    return (
      <main className="about-page">
        <section className="section">
          <div className="container">
            <p>{error}</p>
          </div>
        </section>
      </main>
    );
  }

  return (
    <main className="about-page">
      <AboutHero data={aboutData?.hero} />

      <WhoIAm
        intro={aboutData?.who_i_am_intro}
        items={aboutData?.who_i_am || []}
      />

      <ProfessionalDNA
        intro={aboutData?.professional_dna_intro}
        pillars={aboutData?.professional_dna || []}
      />

      <CoreValues
        intro={aboutData?.core_values_intro}
        data={aboutData?.core_values}
      />

      <SelectedAchievements
        intro={aboutData?.selected_achievements_intro}
        achievements={aboutData?.selected_achievements || []}
      />

      <Credentials
        intro={aboutData?.credentials_intro}
        credentials={aboutData?.credentials}
      />

      <SkillsAndTools
        intro={aboutData?.skills_intro}
        categories={aboutData?.skills || []}
      />

      <UniversalCTA page={PAGE_KEYS.ABOUT} />
    </main>
  );
}

export default About;