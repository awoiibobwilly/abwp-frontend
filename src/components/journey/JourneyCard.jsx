function JourneyCard({ item, index }) {

    return (
  
      <div
        className={`timeline-item ${
          index % 2 === 0
            ? "left"
            : "right"
        }`}
      >
  
        <div className="timeline-dot">
  
          <span />
  
        </div>
  
        <div className="timeline-card">
  
          <div className="timeline-year">
            {item.year}
          </div>
  
          <h3>
            {item.title}
          </h3>
  
          <p>
            {item.description}
          </p>
  
        </div>
  
      </div>
  
    );
  
  }
  
  export default JourneyCard;