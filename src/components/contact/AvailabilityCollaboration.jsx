import {
    availabilityData,
  } from "../../data/contact/availabilityData";
  
  import "../../styles/contact/availability.css";
  
  function AvailabilityCollaboration() {
  
    return (
  
      <section className="availability section">
  
        <div className="container">
  
          <div className="availability-card">
  
            <span className="availability-badge">
  
              {availabilityData.badge}
  
            </span>
  
  
            <h2>
  
              {availabilityData.title}
  
            </h2>
  
  
            <p>
  
              {availabilityData.description}
  
            </p>
  
  
            <div className="availability-tags">
  
              {availabilityData.tags.map((tag, index) => (
  
                <span
                  key={index}
                  className="availability-tag"
                >
  
                  {tag}
  
                </span>
  
              ))}
  
            </div>
  
          </div>
  
        </div>
  
      </section>
  
    );
  
  }
  
  export default AvailabilityCollaboration;