import { Link } from "react-router-dom";

import {
  FiActivity,
  FiArrowRight,
  FiBarChart2,
  FiBookOpen,
  FiBriefcase,
  FiCode,
  FiCpu,
  FiDatabase,
  FiGlobe,
  FiHeart,
  FiLayers,
  FiShield,
} from "react-icons/fi";

import "../../styles/insights/knowledgeDomains.css";

// ==========================================================
// DOMAIN ICONS
// ==========================================================

const DOMAIN_ICONS = {

  Healthcare: FiHeart,

  Research: FiBookOpen,

  Leadership: FiBriefcase,

  "Software Engineering": FiCode,

  Technology: FiCpu,

  "Data Science": FiDatabase,

  Innovation: FiLayers,

  "Public Health": FiActivity,

  "Digital Health": FiGlobe,

  Cybersecurity: FiShield,

  Analytics: FiBarChart2,

};

// ==========================================================
// KNOWLEDGE TOPICS
// TEMPORARY FRONTEND MAPPING
// ==========================================================

const DOMAIN_TOPICS = {

  Healthcare: [
    "Clinical Practice",
    "Public Health",
    "Digital Health",
  ],

  Research: [
    "Evidence",
    "Health Systems",
    "Monitoring & Evaluation",
  ],

  Leadership: [
    "Strategy",
    "Governance",
    "People",
  ],

  "Software Engineering": [
    "React",
    "Django",
    "REST APIs",
  ],

  Technology: [
    "AI",
    "Cloud",
    "Automation",
  ],

  "Data Science": [
    "Python",
    "Machine Learning",
    "Visualization",
  ],

  Innovation: [
    "Design Thinking",
    "Transformation",
    "Future Trends",
  ],

  "Public Health": [
    "Prevention",
    "Policy",
    "Population Health",
  ],

  "Digital Health": [
    "Telemedicine",
    "EHR",
    "HealthTech",
  ],

  Cybersecurity: [
    "Security",
    "Risk",
    "Privacy",
  ],

  Analytics: [
    "Dashboards",
    "KPIs",
    "Business Intelligence",
  ],

};

// ==========================================================
// KNOWLEDGE DOMAIN CARD
// INSIGHTS PAGE
// ABW PORTFOLIO
// ==========================================================

function KnowledgeDomainCard({
  category,
}) {

  if (!category) {
    return null;
  }

  const Icon =

    DOMAIN_ICONS[category.name] ||

    FiBookOpen;

  const topics =

    DOMAIN_TOPICS[category.name] ||

    [];

  return (

    <article
      className="knowledge-card"
      style={{
        "--domain-accent":
          category.accent_color ||
          "#2563eb",
      }}
    >

      {/* ==========================================
          HEADER
      ========================================== */}

      <div className="knowledge-card-header">

        <div className="knowledge-icon">

          <Icon />

        </div>

        <div>

          <h3 className="knowledge-title">

            {category.name}

          </h3>

        </div>

      </div>

      {/* ==========================================
          DESCRIPTION
      ========================================== */}

      <p className="knowledge-description">

        {category.description}

      </p>

      {/* ==========================================
          TOPICS
      ========================================== */}

      {topics.length > 0 && (

        <div className="knowledge-topics">

          {topics.map((topic) => (

            <span
              key={topic}
              className="knowledge-topic"
            >

              {topic}

            </span>

          ))}

        </div>

      )}

      {/* ==========================================
          FOOTER
      ========================================== */}

      <div className="knowledge-footer">

        <span className="knowledge-count">

          {category.article_count}

          {" "}

          {category.article_count === 1

            ? "Article"

            : "Articles"}

        </span>

        <Link
          to={`/insights/domain/${category.slug}`}
          className="knowledge-link"
        >

          Explore Domain

          <FiArrowRight />

        </Link>

      </div>

    </article>

  );

}

export default KnowledgeDomainCard;