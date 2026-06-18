function PlatformCard({ item }) {

    const Icon = item.icon;
  
    return (
  
      <a
        href={item.link}
        target="_blank"
        rel="noopener noreferrer"
        className="platform-card"
      >
  
        <div className="platform-icon">
  
          <Icon />
  
        </div>
  
        <h3>
  
          {item.title}
  
        </h3>
  
        <h4>
  
          {item.username}
  
        </h4>
  
        <p>
  
          {item.description}
  
        </p>
  
      </a>
  
    );
  
  }
  
  export default PlatformCard;