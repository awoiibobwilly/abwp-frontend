import {
    professionalSummaryData,
  } from "../../data/cv/professionalSummaryData";
  
  import "../../styles/cv/professionalSummary.css";
  
  function ProfessionalSummary() {
  
    return (
  
      <section className="professional-summary section">
  
        <div className="container">
  
          <div className="summary-card">
  
            <span className="summary-badge">
  
              {professionalSummaryData.badge}
  
            </span>
  
  
            <h2>
  
              {professionalSummaryData.title}
  
            </h2>
  
  
            <p>
  
              {professionalSummaryData.descriptionOne}
  
            </p>
  
  
            <p>
  
              {professionalSummaryData.descriptionTwo}
  
            </p>
  
  
            <div className="summary-tags">
  
              {professionalSummaryData.expertise.map(
                (item, index) => (
  
                  <span
                    key={index}
                    className="summary-tag"
                  >
  
                    {item}
  
                  </span>
  
                )
              )}
  
            </div>
  
          </div>
  
        </div>
  
      </section>
  
    );
  
  }
  
  export default ProfessionalSummary;