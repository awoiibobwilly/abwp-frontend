function HeroStatsSkeleton() {

    return (
  
      <div className="hero-stats">
  
        {Array.from({ length: 4 }).map((_, index) => (
  
          <div
            key={index}
            className="hero-stat-card skeleton-card"
          >
  
            <div className="skeleton skeleton-icon"></div>
  
            <div className="skeleton skeleton-number"></div>
  
            <div className="skeleton skeleton-text"></div>
  
          </div>
  
        ))}
  
      </div>
  
    );
  
  }
  
  export default HeroStatsSkeleton;