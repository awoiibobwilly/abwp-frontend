import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function ReaderNavigation({

    to,
    label,

}) {

    return (

        <div className="reader-navigation">

            <Link
                to={to}
                className="reader-back-link"
            >

                <i
                    className="bi bi-arrow-left"
                    aria-hidden="true"
                />

                <span>

                    {label}

                </span>

            </Link>

        </div>

    );

}

ReaderNavigation.propTypes = {

    to: PropTypes.string.isRequired,

    label: PropTypes.string.isRequired,

};

export default ReaderNavigation;