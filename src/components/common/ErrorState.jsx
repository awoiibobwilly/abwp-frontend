import PropTypes from "prop-types";

function ErrorState({

    title = "Something went wrong",

    message = "Unable to load data.",

    onRetry,

}) {

    return (

        <div

            className="error-state"

            role="alert"

        >

            <h3>

                {title}

            </h3>

            <p>

                {message}

            </p>

            {onRetry && (

                <button

                    type="button"

                    className="btn btn-primary"

                    onClick={onRetry}

                >

                    Try Again

                </button>

            )}

        </div>

    );

}

ErrorState.propTypes = {

    title: PropTypes.string,

    message: PropTypes.string,

    onRetry: PropTypes.func,

};

export default ErrorState;