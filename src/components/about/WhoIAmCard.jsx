import { getIcon } from "../../utils/iconMapper";

function WhoIAmCard({ card }) {
  const Icon = getIcon(card.icon);

  return (
    <article className="who-i-am-card">

      {/* ======================================
          ICON
      ======================================= */}
      {Icon && (
        <div className="who-i-am-icon">
          <Icon />
        </div>
      )}

      {/* ======================================
          CONTENT
      ======================================= */}
      <h3 className="who-i-am-card-title">
        {card.title}
      </h3>

      <p className="who-i-am-card-description">
        {card.description}
      </p>
    </article>
  );
}

export default WhoIAmCard;