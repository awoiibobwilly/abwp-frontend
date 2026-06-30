import {

  FaQuoteLeft,

  FaLinkedin,

  FaStar,

} from "react-icons/fa";

function TestimonialCard({

  testimonial,

}) {

  return (

    <article className="testimonial-card">

      {/* ======================================
          Quote Icon
      ======================================= */}

      <div className="testimonial-quote-icon">

        <FaQuoteLeft />

      </div>

      {/* ======================================
          Rating
      ======================================= */}

      <div className="testimonial-stars">

        {

          Array.from({

            length: testimonial.rating || 5,

          }).map((_, index) => (

            <FaStar

              key={index}

            />

          ))

        }

      </div>

      {/* ======================================
          Quote
      ======================================= */}

      <p className="testimonial-quote">

        "{testimonial.quote}"

      </p>

      {/* ======================================
          Author
      ======================================= */}

      <div className="testimonial-author">

        {

          testimonial.photo ? (

            <img

              src={testimonial.photo}

              alt={testimonial.name}

              className="testimonial-avatar"

              loading="lazy"

            />

          ) : (

            <div className="testimonial-avatar-placeholder">

              {

                testimonial.name

                  ?.charAt(0)

                  ?.toUpperCase()

              }

            </div>

          )

        }

        <div className="testimonial-author-info">

          <h3>

            {testimonial.name}

          </h3>

          <p>

            {testimonial.position}

          </p>

          <span>

            {testimonial.organisation}

          </span>

        </div>

      </div>

      {/* ======================================
          Divider
      ====================================== */}

      <div className="testimonial-divider"></div>

      {/* ======================================
          Footer
      ======================================= */}

      {

        testimonial.linkedin_url && (

          <div className="testimonial-footer">

            <a

              href={testimonial.linkedin_url}

              target="_blank"

              rel="noopener noreferrer"

              className="testimonial-linkedin"

            >

              <FaLinkedin />

              View Profile

            </a>

          </div>

        )

      }

    </article>

  );

}

export default TestimonialCard;