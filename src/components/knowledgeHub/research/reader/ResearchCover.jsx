import PropTypes from "prop-types";

function ResearchCover({ research }) {

    const {
        title,
        coverImage,
        contributionTypeDisplay,
    } = research;

    return (

        <div className="research-detail-cover">

            {coverImage ? (

                <img
                    src={coverImage}
                    alt={title}
                    loading="lazy"
                />

            ) : (

                <div className="research-cover-placeholder">

                    <i className="bi bi-journal-richtext"></i>

                </div>

            )}

            {contributionTypeDisplay && (

                <span className="research-cover-type">

                    {contributionTypeDisplay}

                </span>

            )}

        </div>

    );

}

ResearchCover.propTypes = {

    research: PropTypes.shape({

        title: PropTypes.string,

        coverImage: PropTypes.string,

        contributionTypeDisplay: PropTypes.string,

    }).isRequired,

};

export default ResearchCover;