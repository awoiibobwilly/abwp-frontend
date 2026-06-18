import CVHero from "../components/cv/CVHero";
import ProfessionalSummary from "../components/cv/ProfessionalSummary";
import ExperienceSection from "../components/cv/ExperienceSection";
import EducationSection from "../components/cv/EducationSection";
import CertificationsSection from "../components/cv/CertificationsSection";

function CV() {

  return (
    <>
      <CVHero />

      <ProfessionalSummary />

      <ExperienceSection />

      <EducationSection />

      <CertificationsSection />
    </>
  );

}

export default CV;