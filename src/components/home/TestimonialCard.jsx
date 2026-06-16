function TestimonialCard({
    quote,
    name,
    role,
  }) {
    return (
      <div className="testimonial-card">
  
        <div className="testimonial-stars">
          ★★★★★
        </div>
  
        <p className="testimonial-quote">
          "{quote}"
        </p>
  
        <div className="testimonial-author">
  
          <h4>{name}</h4>
  
          <span>{role}</span>
  
        </div>
  
      </div>
    );
  }
  
  export default TestimonialCard;