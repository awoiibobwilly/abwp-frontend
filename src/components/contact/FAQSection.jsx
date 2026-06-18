import FAQItem from "./FAQItem";

import { faqData }
from "../../data/contact/faqData";

import "../../styles/contact/faq.css";

function FAQSection() {

  return (

    <section className="faq section">

      <div className="container">

        <div className="faq-header">

          <span className="faq-badge">

            Frequently Asked Questions

          </span>

          <h2 className="section-title">

            Questions You May Have

          </h2>

          <p className="section-subtitle">

            Answers to common questions regarding
            collaborations, research, consultancy,
            and professional engagements.

          </p>

        </div>


        <div className="faq-list">

          {faqData.map((item, index) => (

            <FAQItem
              key={index}
              item={item}
            />

          ))}

        </div>

      </div>

    </section>

  );

}

export default FAQSection;