import "../../styles/home/featured-projects.css";

function SkeletonCard() {

  return (

    <article className="project-card project-skeleton">

      {/* =====================================
          Image
      ====================================== */}

      <div
        className="project-image skeleton"
      />

      {/* =====================================
          Content
      ====================================== */}

      <div className="project-content">

        {/* Meta */}

        <div className="project-meta">

          <div
            className="skeleton"
            style={{
              width: "120px",
              height: "32px",
              borderRadius: "999px",
            }}
          />

          <div
            className="skeleton"
            style={{
              width: "110px",
              height: "32px",
              borderRadius: "999px",
            }}
          />

        </div>

        {/* Title */}

        <div
          className="skeleton"
          style={{
            width: "70%",
            height: "28px",
            borderRadius: "8px",
            marginBottom: "1rem",
          }}
        />

        {/* Description */}

        <div
          className="skeleton"
          style={{
            width: "100%",
            height: "14px",
            borderRadius: "6px",
            marginBottom: ".8rem",
          }}
        />

        <div
          className="skeleton"
          style={{
            width: "92%",
            height: "14px",
            borderRadius: "6px",
            marginBottom: ".8rem",
          }}
        />

        <div
          className="skeleton"
          style={{
            width: "80%",
            height: "14px",
            borderRadius: "6px",
          }}
        />

        {/* Technology Pills */}

        <div className="project-technologies">

          {

            Array.from({

              length: 5,

            }).map((_, index) => (

              <div

                key={index}

                className="skeleton"

                style={{

                  width: `${60 + (index * 10)}px`,

                  height: "34px",

                  borderRadius: "999px",

                }}

              />

            ))

          }

        </div>

      </div>

      {/* =====================================
          Footer
      ====================================== */}

      <div className="project-footer">

        <div className="project-links">

          <div

            className="skeleton"

            style={{

              width: "110px",

              height: "42px",

              borderRadius: "999px",

            }}

          />

          <div

            className="skeleton"

            style={{

              width: "100px",

              height: "42px",

              borderRadius: "999px",

            }}

          />

        </div>

        <div

          className="skeleton"

          style={{

            width: "120px",

            height: "18px",

            borderRadius: "8px",

          }}

        />

      </div>

    </article>

  );

}

function FeaturedProjectsSkeleton() {

  return (

    <div className="projects-grid">

      {

        Array.from({

          length: 3,

        }).map((_, index) => (

          <SkeletonCard

            key={index}

          />

        ))

      }

    </div>

  );

}

export default FeaturedProjectsSkeleton;