function ExperienceCard({ experience }) {

    return (
  
      <div className="experience-card">
  
        <div className="experience-date">
  
          {experience.duration}
  
        </div>
  
  
        <div className="experience-content">
  
          <h3>
  
            {experience.position}
  
          </h3>
  
          <h4>
  
            {experience.organization}
  
          </h4>
  
  
          <p>
  
            {experience.description}
  
          </p>
  
  
          <ul>
  
            {experience.highlights.map(
              (item, index) => (
  
                <li key={index}>
  
                  {item}
  
                </li>
  
              )
            )}
  
          </ul>
  
  
          <div className="experience-tags">
  
            {experience.domains.map(
              (domain, index) => (
  
                <span
                  key={index}
                >
  
                  {domain}
  
                </span>
  
              )
            )}
  
          </div>
  
        </div>
  
      </div>
  
    );
  
  }
  
  export default ExperienceCard;