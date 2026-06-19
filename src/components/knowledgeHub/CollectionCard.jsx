function CollectionCard({ collection }) {

    const Icon = collection.icon;
  
    return (
  
      <div className="collection-card">
  
        <div className="collection-icon">
  
          <Icon />
  
        </div>
  
  
        <span className="collection-count">
  
          {collection.count}
  
        </span>
  
  
        <h3>
  
          {collection.title}
  
        </h3>
  
  
        <p>
  
          {collection.description}
  
        </p>
  
      </div>
  
    );
  
  }
  
  export default CollectionCard;