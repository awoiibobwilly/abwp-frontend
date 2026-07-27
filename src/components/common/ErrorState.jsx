function ErrorState({

    message = "Unable to load data.",

}) {

    return (

        <div className="error-state">

            <h3>

                Something went wrong

            </h3>

            <p>

                {message}

            </p>

        </div>

    );

}

export default ErrorState;