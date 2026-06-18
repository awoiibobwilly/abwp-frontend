import { researchInterestsData }
from "../../data/research/researchInterestsData";

import "../../styles/research/researchInterests.css";

function ResearchInterests() {

  return (

    <section className="research-interests section">

      <div className="container">

        <div className="research-interests-header">

          <span className="research-interests-badge">

            Continuous Exploration

          </span>

          <h2 className="section-title">

            Ongoing Research Interests

          </h2>

          <p className="section-subtitle">

            Areas of curiosity and inquiry that drive
            continuous learning, innovation, and impact.

          </p>

        </div>


        <div className="interest-clusters">

          {researchInterestsData.map((group, index) => (

            <div
              className="interest-group"
              key={index}
            >

              <h3>

                {group.category}

              </h3>

              <div className="interest-tags">

                {group.interests.map((item, i) => (

                  <span key={i}>

                    {item}

                  </span>

                ))}

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>

  );

}

export default ResearchInterests;