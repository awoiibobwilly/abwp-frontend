function AchievementCard({ achievement }) {

    const Icon = achievement.icon;
  
    return (
  
      <div className="achievement-card">
  
        <div className="achievement-icon">
  
          <Icon />
  
        </div>
  
  
        <div className="achievement-value">
  
          {achievement.value}
  
        </div>
  
  
        <h3>
  
          {achievement.title}
  
        </h3>
  
  
        <p>
  
          {achievement.description}
  
        </p>
  
      </div>
  
    );
  
  }
  
  export default AchievementCard;