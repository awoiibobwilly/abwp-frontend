import SectionHeader from "../common/SectionHeader";
import achievementsData from "../../data/about/achievementsData";

import AchievementCard from "./AchievementCard";

import "../../styles/about/selected-achievements.css";

function SelectedAchievements() {
  return (
    <section
      className="selected-achievements section"
      id={achievementsData.sectionId}
    >
      <div className="container">

        {/* ======================================
            SECTION HEADER
        ======================================= */}
        <SectionHeader
          eyebrow={achievementsData.eyebrow}
          title={achievementsData.title}
          description={achievementsData.intro}
        />

        {/* ======================================
            ACHIEVEMENTS GRID
        ======================================= */}
        <div className="selected-achievements-grid">
          {achievementsData.achievements.map((achievement) => (
            <AchievementCard
              key={achievement.id}
              achievement={achievement}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default SelectedAchievements;