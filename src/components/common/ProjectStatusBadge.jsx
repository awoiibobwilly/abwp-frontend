import {
    FaCheckCircle,
    FaClock,
    FaTools,
    FaPauseCircle,
    FaQuestionCircle,
  } from "react-icons/fa";
  
  function ProjectStatusBadge({
  
    status,
  
  }) {
  
    const value = (
  
      status ||
  
      "Unknown"
  
    ).toLowerCase();
  
    const STATUS = {
  
      completed: {
  
        label: "Completed",
  
        icon: FaCheckCircle,
  
        className: "completed",
  
      },
  
      "in progress": {
  
        label: "In Progress",
  
        icon: FaTools,
  
        className: "in-progress",
  
      },
  
      planned: {
  
        label: "Planned",
  
        icon: FaClock,
  
        className: "planned",
  
      },
  
      paused: {
  
        label: "Paused",
  
        icon: FaPauseCircle,
  
        className: "paused",
  
      },
  
    };
  
    const config =
  
      STATUS[value] ||
  
      {
  
        label: status || "Unknown",
  
        icon: FaQuestionCircle,
  
        className: "unknown",
  
      };
  
    const Icon = config.icon;
  
    return (
  
      <span
  
        className={
  
          `project-status-badge ${config.className}`
  
        }
  
      >
  
        <Icon />
  
        <span>
  
          {config.label}
  
        </span>
  
      </span>
  
    );
  
  }
  
  export default ProjectStatusBadge;