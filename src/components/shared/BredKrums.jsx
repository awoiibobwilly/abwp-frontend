import { Link, useLocation } from "react-router-dom";

import "../../styles/shared/bredkrums.css";

function BredKrums() {

  const location = useLocation();

  const pathnames =
    location.pathname
      .split("/")
      .filter((item) => item);

  return (

    <section className="bredkrums">

      <div className="container">

        <Link to="/">

          Home

        </Link>

        {

          pathnames.map(

            (value, index) => {

              const routeTo =
                "/" +
                pathnames
                  .slice(0, index + 1)
                  .join("/");

              const isLast =
                index === pathnames.length - 1;

              return (

                <span key={routeTo}>

                  <span className="separator">

                    /

                  </span>

                  {

                    isLast

                      ? (

                        <span className="current">

                          {

                            value
                              .replace("-", " ")
                              .replace(
                                /\b\w/g,
                                char =>
                                char.toUpperCase()
                              )

                          }

                        </span>

                      )

                      : (

                        <Link to={routeTo}>

                          {

                            value
                              .replace("-", " ")
                              .replace(
                                /\b\w/g,
                                char =>
                                char.toUpperCase()
                              )

                          }

                        </Link>

                      )

                  }

                </span>

              );

            }

          )

        }

      </div>

    </section>

  );

}

export default BredKrums;