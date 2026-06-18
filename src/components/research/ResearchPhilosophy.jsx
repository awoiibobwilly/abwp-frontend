import { researchPhilosophyData }
from "../../data/research/researchPhilosophyData";

import "../../styles/research/researchPhilosophy.css";

function ResearchPhilosophy() {

  return (

    <section className="research-philosophy section">

      <div className="container">

        {/* Header */}

        <div className="research-philosophy-header">

          <span className="research-philosophy-badge">

            Guiding Principles

          </span>

          <h2 className="section-title">

            Research Philosophy

          </h2>

          <p className="section-subtitle">

            Principles that shape the pursuit of knowledge,
            innovation, and meaningful impact.

          </p>

        </div>


        {/* Content */}

        <div className="research-philosophy-grid">

          {researchPhilosophyData.map((item, index) => {

            const Icon = item.icon;

            return (

              <div
                className="philosophy-card"
                key={index}
              >

                <div className="philosophy-icon">

                  <Icon />

                </div>

                <h3>

                  {item.title}

                </h3>

                <p>

                  {item.description}

                </p>

              </div>

            );

          })}

        </div>

      </div>

    </section>

  );

}

export default ResearchPhilosophy;