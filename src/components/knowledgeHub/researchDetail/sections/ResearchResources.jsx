import PropTypes from "prop-types";

function ResearchResources({

    resources,

}) {

    if (!resources?.length) {

        return null;

    }

    return (

        <section className="research-resources">

            <h2>

                Resources

            </h2>

            <ul className="research-resources-list">

                {

                    resources.map(resource => (

                        <li

                            key={resource.id}

                            className="research-resource"

                        >

                            <a

                                href={resource.url}

                                target="_blank"

                                rel="noopener noreferrer"

                            >

                            {resource.label ?? resource.title}

                            </a>

                        </li>

                    ))

                }

            </ul>

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