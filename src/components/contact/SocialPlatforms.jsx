import PlatformCard from "./PlatformCard";

import {
  socialPlatformsData,
} from "../../data/contact/socialPlatformsData";

import "../../styles/contact/socialPlatforms.css";

function SocialPlatforms() {

  return (

    <section className="social-platforms section">

      <div className="container">

        <div className="social-header">

          <span className="social-badge">

            Professional Presence

          </span>

          <h2 className="section-title">

            Connect Across Platforms

          </h2>

          <p className="section-subtitle">

            Explore my professional, academic, and technical
            presence across various platforms and networks.

          </p>

        </div>


        <div className="platforms-grid">

          {socialPlatformsData.map((item, index) => (

            <PlatformCard
              key={index}
              item={item}
            />

          ))}

        </div>

      </div>

    </section>

  );

}

export default SocialPlatforms;