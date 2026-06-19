import { FaExternalLinkAlt } from "react-icons/fa";

function ResourceDirectoryCard({ resource }) {

  const Icon = resource.icon;

  return (

    <div className="resource-directory-card">

      <div className="resource-directory-icon">

        <Icon />

      </div>


      <span className="resource-directory-category">

        {resource.category}

      </span>


      <h3>

        {resource.title}

      </h3>


      <p>

        {resource.description}

      </p>


      <a
        href={resource.url}
        target="_blank"
        rel="noopener noreferrer"
        className="resource-directory-link"
      >

        <span>

          Visit Resource

        </span>

        <FaExternalLinkAlt />

      </a>

    </div>

  );

}

export default ResourceDirectoryCard;