import { contactInfoData }
from "../../data/contact/contactInfoData";

import ContactCard from "./ContactCard";

import "../../styles/contact/contactInfo.css";

function ContactInfo() {

  return (

    <section className="contact-info section">

      <div className="container">

        <div className="contact-info-header">

          <span className="contact-info-badge">

            Contact Details

          </span>

          <h2 className="section-title">

            Multiple Ways to Reach Me

          </h2>

          <p className="section-subtitle">

            Whether you have a question, project,
            partnership, or opportunity, I'd be delighted
            to hear from you.

          </p>

        </div>


        <div className="contact-info-grid">

          {contactInfoData.map((item, index) => (

            <ContactCard
              key={index}
              item={item}
            />

          ))}

        </div>

      </div>

    </section>

  );

}

export default ContactInfo;