import { heroData } from "../../data/home/heroData";

import "../../styles/home/hero-stats.css";

function HeroStats() {
  return (

    <div className="hero-stats">

      {
        heroData.stats.map((stat,index)=>(
          <div
            className="hero-stat-card"
            key={index}
          >

            <h3>
              {stat.number}
            </h3>

            <span>
              {stat.label}
            </span>

          </div>
        ))
      }

    </div>

  );
}

export default HeroStats;