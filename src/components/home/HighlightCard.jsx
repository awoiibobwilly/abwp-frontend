function HighlightCard({
    number,
    suffix,
    title,
  }) {
    return (
      <div className="highlight-card">
  
        <h3>
          {number}
          {suffix}
        </h3>
  
        <p>{title}</p>
  
      </div>
    );
  }
  
  export default HighlightCard;