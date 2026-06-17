import { openSourceData }
from "../../data/projects/openSourceData";

import ContributionCard from "./ContributionCard";

import "../../styles/projects/openSource.css";

function OpenSourceSection() {

  return (

    <section className="open-source section">

      <div className="container">

        {/* Header */}

        <div className="open-source-header">

          <span className="open-source-badge">

            Collaboration & Contributions

          </span>

          <h2 className="section-title">

            Beyond Projects

          </h2>

          <p className="section-subtitle">

            A commitment to collaboration,
            innovation, research dissemination,
            and lifelong learning.

          </p>

        </div>


        {/* Statistics */}

        <div className="contribution-stats">

          <div className="stat-card">

            <h3>20+</h3>

            <p>Projects</p>

          </div>

          <div className="stat-card">

            <h3>10+</h3>

            <p>Technologies</p>

          </div>

          <div className="stat-card">

            <h3>5+</h3>

            <p>Domains</p>

          </div>

          <div className="stat-card">

            <h3>100%</h3>

            <p>Commitment</p>

          </div>

        </div>


        {/* Contribution Cards */}

        <div className="contribution-grid">

          {openSourceData.map((item, index) => (

            <ContributionCard
              key={index}
              item={item}
            />

          ))}

        </div>

      </div>

    </section>

  );

}

export default OpenSourceSection;