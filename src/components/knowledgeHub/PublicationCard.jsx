import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import {
    FaBuilding,
    FaCalendarAlt,
    FaArrowRight,
} from "react-icons/fa";

function PublicationCard({ publication }) {

    const {

        title,

        summary,

        coverImage,

        publication: institution,

        publicationYear,

        contributionTypeDisplay,

        themes,

        tags,

        detailUrl,

    } = publication;

    return (

        <article className="publication-card">

            {/* ==========================================
                COVER
            ========================================== */}

            {coverImage && (

                <div className="publication-cover">

                    <img
                        src={coverImage}
                        alt={title}
                        loading="lazy"
                    />

                </div>

            )}

            {/* ==========================================
                CONTENT
            ========================================== */}

            <div className="publication-content">

                <div className="publication-meta">

                    <span className="publication-type">

                        {contributionTypeDisplay}

                    </span>

                    <span className="publication-year">

                        <FaCalendarAlt />

                        {publicationYear}

                    </span>

                </div>

                <h3 className="publication-title">

                    {title}

                </h3>

                {summary && (

                    <p className="publication-summary">

                        {summary}

                    </p>

                )}

                {institution && (

                    <div className="publication-institution">

                        <FaBuilding />

                        <span>

                            {institution}

                        </span>

                    </div>

                )}

                {/* ==========================================
                    THEMES
                ========================================== */}

                {!!themes.length && (

                    <div className="publication-themes">

                        {themes.slice(0, 3).map((theme) => (

                            <span
                                key={theme.id}
                                className="theme-chip"
                            >

                                {theme.title}

                            </span>

                        ))}

                    </div>

                )}

                {/* ==========================================
                    TAGS
                ========================================== */}

                {!!tags.length && (

                    <div className="publication-tags">

                        {tags.slice(0, 3).map((tag) => (

                            <span
                                key={tag.id}
                                className="tag-chip"
                            >

                                #{tag.name}

                            </span>

                        ))}

                    </div>

                )}

            </div>

            {/* ==========================================
                ACTION
            ========================================== */}

            <footer className="publication-footer">

                <Link
                    to={detailUrl}
                    className="publication-link"
                >

                    Read Publication

                    <FaArrowRight />

                </Link>

            </footer>

        </article>

    );

}

PublicationCard.propTypes = {

    publication: PropTypes.shape({

        id: PropTypes.oneOfType([
            PropTypes.number,
            PropTypes.string,
        ]),

        title: PropTypes.string.isRequired,

        summary: PropTypes.string,

        coverImage: PropTypes.string,

        publication: PropTypes.string,

        publicationYear: PropTypes.oneOfType([
            PropTypes.number,
            PropTypes.string,
        ]),

        contributionTypeDisplay: PropTypes.string,

        detailUrl: PropTypes.string.isRequired,

        themes: PropTypes.array,

        tags: PropTypes.array,

    }).isRequired,

};

export default PublicationCard;