import SectionHeader from "../common/SectionHeader";
import SectionMessage from "../common/SectionMessage";

import TestimonialCard from "./TestimonialCard";
import TestimonialSkeleton from "./TestimonialSkeleton";

import useApiResource from "../../hooks/useApiResource";

import {
  getFeaturedTestimonials,
} from "../../services/testimonialService";

import "../../styles/home/testimonials.css";

function Testimonials() {

  // ==========================================
  // State
  // ==========================================

  const {

    data: testimonials,

    loading,

    error,

  } = useApiResource(

    getFeaturedTestimonials

  );

  // ==========================================
  // Component
  // ==========================================

  return (

    <section

      id="testimonials"

      className="testimonials section"

    >

      <div className="container">

        {/* ======================================
            Section Header
        ======================================= */}

        <SectionHeader

          eyebrow="Testimonials"

          title="Testimonials & Social Proof"

          description="Experiences shared by clients, collaborators, healthcare professionals, research partners and leadership colleagues."

        />

        {/* ======================================
            Loading
        ======================================= */}

        {

          loading && (

            <TestimonialSkeleton />

          )

        }

        {/* ======================================
            Error
        ======================================= */}

        {

          !loading &&

          error && (

            <SectionMessage

              type="error"

              message={error}

            />

          )

        }

        {/* ======================================
            Empty
        ======================================= */}

        {

          !loading &&

          !error &&

          testimonials.length === 0 && (

            <SectionMessage

              type="empty"

              message="Testimonials will appear here soon."

            />

          )

        }

        {/* ======================================
            Testimonials Grid
        ======================================= */}

        {

          !loading &&

          !error &&

          testimonials.length > 0 && (

            <div className="testimonials-grid">

              {

                testimonials.map(

                  (testimonial) => (

                    <TestimonialCard

                      key={testimonial.id}

                      testimonial={testimonial}

                    />

                  )

                )

              }

            </div>

          )

        }

      </div>

    </section>

  );

}

export default Testimonials;