import "../../styles/home/featured-projects.css";

const PLACEHOLDERS = Array.from({

  length: 3,

});

function FeaturedProjectsSkeleton() {

  return (

    <div className="projects-grid">

      {

        PLACEHOLDERS.map((_, index) => (

          <article

            key={index}

            className="project-card"

          >

            {/* ======================================
                IMAGE
            ======================================= */}

            <div className="project-image">

              <div className="skeleton skeleton-project-image"></div>

            </div>

            {/* ======================================
                CONTENT
            ======================================= */}

            <div className="project-content">

              <div className="project-meta">

                <div className="skeleton skeleton-category"></div>

                <div className="skeleton skeleton-status"></div>

              </div>

              <div className="skeleton skeleton-project-title"></div>

              <div className="skeleton skeleton-project-description"></div>

              <div className="skeleton skeleton-project-description short"></div>

              <div className="project-client-role">

                <div className="skeleton skeleton-meta-item"></div>

                <div className="skeleton skeleton-meta-item"></div>

              </div>

              <div className="project-technologies">

                <div className="skeleton skeleton-tech"></div>

                <div className="skeleton skeleton-tech"></div>

                <div className="skeleton skeleton-tech"></div>

              </div>

            </div>

            {/* ======================================
                FOOTER
            ======================================= */}

            <div className="project-footer">

              <div className="project-links">

                <div className="skeleton skeleton-button"></div>

                <div className="skeleton skeleton-button"></div>

              </div>

              <div className="skeleton skeleton-link"></div>

            </div>

          </article>

        ))

      }

    </div>

  );

}

export default FeaturedProjectsSkeleton;