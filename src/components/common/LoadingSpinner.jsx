import PropTypes from "prop-types";

function LoadingSpinner({

    message = "Loading...",

}) {

    return (

        <div

            className="loading-state"

            role="status"

            aria-live="polite"

        >

            <div

                className="spinner"

                aria-hidden="true"

            />

            <p>{message}</p>

        </div>

    );

}

LoadingSpinner.propTypes = {

    message: PropTypes.string,

};

export default LoadingSpinner;