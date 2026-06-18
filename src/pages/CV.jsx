import CVHero from "../components/cv/CVHero";
import ProfessionalSummary from "../components/cv/ProfessionalSummary";
import ExperienceSection from "../components/cv/ExperienceSection";
import EducationSection from "../components/cv/EducationSection";
import CertificationsSection from "../components/cv/CertificationsSection";
import SkillsSection from "../components/cv/SkillsSection";
import ResearchSection from "../components/cv/ResearchSection";

function CV() {

  return (
    <>
      <CVHero />

      <ProfessionalSummary />

      <ExperienceSection />

      <EducationSection />

      <CertificationsSection />

      <SkillsSection />

      <ResearchSection />

    </>
  );

}

export default CV;