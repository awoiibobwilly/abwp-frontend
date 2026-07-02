import CredentialCard from "./CredentialCard";

function CredentialGroup({
  title,
  items = [],
}) {
  return (
    <div className="credential-group">

      {/* ======================================
          GROUP TITLE
      ======================================= */}
      <div className="credential-group-header">
        <h3 className="credential-group-title">
          {title}
        </h3>
      </div>

      {/* ======================================
          GROUP ITEMS
      ======================================= */}
      <div className="credential-group-list">
        {items.map((item) => (
          <CredentialCard
            key={item.id}
            item={item}
          />
        ))}
      </div>
    </div>
  );
}

export default CredentialGroup;