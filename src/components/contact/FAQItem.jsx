import { useState } from "react";

import { FaChevronDown } from "react-icons/fa";

function FAQItem({ item }) {

  const [open, setOpen] = useState(false);

  return (

    <div
      className={`faq-item ${open ? "active" : ""}`}
    >

      <button
        className="faq-question"
        onClick={() => setOpen(!open)}
      >

        <span>

          {item.question}

        </span>

        <FaChevronDown />

      </button>


      <div className="faq-answer">

        <p>

          {item.answer}

        </p>

      </div>

    </div>

  );

}

export default FAQItem;