import AchievementCard from "./AchievementCard";

import {
  achievementsData,
} from "../../data/cv/achievementsData";

import "../../styles/cv/achievements.css";

function AchievementsSection() {

  return (

    <section className="achievements section">

      <div className="container">

        <div className="achievements-header">

          <span className="achievements-badge">

            Awards & Achievements

          </span>


          <h2 className="section-title">

            Milestones and Highlights

          </h2>


          <p className="section-subtitle">

            A reflection of growth, leadership,
            innovation, and impact across healthcare,
            research, and technology.

          </p>

        </div>


        <div className="achievements-grid">

          {achievementsData.map(

            (achievement, index) => (

              <AchievementCard
                key={index}
                achievement={achievement}
              />

            )

          )}

        </div>

      </div>

    </section>

  );

}

export default AchievementsSection;