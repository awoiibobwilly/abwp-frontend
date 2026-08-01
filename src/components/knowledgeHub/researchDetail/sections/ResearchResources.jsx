import PropTypes from "prop-types";

function ResearchResources({ resources }) {

    if (!resources?.length) {

        return null;

    }

    return (

        <section
            className="research-section"
            aria-labelledby="research-resources-heading"
        >

            <h2 id="research-resources-heading">

                Resources

            </h2>

            <div className="research-resources">

                {

                    resources.map((resource) => (

                        <a
                            key={resource.id}
                            href={resource.url}
                            className="resource-card"
                            target="_blank"
                            rel="noopener noreferrer"
                        >

                            <div className="resource-icon">

                                <i
                                    className={
                                        resource.icon ??
                                        "bi bi-file-earmark-text"
                                    }
                                />

                            </div>

                            <div className="resource-content">

                                <h3>

                                    {resource.title}

                                </h3>

                                {

                                    resource.description && (

                                        <p>

                                            {resource.description}

                                        </p>

                                    )

                                }

                            </div>

                            <div className="resource-action">

                                <i className="bi bi-arrow-up-right" />

                            </div>

                        </a>

                    ))

                }

            </div>

        </section>

    );

}

ResearchResources.propTypes = {

    resources: PropTypes.array,

};

ResearchResources.defaultProps = {

    resources: [],

};

export default ResearchResources;