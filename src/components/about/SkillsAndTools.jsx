import SectionHeader from "../common/SectionHeader";
import skillsData from "../../data/about/skillsData";

import SkillCategoryCard from "./SkillCategoryCard";

import "../../styles/about/skills-tools.css";

function SkillsAndTools() {
  return (
    <section
      className="skills-tools section"
      id={skillsData.sectionId}
    >
      <div className="container">

        {/* ======================================
            SECTION HEADER
        ======================================= */}
        <SectionHeader
          eyebrow={skillsData.eyebrow}
          title={skillsData.title}
          description={skillsData.intro}
        />

        {/* ======================================
            SKILL CATEGORIES
        ======================================= */}
        <div className="skills-tools-grid">
          {skillsData.categories.map((category) => (
            <SkillCategoryCard
              key={category.id}
              category={category}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default SkillsAndTools;