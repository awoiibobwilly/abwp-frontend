import {
  FaHeartbeat,
  FaGlobeAfrica,
  FaLaptopMedical,
  FaFlask,
  FaCode,
  FaChartLine,
  FaBrain,
  FaUsers,
  FaClipboardCheck,
  FaRocket,
  FaFolderOpen,
} from "react-icons/fa";

/* ==========================================
 ICON MAP
========================================== */

const ICONS = {
  FaHeartbeat,
  FaGlobeAfrica,
  FaLaptopMedical,
  FaFlask,
  FaCode,
  FaChartLine,
  FaBrain,
  FaUsers,
  FaClipboardCheck,
  FaRocket,
};

/* ==========================================
 COLLECTION CARD
========================================== */

function CollectionCard({ theme }) {

  const Icon = ICONS[theme.icon] || FaFolderOpen;

  return (

      <div
          className="collection-card"
          style={{
              borderTop: `4px solid ${theme.accent_color}`,
          }}
      >

          <div
              className="collection-icon"
              style={{
                  color: theme.accent_color,
              }}
          >

              <Icon />

          </div>

          <h3>

              {theme.title}

          </h3>

          <p>

              {theme.short_description}

          </p>

      </div>

  );

}

export default CollectionCard;