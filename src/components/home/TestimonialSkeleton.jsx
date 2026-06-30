import "../../styles/home/testimonials.css";

const PLACEHOLDERS = Array.from({

    length: 3,

});

function TestimonialSkeleton() {

    return (

        <div className="testimonials-grid">

            {

                PLACEHOLDERS.map((_, index) => (

                    <article

                        key={index}

                        className="testimonial-card"

                    >

                        <div className="skeleton skeleton-testimonial-stars" />

                        <div className="skeleton skeleton-testimonial-text" />

                        <div className="skeleton skeleton-testimonial-text short" />

                        <div className="testimonial-author">

                            <div className="skeleton skeleton-testimonial-name" />

                            <div className="skeleton skeleton-testimonial-role" />

                        </div>

                    </article>

                ))

            }

        </div>

    );

}

export default TestimonialSkeleton;