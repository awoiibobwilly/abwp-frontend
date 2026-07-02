function MissionVisionCard({
    label,
    title,
    description,
  }) {
    return (
      <article className="mission-vision-card">
  
        {/* ======================================
            LABEL
        ======================================= */}
        <span className="mission-vision-label">
          {label}
        </span>
  
        {/* ======================================
            TITLE
        ======================================= */}
        <h3 className="mission-vision-title">
          {title}
        </h3>
  
        {/* ======================================
            DESCRIPTION
        ======================================= */}
        <p className="mission-vision-description">
          {description}
        </p>
      </article>
    );
  }
  
  export default MissionVisionCard;