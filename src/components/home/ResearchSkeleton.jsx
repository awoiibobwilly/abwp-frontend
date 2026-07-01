import "../../styles/home/research.css";

const PLACEHOLDERS = Array.from({

  length: 3,

});

function SkeletonCard() {

  return (

    <article className="research-card">

      {/* ======================================
          Publication Cover
      ======================================= */}

      <div className="research-cover">

        <div className="skeleton skeleton-research-cover" />

      </div>

      {/* ======================================
          Content
      ======================================= */}

      <div className="research-content">

        <div className="research-body">

          {/* ======================================
              Title
          ======================================= */}

          <div className="skeleton skeleton-research-title" />

          {/* ======================================
              Summary
          ======================================= */}

          <div className="skeleton skeleton-research-text" />

          <div className="skeleton skeleton-research-text" />

          <div className="skeleton skeleton-research-text short" />

          {/* ======================================
              Divider
          ======================================= */}

          <div className="research-divider" />

          {/* ======================================
              Metadata
          ======================================= */}

          <div className="research-meta">

            {

              Array.from({

                length: 4,

              }).map((_, index) => (

                <div

                  key={index}

                  className="research-meta-item"

                >

                  <div className="skeleton skeleton-research-meta-label" />

                  <div className="skeleton skeleton-research-meta-value" />

                </div>

              ))

            }

          </div>

          {/* ======================================
              Keywords
          ======================================= */}

          <div className="research-keywords">

            {

              Array.from({

                length: 3,

              }).map((_, index) => (

                <div

                  key={index}

                  className="skeleton skeleton-research-keyword"

                />

              ))

            }

          </div>

        </div>

      </div>

      {/* ======================================
          Footer
      ======================================= */}

      <footer className="research-footer">

        <div className="skeleton skeleton-research-year" />

        <div className="skeleton skeleton-research-link" />

      </footer>

    </article>

  );

}

function ResearchSkeleton() {

  return (

    <div className="research-grid">

      {

        PLACEHOLDERS.map((_, index) => (

          <SkeletonCard

            key={index}

          />

        ))

      }

    </div>

  );

}

export default ResearchSkeleton;