import "../../styles/knowledgeHub/practicalResourceCard.css";

function PracticalResourceCard({ resource }) {

    const {

        title,

        summary,

        thumbnail,

        version,

        resource_type,

        resource_type_display,

        resource_file,

        external_url,

        themes = [],

        tags = [],

    } = resource;

    return (

        <article className="resource-card">

            <div className="resource-card-image">

                <img
                    src={thumbnail}
                    alt={title}
                    loading="lazy"
                />

            </div>

            <div className="resource-card-body">

                <div className="resource-card-header">

                    <span
                        className={`resource-type resource-type-${resource_type}`}
                    >

                        {resource_type_display}

                    </span>

                    {version && (

                        <span className="resource-version">

                            Version {version}

                        </span>

                    )}

                </div>

                <h3 className="resource-title">

                    {title}

                </h3>

                <p className="resource-summary">

                    {summary}

                </p>

                {themes?.length > 0 && (

                <div className="resource-themes">

                    {themes.map((theme) => (

                        <span
                            key={theme.id}
                            className="theme-chip"
                        >
                            <i className="bi bi-grid-fill"></i>

                            {theme.name}
                        </span>

                    ))}

                </div>

                )}

                {tags?.length > 0 && (

                <div className="resource-tags">

                    {tags.map((tag) => (

                        <span
                            key={tag.id}
                            className="tag-chip"
                        >
                            #{tag.name}
                        </span>

                    ))}

                </div>

                )}

                <div className="resource-actions">

                    {resource_file ? (

                        <a

                            href={resource_file}

                            target="_blank"

                            rel="noopener noreferrer"

                            className="resource-action primary"

                        >

                            <i className="bi bi-download"></i>

                            <span>Download</span>

                        </a>

                    ) : external_url ? (

                        <a

                            href={external_url}

                            target="_blank"

                            rel="noopener noreferrer"

                            className="resource-action primary"

                        >

                            <i className="bi bi-box-arrow-up-right"></i>

                            <span>Visit Resource</span>

                        </a>

                    ) : (

                        <button

                            type="button"

                            className="resource-action primary"

                        >

                        <i className="bi bi-arrow-right-circle"></i>

                            <span>View Details</span>

                        </button>

                    )}

                </div>

            </div>

        </article>

    );

}

export default PracticalResourceCard;