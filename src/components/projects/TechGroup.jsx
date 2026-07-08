function TechGroup({ group }) {
  return (
    <div className="tech-group">
      <h3>
        {group.title}
      </h3>

      <div className="tech-items">
        {group.items?.map((tech, index) => (
          <span
            className="tech-badge"
            key={tech.id || index}
            style={{
              borderColor: `${tech.color || "#2563eb"}30`,
            }}
          >
            {tech.name}
          </span>
        ))}
      </div>
    </div>
  );
}

export default TechGroup;