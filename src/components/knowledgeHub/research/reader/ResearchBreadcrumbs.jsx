import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function ResearchBreadcrumbs({ publicationTitle }) {

    return (

        <nav
            className="research-breadcrumbs"
            aria-label="Research navigation"
        >

            <Link
                to="/knowledge-hub/research-contributions"
                className="reader-back-link"
            >

                <i
                    className="bi bi-arrow-left"
                    aria-hidden="true"
                />

                <span>

                    Back to Research Contributions

                </span>

            </Link>

            {publicationTitle && (

                <div className="reader-current-publication">

                    <span className="reader-publication-label">

                        Current Publication

                    </span>

                    <span className="reader-publication-title">

                        {publicationTitle}

                    </span>

                </div>

            )}

        </nav>

    );

}

ResearchBreadcrumbs.propTypes = {

    publicationTitle: PropTypes.string,

};

ResearchBreadcrumbs.defaultProps = {

    publicationTitle: "",

};

export default ResearchBreadcrumbs;