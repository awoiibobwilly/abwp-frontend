function EducationCard({ education }) {

    return (
  
      <div className="education-card">
  
        <div className="education-duration">
  
          {education.duration}
  
        </div>
  
  
        <div className="education-content">
  
          <h3>
  
            {education.qualification}
  
          </h3>
  
  
          <h4>
  
            {education.institution}
  
          </h4>
  
  
          <p>
  
            {education.description}
  
          </p>
  
  
          <div className="education-tags">
  
            {education.highlights.map(
              (item, index) => (
  
                <span key={index}>
  
                  {item}
  
                </span>
  
              )
            )}
  
          </div>
  
        </div>
  
      </div>
  
    );
  
  }
  
  export default EducationCard;