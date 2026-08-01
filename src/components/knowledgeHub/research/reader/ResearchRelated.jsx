import PropTypes from "prop-types";

import SectionHeader from "../../../common/SectionHeader";

function ResearchRelated({

    publications = [],

}) {

    if (!publications.length) {

        return null;

    }

    return (

        <section
            className="research-related"
            aria-labelledby="related-publications-heading"
        >

            <SectionHeader

                eyebrow="Continue Exploring"

                title="Related Research"

                description="Discover additional publications related to this research topic."

            />

            <div
                className="related-publications-grid"
                id="related-publications-heading"
            >

                {publications.map(({

                    id,
                    title,
                    summary,
                    type,
                    coverImage,
                    url,

                }) => (

                    <article
                        key={id}
                        className="related-publication-card"
                    >

                        {coverImage && (

                            <img
                                src={coverImage}
                                alt={`Cover of ${title}`}
                                className="related-publication-image"
                                loading="lazy"
                            />

                        )}

                        <div className="related-publication-content">

                            {type && (

                                <span className="related-publication-type">

                                    {type}

                                </span>

                            )}

                            <h3>

                                {title}

                            </h3>

                            {summary && (

                                <p>

                                    {summary}

                                </p>

                            )}

                            {url && (

                                <a
                                    href={url}
                                    className="related-publication-link"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >

                                    Read Publication

                                    <i
                                        className="bi bi-arrow-right"
                                        aria-hidden="true"
                                    />

                                </a>

                            )}

                        </div>

                    </article>

                ))}

            </div>

        </section>

    );

}

ResearchRelated.propTypes = {

    publications: PropTypes.arrayOf(

        PropTypes.shape({

            id: PropTypes.oneOfType([
                PropTypes.number,
                PropTypes.string,
            ]).isRequired,

            title: PropTypes.string.isRequired,

            summary: PropTypes.string,

            type: PropTypes.string,

            coverImage: PropTypes.string,

            url: PropTypes.string.isRequired,

        })

    ),

};

ResearchRelated.defaultProps = {

    publications: [],

};

export default ResearchRelated;