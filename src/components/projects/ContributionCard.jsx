import { getIcon } from "../../utils/iconMapper";

function ContributionCard({ item }) {
  const Icon = getIcon(item?.icon);

  return (
    <div className="contribution-card">
      <div className="contribution-icon">
        <Icon />
      </div>

      <h3>{item?.title}</h3>

      <p>{item?.description}</p>
    </div>
  );
}

export default ContributionCard;