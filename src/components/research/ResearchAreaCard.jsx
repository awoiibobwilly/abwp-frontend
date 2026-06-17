function ResearchAreaCard({ area }) {

    const Icon = area.icon;
  
    return (
  
      <div className="research-card">
  
        <div className="research-card-icon">
  
          <Icon />
  
        </div>
  
        <h3>
  
          {area.title}
  
        </h3>
  
        <p>
  
          {area.description}
  
        </p>
  
      </div>
  
    );
  
  }
  
  export default ResearchAreaCard;