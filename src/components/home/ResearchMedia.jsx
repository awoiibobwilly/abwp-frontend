function ResearchMedia({

    research,
  
  }) {
  
    const media =
  
      research.featured_image ||
  
      research.cover_image ||
  
      research.thumbnail ||
  
      research.image ||
  
      null;
  
    return (
  
      <>
        {/* ======================================
            Research Media
        ======================================= */}
  
        {
  
          media ? (
  
            <div className="research-image">
  
              <img
  
                src={media}
  
                alt={research.title}
  
                loading="lazy"
  
              />
  
            </div>
  
          ) : (
  
            <div className="research-placeholder">
  
              <span>
  
                {
  
                  research.title
  
                    ?.charAt(0)
  
                    ?.toUpperCase()
  
                  ||
  
                  "R"
  
                }
  
              </span>
  
            </div>
  
          )
  
        }
  
      </>
  
    );
  
  }
  
  export default ResearchMedia;