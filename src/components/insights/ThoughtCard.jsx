import { FaArrowRight } from "react-icons/fa";

function ThoughtCard({ thought }) {

  return (

    <div className="thought-card">

      <div className="thought-meta">

        <span className="thought-category">

          {thought.category}

        </span>

        <span>

          {thought.date}

        </span>

      </div>


      <h3>

        {thought.title}

      </h3>


      <p>

        {thought.excerpt}

      </p>


      <button className="thought-link">

        Read More

        <FaArrowRight />

      </button>

    </div>

  );

}

export default ThoughtCard;