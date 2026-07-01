import ResearchHero from "../components/research/ResearchHero";
import ResearchAreas from "../components/research/ResearchAreas";
import PublicationsSection from "../components/research/PublicationsSection";
import MethodologiesTools from "../components/research/MethodologiesTools";
import ResearchInterests from "../components/research/ResearchInterests";
import ResearchPhilosophy from "../components/research/ResearchPhilosophy";

import UniversalCTA from "../components/common/UniversalCTA/UniversalCTA";

function Research() {

  return (
    <>
      <ResearchHero />

      <ResearchAreas />

      <PublicationsSection />

      <MethodologiesTools />

      <ResearchInterests />

      <ResearchPhilosophy />

      <UniversalCTA

          page="research"

      />

    </>
  );

}

export default Research;