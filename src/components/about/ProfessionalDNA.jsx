import SectionHeader from "../common/SectionHeader";
import professionalDnaData from "../../data/about/professionalDnaData";

import DnaPillarCard from "./DnaPillarCard";

import "../../styles/about/professional-dna.css";

function ProfessionalDNA() {
  return (
    <section
      className="professional-dna section"
      id={professionalDnaData.sectionId}
    >
      <div className="container">

        {/* ======================================
            SECTION HEADER
        ======================================= */}
        <SectionHeader
          eyebrow={professionalDnaData.eyebrow}
          title={professionalDnaData.title}
          description={professionalDnaData.intro}
        />

        {/* ======================================
            PILLARS GRID
        ======================================= */}
        <div className="professional-dna-grid">
          {professionalDnaData.pillars.map((pillar) => (
            <DnaPillarCard
              key={pillar.id}
              pillar={pillar}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProfessionalDNA;