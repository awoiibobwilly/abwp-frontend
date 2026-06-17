import { aboutHeroData } from "../../data/aboutHeroData";

function AboutHeroContent() {
  return (
    <>

      <span className="about-badge">
        {aboutHeroData.badge}
      </span>

      <h1>
        {aboutHeroData.title}
      </h1>

      <p className="about-subtitle">
        {aboutHeroData.subtitle}
      </p>

      <div className="about-hero-stats">

        <div>
          <h2>{aboutHeroData.experience}</h2>
          <span>Experience</span>
        </div>

        <div>
          <h2>{aboutHeroData.projects}</h2>
          <span>Projects</span>
        </div>

        <div>
          <h2>{aboutHeroData.domains}</h2>
          <span>Domains</span>
        </div>

      </div>

    </>
  );
}

export default AboutHeroContent;