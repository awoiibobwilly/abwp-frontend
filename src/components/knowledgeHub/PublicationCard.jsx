import {
    FaExternalLinkAlt,
  } from "react-icons/fa";
  
  function PublicationCard({ publication }) {
  
    return (
  
      <div className="publication-card">
  
        <div className="publication-meta">
  
          <span className="publication-type">
  
            {publication.type}
  
          </span>
  
          <span className="publication-year">
  
            {publication.year}
  
          </span>
  
        </div>
  
  
        <h3>
  
          {publication.title}
  
        </h3>
  
  
        <h4>
  
          {publication.authors}
  
        </h4>
  
  
        <div className="publication-journal">
  
          {publication.journal}
  
        </div>
  
  
        <p>
  
          {publication.description}
  
        </p>
  
  
        <a
          href={publication.link}
          className="publication-link"
        >
  
          <span>
  
            View Publication
  
          </span>
  
          <FaExternalLinkAlt />
  
        </a>
  
      </div>
  
    );
  
  }
  
  export default PublicationCard;