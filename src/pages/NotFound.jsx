import { Link } from "react-router-dom";

import "../styles/notFound.css";

function NotFound() {

  return (

    <section className="error-page">

      <div className="error-card">

        <span className="error-code">

          404

        </span>


        <h1>

          Page Not Found

        </h1>


        <p>

          The page you are looking for does not exist
          or may have been moved.

        </p>


        <div className="error-buttons">

          <Link
            to="/"
            className="btn btn-primary"
          >

            Go Home

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

export default NotFound;