function ContactCard({ item }) {

    const Icon = item.icon;
  
    return (
  
      <div className="contact-card">
  
        <div className="contact-card-icon">
  
          <Icon />
  
        </div>
  
        <h3>
  
          {item.title}
  
        </h3>
  
        <h4>
  
          {item.value}
  
        </h4>
  
        <p>
  
          {item.description}
  
        </p>
  
      </div>
  
    );
  
  }
  
  export default ContactCard;