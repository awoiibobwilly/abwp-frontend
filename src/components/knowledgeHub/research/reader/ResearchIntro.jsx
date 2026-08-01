import PropTypes from "prop-types";

function ResearchIntro({ research }) {

    const {
        title,
        summary,
        publicationDate,
        contributionTypeDisplay,
    } = research;

    return (

        <div className="research-detail-intro">

            <div className="research-detail-badges">

                {contributionTypeDisplay && (

                    <span className="research-type">

                        <i className="bi bi-journal-bookmark-fill"></i>

                        {contributionTypeDisplay}

                    </span>

                )}

                {publicationDate && (

                    <span className="research-date">

                        <i className="bi bi-calendar-event"></i>

                        {publicationDate}

                    </span>

                )}

            </div>

            <h1>

                {title}

            </h1>

            {summary && (

                <p className="research-summary">

                    {summary}

                </p>

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

    }).isRequired,

};

export default ResearchIntro;