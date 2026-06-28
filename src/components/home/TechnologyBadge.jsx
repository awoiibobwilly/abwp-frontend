import { getIcon } from "../../utils/iconMapper";

function TechnologyBadge({

  technology,

}) {

  const Icon = getIcon(

    technology.icon

  );

  return (

    <div
      className="technology-badge"
      title={technology.name}
      aria-label={technology.name}
    >

      <div
        className="technology-badge-icon"
        style={{
          color:
            technology.color || "var(--accent)",
        }}
      >

        <Icon />

      </div>

      <span className="technology-badge-name">

        {technology.name}

      </span>

    </div>

  );

}

export default TechnologyBadge;