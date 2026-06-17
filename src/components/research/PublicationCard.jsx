import { FaArrowRight } from "react-icons/fa";

function PublicationCard({ publication }) {

  return (

    <div className="publication-card">

      <div className="publication-meta">

        <span className="publication-type">

          {publication.type}

        </span>

        <span className="publication-year">

          {publication.year}

        </span>

      </div>


      <div className="publication-status">

        {publication.status}

      </div>


      <h3>

        {publication.title}

      </h3>

      <p>

        {publication.description}

      </p>


      <a
        href={publication.link}
        className="publication-link"
      >

        Read More

        <FaArrowRight />

      </a>

    </div>

  );

}

export default PublicationCard;