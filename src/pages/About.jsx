import AboutHero from "../components/about/AboutHero";
import WhoIAm from "../components/about/WhoIAm";
import ProfessionalDNA from "../components/about/ProfessionalDNA";
import CoreValues from "../components/about/CoreValues";
import SelectedAchievements from "../components/about/SelectedAchievements";
import Credentials from "../components/about/Credentials";
import SkillsAndTools from "../components/about/SkillsAndTools";
import UniversalCTA from "../components/common/UniversalCTA/UniversalCTA";

import { PAGE_KEYS } from "../config/portfolioConstants";

function About() {
  return (
    <>
      {/* ==================================================
          ABOUT HERO
      ================================================== */}
      <AboutHero />

      {/* ==================================================
          WHO I AM
      ================================================== */}
      <WhoIAm />

      {/* ==================================================
          PROFESSIONAL DNA
      ================================================== */}
      <ProfessionalDNA />

      {/* ==================================================
          CORE VALUES
      ================================================== */}
      <CoreValues />

      {/* ==================================================
          SELECTED ACHIEVEMENTS
      ================================================== */}
      <SelectedAchievements />

      {/* ==================================================
          CREDENTIALS
      ================================================== */}
      <Credentials />

      {/* ==================================================
          SKILLS & TOOLS
      ================================================== */}
      <SkillsAndTools />

      {/* ==================================================
          UNIVERSAL CTA
      ================================================== */}
      <UniversalCTA page={PAGE_KEYS.ABOUT} />
    </>
  );
}

export default About;