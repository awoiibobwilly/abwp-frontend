import { useState } from "react";
import { sendContactMessage } from "../../services/contactService";
import { getErrorMessage } from "../../utils/getErrorMessage";
import "../../styles/contact/contactForm.css";

function ContactForm() {

  const [formData, setFormData] = useState({

      full_name: "",

      email: "",

      subject: "",

      message: "",

      honeypot: "",

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

  const validateForm = () => {
    const { full_name, email, subject, message } = formData;

    // Check if empty or only spaces
    if (!full_name.trim()) {
      return "Please enter your full name.";
    }
    if (full_name.trim().length < 3) {
      return "Full name must be at least 3 characters long.";
    }

    // Explicit UX-friendly Email Regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.trim()) {
      return "Please enter your email address.";
    }
    if (!emailRegex.test(email.trim())) {
      return "Please provide a valid email address (e.g., name@example.com).";
    }

    if (!subject.trim()) {
      return "Please provide a subject for your message.";
    }
    if (subject.trim().length < 5) {
      return "Subject must be at least 5 characters long.";
    }

    if (!message.trim()) {
      return "Please type a message before sending.";
    }
    if (message.trim().length < 20) {
      return "Please provide a more descriptive message (at least 20 characters).";
    }

    return null; 
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSuccess("");
    setError("");

    // Run Frontend Validation check first
    const validationError = validateForm();
    if (validationError) {
      setError(validationError);
      return; // Stop form submission entirely
    }

    setLoading(true);

    try {
      await sendContactMessage(formData);
      setSuccess("Thank you! Your message has been received.");

      setTimeout(() => {

        setSuccess("");
    
        }, 5000);
      
      setFormData({
        full_name: "",
        email: "",
        subject: "",
        message: "",
      });

      setTimeout(() => {
        setSuccess("");
      }, 7000);
    } catch (err) {
      setError(getErrorMessage(err));
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="contact-form-section section">
      <div className="container">
        
        <div className="contact-form-header">
          <span className="contact-form-badge">Send a Message</span>
          <h2 className="section-title">Let's Start a Conversation</h2>
          <p className="section-subtitle">
            Have a project, collaboration opportunity, research idea, or simply wish to connect? 
            Feel free to send a message.
          </p>
        </div>

        <div className="contact-form-card">
          {success && <div className="form-success" role="alert">{success}</div>}
          {error && <div className="form-error" role="alert">{error}</div>}

          {/* noValidate turns off default browser tooltips */}
          <form onSubmit={handleSubmit} noValidate>
            <div className="form-group">
              <input
                type="text"
                name="full_name"
                placeholder=" "
                value={formData.full_name}
                onChange={handleChange}
                required
              />
              <label>Full Name</label>
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
              <label>Email Address</label>
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
              <label>Subject</label>
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
              <label>Message</label>
            </div>
            <input

                type="text"

                name="honeypot"

                value={formData.honeypot}

                onChange={handleChange}

                autoComplete="off"

                tabIndex="-1"

                style={{
                    display: "none"
                }}

            />


            <button
              type="submit"
              className="contact-submit-btn"
              disabled={loading}
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>

      </div>
    </section>
  );
}

export default ContactForm;