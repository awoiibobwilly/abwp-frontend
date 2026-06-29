import "../../styles/home/journey-preview.css";


function SkeletonCard() {

  return (

    <article className="journey-card journey-skeleton">

      {/* ======================================
          Timeline Marker
      ======================================= */}

      <div className="journey-marker">

        <span className="journey-dot skeleton" />

        <span className="journey-line" />

      </div>

      {/* ======================================
          Card
      ======================================= */}

      <div className="journey-content">

        {/* Image */}

        <div

          className="journey-placeholder skeleton"

        />

        {/* Badges */}

        <div className="journey-badges">

          <div

            className="skeleton"

            style={{

              width: "110px",

              height: "30px",

              borderRadius: "999px",

            }}

          />

          <div

            className="skeleton"

            style={{

              width: "90px",

              height: "30px",

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

        {/* Meta */}

        <div className="journey-meta">

          {

            Array.from({

              length: 3,

            }).map((_, index) => (

              <div

                key={index}

                className="skeleton"

                style={{

                  width: "140px",

                  height: "18px",

                  borderRadius: "6px",

                }}

              />

            ))

          }

        </div>

        {/* Summary */}

        {

          Array.from({

            length: 3,

          }).map((_, index) => (

            <div

              key={index}

              className="skeleton"

              style={{

                width:

                  index === 2

                    ? "75%"

                    : "100%",

                height: "14px",

                borderRadius: "6px",

                marginBottom: ".75rem",

              }}

            />

          ))

        }

        {/* Footer */}

        <div className="journey-footer">

          <div

            className="skeleton"

            style={{

              width: "60px",

              height: "22px",

              borderRadius: "6px",

            }}

          />

          <div

            className="skeleton"

            style={{

              width: "120px",

              height: "22px",

              borderRadius: "6px",

            }}

          />

        </div>

      </div>

    </article>

  );

}

function JourneySkeleton() {

  return (

    <div className="journey-timeline">

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

export default JourneySkeleton;