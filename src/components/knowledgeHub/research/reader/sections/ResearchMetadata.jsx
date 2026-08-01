import PropTypes from "prop-types";

function ResearchMetadata({ metadata }) {

    if (!metadata.length) {

        return null;

    }

    return (

        <section
            className="research-section"
            aria-labelledby="research-metadata-heading"
        >

            <h2 id="research-metadata-heading">

                Publication Information

            </h2>

            <div className="research-metadata-grid">

                {

                    metadata.map(item => (

                        <div
                            key={item.id}
                            className="metadata-card"
                        >

                            <span className="metadata-label">

                                {item.label}

                            </span>

                            <div className="metadata-value">

                                {

                                    item.href ? (

                                        <a
                                            href={item.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >

                                            {item.value}

                                        </a>

                                    ) : (

                                        item.value

                                    )

                                }

                            </div>

                        </div>

                    ))

                }

            </div>

        </section>

    );

}

ResearchMetadata.propTypes = {

    metadata: PropTypes.arrayOf(

        PropTypes.shape({

            id: PropTypes.string.isRequired,

            label: PropTypes.string.isRequired,

            value: PropTypes.oneOfType([

                PropTypes.string,

                PropTypes.number,

            ]).isRequired,

            href: PropTypes.string,

        })

    ),

};

ResearchMetadata.defaultProps = {

    metadata: [],

};

export default ResearchMetadata;