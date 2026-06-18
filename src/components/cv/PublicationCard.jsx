function PublicationCard({ publication }) {

    return (
  
      <div className="publication-card">
  
        <span className="publication-category">
  
          {publication.category}
  
        </span>
  
  
        <h3>
  
          {publication.title}
  
        </h3>
  
  
        <div className="publication-meta">
  
          <span>
  
            {publication.type}
  
          </span>
  
          <span>
  
            {publication.year}
  
          </span>
  
        </div>
  
  
        <p>
  
          {publication.description}
  
        </p>
  
  
        <div className="publication-tags">
  
          {publication.domains.map(
  
            (domain, index) => (
  
              <span key={index}>
  
                {domain}
  
              </span>
  
            )
  
          )}
  
        </div>
  
      </div>
  
    );
  
  }
  
  export default PublicationCard;