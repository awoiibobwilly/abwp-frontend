import TestimonialCard from "./TestimonialCard";
import { testimonialData } from "../../data/home/testimonialData";

import "../../styles/home/testimonials.css";

function Testimonials() {
  return (
    <section className="testimonials section">

      <div className="container">

        <div className="section-header">

          <h2 className="section-title">
            Testimonials & Social Proof
          </h2>

          <p className="section-subtitle">
            Experiences shared by collaborators,
            clients, and professional colleagues.
          </p>

        </div>

        <div className="testimonials-grid">

          {
            testimonialData.map((item, index) => (
              <TestimonialCard
                key={index}
                {...item}
              />
            ))
          }

        </div>

      </div>

    </section>
  );
}

export default Testimonials;