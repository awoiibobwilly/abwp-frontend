import {
    FaDownload,
  } from "react-icons/fa";
  
  function ToolTemplateCard({ item }) {
  
    const Icon = item.icon;
  
    return (
  
      <div className="tool-template-card">
  
        <div className="tool-template-icon">
  
          <Icon />
  
        </div>
  
  
        <span className="tool-template-category">
  
          {item.category}
  
        </span>
  
  
        <h3>
  
          {item.title}
  
        </h3>
  
  
        <p>
  
          {item.description}
  
        </p>
  
  
        <div className="tool-template-footer">
  
          <span className="tool-template-type">
  
            {item.type}
  
          </span>
  
  
          <a
            href={item.downloadLink}
            className="tool-template-download"
          >
  
            <FaDownload />
  
            <span>
  
              Download
  
            </span>
  
          </a>
  
        </div>
  
      </div>
  
    );
  
  }
  
  export default ToolTemplateCard;