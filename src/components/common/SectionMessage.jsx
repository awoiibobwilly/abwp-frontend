import {
    FaCircleInfo,
    FaTriangleExclamation,
    FaInbox,
    FaCircleCheck,
  } from "react-icons/fa6";
  
  import "../../styles/common/section-message.css";
  
  function SectionMessage({
  
    type = "info",
  
    message,
  
  }) {
  
    const config = {
  
      info: {
  
        icon: FaCircleInfo,
  
        title: "Information",
  
      },
  
      empty: {
  
        icon: FaInbox,
  
        title: "Nothing Here Yet",
  
      },
  
      error: {
  
        icon: FaTriangleExclamation,
  
        title: "Something Went Wrong",
  
      },
  
      success: {
  
        icon: FaCircleCheck,
  
        title: "Success",
  
      },
  
    };
  
    const {
  
      icon: Icon,
  
      title,
  
    } = config[type] || config.info;
  
    return (
  
      <div
  
        className={`section-message ${type}`}
  
        role={
  
          type === "error"
  
            ? "alert"
  
            : "status"
  
        }
  
      >
  
        <div className="section-message-icon">
  
          <Icon />
  
        </div>
  
        <div className="section-message-content">
  
          <h3>
  
            {title}
  
          </h3>
  
          <p>
  
            {message}
  
          </p>
  
        </div>
  
      </div>
  
    );
  
  }
  
  export default SectionMessage;