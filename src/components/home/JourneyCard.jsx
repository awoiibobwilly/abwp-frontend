function JourneyCard({
    year,
    title,
    description,
  }) {
    return (
      <div className="journey-card">
  
        <div className="journey-year">
          {year}
        </div>
  
        <div className="journey-content">
  
          <h3>{title}</h3>
  
          <p>{description}</p>
  
        </div>
  
      </div>
    );
  }
  
  export default JourneyCard;