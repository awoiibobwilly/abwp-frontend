import { useState } from "react";
import { sendContactMessage } from "../../services/contactService";

import "../../styles/contact/contactForm.css";

function ContactForm() {

  const [formData, setFormData] = useState({
    full_name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const [success, setSuccess] = useState("");

  const [error, setError] = useState("");



  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

  };



  const handleSubmit = async (e) => {

    e.preventDefault();

    setLoading(true);

    setSuccess("");

    setError("");

    try {

      await sendContactMessage(formData);

      setSuccess(
        "Thank you! Your message has been received."
      );

      setFormData({
        full_name: "",
        email: "",
        subject: "",
        message: "",
      });

      setTimeout(() => {

        setSuccess("");

      }, 5000);

    }

    catch (err) {

      setError(
        "Something went wrong. Please try again."
      );

    }

    finally {

      setLoading(false);

    }

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

            Have a project, collaboration opportunity,
            research idea, or simply wish to connect?
            Feel free to send a message.

          </p>

        </div>



        <div className="contact-form-card">

          {success && (

            <div className="form-success">

              {success}

            </div>

          )}



          {error && (

            <div className="form-error">

              {error}

            </div>

          )}



          <form onSubmit={handleSubmit}>

            <div className="form-group">

              <input
                type="text"
                name="full_name"
                placeholder=" "
                value={formData.full_name}
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
              disabled={loading}
            >

              {

                loading

                ? "Sending..."

                : "Send Message"

              }

            </button>

          </form>

        </div>

      </div>

    </section>

  );

}

export default ContactForm;