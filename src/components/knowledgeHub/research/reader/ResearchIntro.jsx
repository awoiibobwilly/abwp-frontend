import PropTypes from "prop-types";

function ResearchIntro({ research }) {

    const {

        title,

        summary,

        publicationDate,

        contributionTypeDisplay,

        publication,

        doi,

    } = research;

    return (

        <div className="research-detail-intro">

            {/* ==========================================
                PUBLICATION BADGES
            ========================================== */}

            <div className="research-detail-badges">

                {contributionTypeDisplay && (

                    <span className="research-type">

                        <i className="bi bi-journal-bookmark-fill" />

                        {contributionTypeDisplay}

                    </span>

                )}

                {publicationDate && (

                    <span className="research-date">

                        <i className="bi bi-calendar-event" />

                        {new Date(publicationDate).getFullYear()}

                    </span>

                )}

            </div>

            {/* ==========================================
                TITLE
            ========================================== */}

            <h1 id="research-title">

                {title}

            </h1>

            {/* ==========================================
                SUMMARY
            ========================================== */}

            {summary && (

                <p className="research-summary">

                    {summary}

                </p>

            )}

            {/* ==========================================
                PUBLICATION META
            ========================================== */}

            {(publication || publicationDate || doi) && (

                <div className="research-publication-meta">

                    {publication && (

                        <div className="research-meta-item">

                            <span className="research-meta-label">

                                Institution

                            </span>

                            <span className="research-meta-value">

                                {publication}

                            </span>

                        </div>

                    )}

                    {publicationDate && (

                        <div className="research-meta-item">

                            <span className="research-meta-label">

                                Published

                            </span>

                            <span className="research-meta-value">

                                {publicationDate}

                            </span>

                        </div>

                    )}

                    {doi && (

                        <div className="research-meta-item">

                            <span className="research-meta-label">

                                DOI

                            </span>

                            <a
                                href={`https://doi.org/${doi}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="research-meta-value"
                            >

                                {doi}

                            </a>

                        </div>

                    )}

                </div>

            )}

        </div>

    );

}

ResearchIntro.propTypes = {

    research: PropTypes.shape({

        title: PropTypes.string.isRequired,

        summary: PropTypes.string,

        publicationDate: PropTypes.string,

        contributionTypeDisplay: PropTypes.string,

        publication: PropTypes.string,

        doi: PropTypes.string,

    }).isRequired,

};

export default ResearchIntro;