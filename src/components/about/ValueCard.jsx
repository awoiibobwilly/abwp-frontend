function ValueCard({ value }) {
    return (
      <article className="value-card">
  
        {/* ======================================
            VALUE LETTER
        ======================================= */}
        <div className="value-card-letter">
          {value.letter}
        </div>
  
        {/* ======================================
            CONTENT
        ======================================= */}
        <div className="value-card-content">
          <h3 className="value-card-title">
            {value.title}
          </h3>
  
          <p className="value-card-description">
            {value.description}
          </p>
        </div>
      </article>
    );
  }
  
  export default ValueCard;