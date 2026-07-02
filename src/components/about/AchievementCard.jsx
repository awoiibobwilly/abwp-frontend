function AchievementCard({ achievement }) {
    return (
      <article className="achievement-card">
  
        {/* ======================================
            TOP META
        ======================================= */}
        <div className="achievement-card-meta">
  
          {achievement.category && (
            <span className="achievement-category">
              {achievement.category}
            </span>
          )}
  
          {achievement.year && (
            <span className="achievement-year">
              {achievement.year}
            </span>
          )}
        </div>
  
        {/* ======================================
            TITLE
        ======================================= */}
        <h3 className="achievement-card-title">
          {achievement.title}
        </h3>
  
        {/* ======================================
            DESCRIPTION
        ======================================= */}
        <p className="achievement-card-description">
          {achievement.description}
        </p>
      </article>
    );
  }
  
  export default AchievementCard;