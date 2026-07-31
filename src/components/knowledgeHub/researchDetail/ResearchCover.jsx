import PropTypes from "prop-types";

function ResearchCover({ research }) {

    const {
        title,
        cover_image,
        contribution_type_display,
    } = research;

    return (

        <div className="research-detail-cover">

            {cover_image ? (

                <img
                    src={cover_image}
                    alt={title}
                    loading="lazy"
                />

            ) : (

                <div className="research-cover-placeholder">

                    <i className="bi bi-journal-richtext"></i>

                </div>

            )}

            {contribution_type_display && (

                <span className="research-cover-type">

                    {contribution_type_display}

                </span>

            )}

        </div>

    );

}

ResearchCover.propTypes = {

    research: PropTypes.shape({

        title: PropTypes.string,

        cover_image: PropTypes.string,

        contribution_type_display: PropTypes.string,

    }).isRequired,

};

export default ResearchCover;