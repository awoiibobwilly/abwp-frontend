import { getIcon } from "../../utils/iconMapper";

function ExpertiseCard({

  expertise,

}) {

  const Icon = getIcon(

    expertise.icon

  );

  return (

    <article className="expertise-card">

      {

        Icon && (

          <div className="expertise-icon">

            <Icon />

          </div>

        )

      }

      <h3>

        {expertise.title}

      </h3>

      <p>

        {expertise.description}

      </p>

    </article>

  );

}

export default ExpertiseCard;