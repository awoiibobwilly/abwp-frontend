function CredentialCard({ item }) {
    const heading = item.award || item.title;
  
    return (
      <article className="credential-card">
  
        {/* ======================================
            TOP META
        ======================================= */}
        <div className="credential-card-meta">
          {item.period && (
            <span className="credential-card-period">
              {item.period}
            </span>
          )}
        </div>
  
        {/* ======================================
            MAIN CONTENT
        ======================================= */}
        <h4 className="credential-card-title">
          {heading}
        </h4>
  
        {item.institution && (
          <p className="credential-card-institution">
            {item.institution}
          </p>
        )}
  
        {item.note && (
          <p className="credential-card-note">
            {item.note}
          </p>
        )}
      </article>
    );
  }
  
  export default CredentialCard;