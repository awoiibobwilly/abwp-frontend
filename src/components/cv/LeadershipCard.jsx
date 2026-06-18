function LeadershipCard({ leadership }) {

    const Icon = leadership.icon;
  
    return (
  
        <div className="leadership-card">

        <div className="leadership-content">
      
          <span className="leadership-duration">
            {leadership.duration}
          </span>
      
      
          <div className="leadership-heading">
      
            <div className="leadership-icon">
              <Icon />
            </div>
      
            <div>
      
              <h3>
                {leadership.title}
              </h3>
      
              <h4>
                {leadership.organization}
              </h4>
      
            </div>
      
          </div>
      
      
          <p>
            {leadership.description}
          </p>
      
      
          <div className="leadership-tags">
      
            {leadership.domains.map((domain, index) => (
      
              <span key={index}>
                {domain}
              </span>
      
            ))}
      
          </div>
      
        </div>
      
      </div>
  
    );
  
  }
  
  export default LeadershipCard;