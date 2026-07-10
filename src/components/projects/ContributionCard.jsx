import { FaArrowRight } from "react-icons/fa";
import {
  FaCodeBranch,
  FaUsers,
  FaBookOpen,
  FaLightbulb,
  FaChartLine,
  FaHandshake,
  FaLaptopCode,
  FaGlobe,
} from "react-icons/fa";

// ==========================================================
// ICON MAPPER
// ==========================================================

function getContributionIcon(iconName) {
  const iconMap = {
    code: FaCodeBranch,
    collaboration: FaUsers,
    learning: FaBookOpen,
    innovation: FaLightbulb,
    growth: FaChartLine,
    partnership: FaHandshake,
    engineering: FaLaptopCode,
    impact: FaGlobe,
  };

  return iconMap[iconName] || FaCodeBranch;
}

// ==========================================================
// CONTRIBUTION CARD
// BEYOND PROJECTS
// PROJECTS PAGE
// FINAL BALANCE PASS
// ==========================================================

function ContributionCard({ item }) {
  const Icon = getContributionIcon(item?.icon);

  return (
    <article className="contribution-card">
      {/* ======================================
          TOP
      ====================================== */}
      <div className="contribution-card-top">
        <div className="contribution-icon">
          <Icon />
        </div>

        <div className="contribution-card-heading">
          <h3>{item?.title}</h3>
        </div>
      </div>

      {/* ======================================
          BODY
      ====================================== */}
      <p className="contribution-description">
        {item?.description}
      </p>

      {/* ======================================
          FOOTER
      ====================================== */}
      <div className="contribution-card-footer">
        <span className="contribution-chip">
          Ongoing contribution
          <FaArrowRight />
        </span>
      </div>
    </article>
  );
}

export default ContributionCard;