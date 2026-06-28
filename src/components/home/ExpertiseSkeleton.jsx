import "../../styles/home/expertise.css";

const PLACEHOLDERS = Array.from({

  length: 3,

});

function ExpertiseSkeleton() {

  return (

    <div className="expertise-grid">

      {

        PLACEHOLDERS.map((_, index) => (

          <article

            key={index}

            className="expertise-card"

          >

            {/* ======================================
                Icon
            ======================================= */}

            <div className="expertise-icon">

              <div className="skeleton skeleton-expertise-icon"></div>

            </div>

            {/* ======================================
                Title
            ======================================= */}

            <div className="skeleton skeleton-expertise-title"></div>

            {/* ======================================
                Description
            ======================================= */}

            <div className="skeleton skeleton-expertise-text"></div>

            <div className="skeleton skeleton-expertise-text"></div>

            <div className="skeleton skeleton-expertise-text short"></div>

          </article>

        ))

      }

    </div>

  );

}

export default ExpertiseSkeleton;