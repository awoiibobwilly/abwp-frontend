function JourneyMedia({

    journey,
  
  }) {
  
    return (
  
      <>
        {/* ======================================
            Journey Image
        ======================================= */}
  
        {
  
          journey.image ? (
  
            <div className="journey-image">
  
              <img
  
                src={journey.image}
  
                alt={journey.title}
  
                loading="lazy"
  
              />
  
            </div>
  
          ) : (
  
            <div className="journey-placeholder">
  
              <span>
  
                {
  
                  journey.organization
  
                    ?.charAt(0)
  
                    ?.toUpperCase() ||
  
                  "A"
  
                }
  
              </span>
  
            </div>
  
          )
  
        }
  
      </>
  
    );
  
  }
  
  export default JourneyMedia;