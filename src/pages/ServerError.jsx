import { Link } from "react-router-dom";

import "../styles/serverError.css";

function ServerError() {

  return (

    <section className="error-page">

      <div className="error-card">

        <span className="error-code">

          500

        </span>


        <h1>

          Something Went Wrong

        </h1>


        <p>

          An unexpected error occurred.
          Please try again later.

        </p>


        <div className="error-buttons">

          <Link
            to="/"
            className="btn btn-primary"
          >

            Return Home

          </Link>


          <Link
            to="/contact"
            className="btn btn-outline"
          >

            Contact Me

          </Link>

        </div>

      </div>

    </section>

  );

}

export default ServerError;