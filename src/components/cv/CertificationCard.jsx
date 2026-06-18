function CertificationCard({ certification }) {

    return (
  
      <div className="certification-card">
  
        <span className="certification-category">
  
          {certification.category}
  
        </span>
  
  
        <h3>
  
          {certification.title}
  
        </h3>
  
  
        <h4>
  
          {certification.organization}
  
        </h4>
  
  
        <div className="certification-meta">
  
          <span>
  
            Year: {certification.year}
  
          </span>
  
          <span>
  
            ID: {certification.credentialId}
  
          </span>
  
        </div>
  
      </div>
  
    );
  
  }
  
  export default CertificationCard;