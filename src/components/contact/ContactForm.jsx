import { useState } from "react";

import "../../styles/contact/contactForm.css";

function ContactForm() {

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

  };

  const handleSubmit = (e) => {

    e.preventDefault();

    // Future API Integration
    console.log(formData);

    setSubmitted(true);

    setFormData({
      fullName: "",
      email: "",
      subject: "",
      message: "",
    });

    setTimeout(() => {
      setSubmitted(false);
    }, 5000);

  };

  return (

    <section className="contact-form-section section">

      <div className="container">

        <div className="contact-form-header">

          <span className="contact-form-badge">

            Send a Message

          </span>

          <h2 className="section-title">

            Let's Start a Conversation

          </h2>

          <p className="section-subtitle">

            Have a project, collaboration opportunity, research idea,
            or simply wish to connect? Feel free to send a message.

          </p>

        </div>


        <div className="contact-form-card">

          {submitted && (

            <div className="form-success">

              Thank you! Your message has been received.

            </div>

          )}

          <form onSubmit={handleSubmit}>

            <div className="form-group">

              <input
                type="text"
                name="fullName"
                placeholder=" "
                value={formData.fullName}
                onChange={handleChange}
                required
              />

              <label>

                Full Name

              </label>

            </div>


            <div className="form-group">

              <input
                type="email"
                name="email"
                placeholder=" "
                value={formData.email}
                onChange={handleChange}
                required
              />

              <label>

                Email Address

              </label>

            </div>


            <div className="form-group">

              <input
                type="text"
                name="subject"
                placeholder=" "
                value={formData.subject}
                onChange={handleChange}
                required
              />

              <label>

                Subject

              </label>

            </div>


            <div className="form-group">

              <textarea
                name="message"
                placeholder=" "
                rows="6"
                value={formData.message}
                onChange={handleChange}
                required
              />

              <label>

                Message

              </label>

            </div>


            <button
              type="submit"
              className="contact-submit-btn"
            >

              Send Message

            </button>

          </form>

        </div>

      </div>

    </section>

  );

}

export default ContactForm;