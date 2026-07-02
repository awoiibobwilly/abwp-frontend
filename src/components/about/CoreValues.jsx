import SectionHeader from "../common/SectionHeader";
import coreValuesData from "../../data/about/coreValuesData";

import MissionVisionCard from "./MissionVisionCard";
import ValueCard from "./ValueCard";

import "../../styles/about/core-values.css";

function CoreValues() {
  return (
    <section
      className="core-values section"
      id={coreValuesData.sectionId}
    >
      <div className="container">

        {/* ======================================
            SECTION HEADER
        ======================================= */}
        <SectionHeader
          eyebrow={coreValuesData.eyebrow}
          title={coreValuesData.title}
          description={coreValuesData.intro}
        />

        {/* ======================================
            MISSION & VISION
        ======================================= */}
        <div className="mission-vision-grid">
          <MissionVisionCard
            label="Mission"
            title={coreValuesData.mission.title}
            description={coreValuesData.mission.description}
          />

          <MissionVisionCard
            label="Vision"
            title={coreValuesData.vision.title}
            description={coreValuesData.vision.description}
          />
        </div>

        {/* ======================================
            VALUES GRID
        ======================================= */}
        <div className="core-values-grid">
          {coreValuesData.values.map((value) => (
            <ValueCard
              key={value.id}
              value={value}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default CoreValues;