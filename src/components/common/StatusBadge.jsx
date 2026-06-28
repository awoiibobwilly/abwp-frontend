import {
    FaCheckCircle,
    FaClock,
    FaInfoCircle,
    FaPauseCircle,
    FaTimesCircle,
  } from "react-icons/fa";
  
  import "../../styles/common/status-badge.css";
  
  const ICONS = {
  
    success: FaCheckCircle,
  
    warning: FaClock,
  
    info: FaInfoCircle,
  
    secondary: FaPauseCircle,
  
    danger: FaTimesCircle,
  
  };
  
  function StatusBadge({
  
    label,
  
    variant = "info",
  
    showIcon = true,
  
  }) {
  
    const Icon =
  
      ICONS[variant] ||
  
      FaInfoCircle;
  
    return (
  
      <span
  
        className={
  
          `status-badge ${variant}`
  
        }
  
      >
  
        {
  
          showIcon && (
  
            <Icon />
  
          )
  
        }
  
        <span>
  
          {label}
  
        </span>
  
      </span>
  
    );
  
  }
  
  export default StatusBadge;