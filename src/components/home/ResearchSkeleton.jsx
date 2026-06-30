import "../../styles/home/research.css";

const PLACEHOLDERS = Array.from({

  length: 3,

});

function SkeletonCard() {

  return (

    <article className="research-card">

      {/* ======================================
          Media
      ======================================= */}

      <div className="research-placeholder skeleton" />

      {/* ======================================
          Content
      ======================================= */}

      <div className="research-content">

        {/* Badges */}

        <div className="research-badges">

          <div className="skeleton skeleton-research-badge" />

          <div className="skeleton skeleton-research-badge short" />

          <div className="skeleton skeleton-research-status" />

        </div>

        {/* Title */}

        <div className="skeleton skeleton-research-title" />

        {/* Meta */}

        <div className="research-meta">

          {

            Array.from({

              length: 3,

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

        {/* Summary */}

        <div className="skeleton skeleton-research-text" />

        <div className="skeleton skeleton-research-text" />

        <div className="skeleton skeleton-research-text short" />

        {/* Keywords */}

        <div className="research-keywords">

          {

            Array.from({

              length: 4,

            }).map((_, index) => (

              <div

                key={index}

                className="skeleton skeleton-research-keyword"

              />

            ))

          }

        </div>

        {/* Footer */}

        <div className="research-footer">

          <div className="skeleton skeleton-research-year" />

          <div className="skeleton skeleton-research-link" />

        </div>

      </div>

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