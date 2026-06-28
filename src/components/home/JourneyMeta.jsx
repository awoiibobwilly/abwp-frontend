import {
    FaBuilding,
    FaCalendarAlt,
    FaMapMarkerAlt,
  } from "react-icons/fa";
  
  import StatusBadge from "../common/StatusBadge";
  
  function JourneyMeta({
  
    journey,
  
  }) {
  
    return (
  
      <div className="journey-details">
  
        {/* ======================================
            Header
        ======================================= */}
  
        <div className="journey-header">
  
          <div className="journey-badges">
  
            <span
  
              className="journey-type"
  
              style={{
  
                backgroundColor:
  
                  `${journey.accent_color}20`,
  
                color:
  
                  journey.accent_color,
  
              }}
  
            >
  
              {journey.journey_type_display}
  
            </span>
  
            {
  
              journey.featured && (
  
                <StatusBadge
  
                  label="Featured"
  
                  variant="warning"
  
                />
  
              )
  
            }
  
            {
  
              journey.is_current && (
  
                <StatusBadge
  
                  label="Current"
  
                  variant="success"
  
                />
  
              )
  
            }
  
          </div>
  
          <h3>
  
            {journey.title}
  
          </h3>
  
        </div>
  
        {/* ======================================
            Meta
        ======================================= */}
  
        <div className="journey-meta">
  
          <span>
  
            <FaBuilding />
  
            {journey.organization}
  
          </span>
  
          {
  
            journey.location && (
  
              <span>
  
                <FaMapMarkerAlt />
  
                {journey.location}
  
              </span>
  
            )
  
          }
  
          <span>
  
            <FaCalendarAlt />
  
            {journey.duration}
  
          </span>
  
        </div>
  
        {/* ======================================
            Summary
        ======================================= */}
  
        <p className="journey-summary">
  
          {journey.summary}
  
        </p>
  
      </div>
  
    );
  
  }
  
  export default JourneyMeta;