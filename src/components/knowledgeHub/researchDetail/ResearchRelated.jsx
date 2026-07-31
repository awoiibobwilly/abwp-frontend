import PropTypes from "prop-types";

function ResearchRelated({ publications = [] }) {

    if (!publications.length) return null;

    return (

        <section
            className="research-section"
            aria-labelledby="related-publications-heading"
        >

            <h2 id="related-publications-heading">

                Related Publications

            </h2>

            <div className="related-publications-grid">

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

                        <h3>{title}</h3>

                        {summary && <p>{summary}</p>}

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