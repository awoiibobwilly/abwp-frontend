import { getIcon } from "../../utils/iconMapper";

function DnaPillarCard({ pillar }) {
  const Icon = getIcon(pillar.icon);

  return (
    <article className="dna-pillar-card">

      {/* ======================================
          ICON
      ======================================= */}
      {Icon && (
        <div className="dna-pillar-icon">
          <Icon />
        </div>
      )}

      {/* ======================================
          TITLE
      ======================================= */}
      <h3 className="dna-pillar-title">
        {pillar.title}
      </h3>

      {/* ======================================
          DESCRIPTION
      ======================================= */}
      <p className="dna-pillar-description">
        {pillar.description}
      </p>

      {/* ======================================
          HIGHLIGHTS
      ======================================= */}
      {pillar.highlights?.length > 0 && (
        <ul className="dna-pillar-highlights">
          {pillar.highlights.map((item) => (
            <li key={item}>
              {item}
            </li>
          ))}
        </ul>
      )}
    </article>
  );
}

export default DnaPillarCard;