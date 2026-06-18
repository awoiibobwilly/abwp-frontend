import { methodologiesData }
from "../../data/research/methodologiesData";

import {
  FaFlask,
  FaChartBar,
} from "react-icons/fa";

import "../../styles/research/methodologiesTools.css";

function MethodologiesTools() {

  return (

    <section className="methodologies section">

      <div className="container">

        {/* Header */}

        <div className="methodologies-header">

          <span className="methodologies-badge">

            Methods & Technologies

          </span>

          <h2 className="section-title">

            Research Approaches and Analytical Tools

          </h2>

          <p className="section-subtitle">

            Combining rigorous methodologies and modern
            analytical technologies to generate evidence
            and meaningful insights.

          </p>

        </div>


        <div className="methodologies-wrapper">

          {/* Left */}

          <div className="methodologies-card">

            <div className="methodologies-icon">

              <FaFlask />

            </div>

            <h3>

              Research Methodologies

            </h3>

            <div className="methodologies-tags">

              {methodologiesData.methodologies.map((item, index) => (

                <span key={index}>

                  {item}

                </span>

              ))}

            </div>

          </div>


          {/* Right */}

          <div className="methodologies-card">

            <div className="methodologies-icon">

              <FaChartBar />

            </div>

            <h3>

              Tools & Platforms

            </h3>

            <div className="methodologies-tags">

              {methodologiesData.tools.map((tool, index) => (

                <span key={index}>

                  {tool}

                </span>

              ))}

            </div>

          </div>

        </div>

      </div>

    </section>

  );

}

export default MethodologiesTools;