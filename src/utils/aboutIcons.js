import {
    FaHeartbeat,
    FaMicroscope,
    FaLaptopCode,
    FaUsersCog,
    FaChartLine,
    FaBookOpen,
    FaLightbulb,
  } from "react-icons/fa";
  
  const iconMap = {
    healthcare: FaHeartbeat,
    research: FaMicroscope,
    technology: FaLaptopCode,
    leadership: FaUsersCog,
    business: FaChartLine,
    learning: FaBookOpen,
  };
  
  export const getAboutIcon = (iconName) => {
    return iconMap[iconName] || FaLightbulb;
  };