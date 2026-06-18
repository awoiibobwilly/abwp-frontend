import {
    FaDownload,
    FaEnvelope,
  } from "react-icons/fa";
  
  import { cvHeroData }
  from "../../data/cv/cvHeroData";
  
  function CVHeroContent() {
  
    return (
      <>
  
        <span className="cv-badge">
  
          {cvHeroData.badge}
  
        </span>
  
  
        <h1>
  
          {cvHeroData.greeting}
  
          <span>
  
            {" "}
            {cvHeroData.name}
  
          </span>
  
        </h1>
  
  
        <h2>
  
          {cvHeroData.title}
  
        </h2>
  
  
        <p>
  
          {cvHeroData.description}
  
        </p>
  
  
        <div className="cv-hero-buttons">
  
          <a
            href="/files/Awoii-Bob-Willy-CV.pdf"
            className="cv-primary-btn"
          >
  
            <FaDownload />
  
            <span>
  
              Download CV
  
            </span>
  
          </a>
  
  
          <a
            href="/contact"
            className="cv-secondary-btn"
          >
  
            <FaEnvelope />
  
            <span>
  
              Contact Me
  
            </span>
  
          </a>
  
        </div>
  
      </>
    );
  }
  
  export default CVHeroContent;