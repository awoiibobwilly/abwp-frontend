import { whoIAmData } from "../../data/about/whoIAmData";

import "../../styles/about/whoIAm.css";

function WhoIAm() {
  return (
    <section className="who section">

      <div className="container">

        <div className="who-wrapper">

          {/* Left */}

          <div className="who-left">

            <span className="who-badge">
              Who I Am
            </span>

            <h2 className="section-title">
              A Multidisciplinary Professional
              Creating Meaningful Impact.
            </h2>

            <p className="section-subtitle">
              My work lies at the intersection of healthcare,
              public health, research, leadership, and software
              engineering. I believe in leveraging knowledge and
              technology to improve lives and create sustainable
              change.
            </p>

          </div>


          {/* Right */}

          <div className="who-right">

            {whoIAmData.map((item, index) => (

              <div
                className="who-card"
                key={index}
              >

                <h3>{item.title}</h3>

                <p>{item.description}</p>

              </div>

            ))}

          </div>

        </div>

      </div>

    </section>
  );
}

export default WhoIAm;