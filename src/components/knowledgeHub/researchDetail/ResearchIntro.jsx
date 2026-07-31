import PropTypes from "prop-types";

function ResearchIntro({ research }) {

    const {
        title,
        summary,
        publication_date,
        contribution_type_display,
    } = research;

    return (

        <div className="research-detail-intro">

            <div className="research-detail-badges">

                {contribution_type_display && (

                    <span className="research-type">

                        <i className="bi bi-journal-bookmark-fill"></i>

                        {contribution_type_display}

                    </span>

                )}

                {publication_date && (

                    <span className="research-date">

                        <i className="bi bi-calendar-event"></i>

                        {publication_date}

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

        publication_date: PropTypes.string,

        contribution_type_display: PropTypes.string,

    }).isRequired,

};

export default ResearchIntro;