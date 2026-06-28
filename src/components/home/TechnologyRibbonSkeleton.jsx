import "../../styles/home/technology-ribbon.css";

const SKELETON_COUNT = 10;

const PLACEHOLDERS = Array.from({

  length: SKELETON_COUNT,

});

function TechnologyRibbonSkeleton() {

  return (

    <section className="technology-ribbon">

      {/* ==========================================
          HEADER
      ========================================== */}

      <div className="technology-ribbon-header">

        <div className="skeleton skeleton-title"></div>

        <div className="skeleton skeleton-description"></div>

      </div>

      {/* ==========================================
          GRID
      ========================================== */}

      <div className="technology-ribbon-grid">

        {

          PLACEHOLDERS.map((_, index) => (

            <div
              key={index}
              className="technology-badge skeleton-badge"
            >

              <div className="skeleton skeleton-tech-icon"></div>

              <div className="skeleton skeleton-tech-name"></div>

            </div>

          ))

        }

      </div>

    </section>

  );

}

export default TechnologyRibbonSkeleton;