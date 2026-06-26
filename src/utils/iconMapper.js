import {
    FaLaptopCode,
    FaHospital,
    FaHeartbeat,
    FaChartLine,
    FaMicroscope,
    FaUsersCog,
    FaFolderOpen,
    FaAward,
    FaGraduationCap,
    FaUsers,
    FaLayerGroup,
    FaMedal,
  } from "react-icons/fa";
  
  export const iconMap = {
    FaLaptopCode,
    FaHospital,
    FaHeartbeat,
    FaChartLine,
    FaMicroscope,
    FaUsersCog,
    FaFolderOpen,
    FaAward,
    FaGraduationCap,
    FaUsers,
    FaLayerGroup,
    FaMedal,
  };


import * as FaIcons from "react-icons/fa";
import * as SiIcons from "react-icons/si";
import * as MdIcons from "react-icons/md";
import * as HiIcons from "react-icons/hi";
import * as Hi2Icons from "react-icons/hi2";
import * as BsIcons from "react-icons/bs";
import * as RiIcons from "react-icons/ri";
import * as TbIcons from "react-icons/tb";
import * as AiIcons from "react-icons/ai";
import * as BiIcons from "react-icons/bi";
import * as FiIcons from "react-icons/fi";
import * as IoIcons from "react-icons/io5";
import * as LuIcons from "react-icons/lu";

/* ==========================================
   ICON LIBRARIES
========================================== */

const ICON_LIBRARIES = {
  ...FaIcons,
  ...SiIcons,
  ...MdIcons,
  ...HiIcons,
  ...Hi2Icons,
  ...BsIcons,
  ...RiIcons,
  ...TbIcons,
  ...AiIcons,
  ...BiIcons,
  ...FiIcons,
  ...IoIcons,
  ...LuIcons,
};

/* ==========================================
   DEFAULT ICON
========================================== */

const DEFAULT_ICON = FaIcons.FaCircle;

/* ==========================================
   GET ICON COMPONENT
========================================== */

export const getIcon = (iconName) => {

  if (!iconName) {
    return DEFAULT_ICON;
  }

  return ICON_LIBRARIES[iconName] || DEFAULT_ICON;

};