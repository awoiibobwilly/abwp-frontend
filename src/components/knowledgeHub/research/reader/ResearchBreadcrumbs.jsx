import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function ResearchBreadcrumbs({ items = [] }) {

    if (!items.length) return null;

    return (

        <nav
            className="research-breadcrumbs"
            aria-label="Breadcrumb"
        >

            <ol className="breadcrumb-list">

                {items.map((item, index) => {

                    const isLast = index === items.length - 1;

                    return (

                        <li
                            key={item.label}
                            className="breadcrumb-item"
                        >

                            {isLast ? (

                                <span
                                    className="breadcrumb-current"
                                    aria-current="page"
                                >

                                    {item.label}

                                </span>

                            ) : (

                                <>

                                    <Link
                                        to={item.to}
                                        className="breadcrumb-link"
                                    >

                                        {item.label}

                                    </Link>

                                    <i
                                        className="bi bi-chevron-right breadcrumb-separator"
                                        aria-hidden="true"
                                    ></i>

                                </>

                            )}

                        </li>

                    );

                })}

            </ol>

        </nav>

    );

}

ResearchBreadcrumbs.propTypes = {

    items: PropTypes.arrayOf(

        PropTypes.shape({

            label: PropTypes.string.isRequired,

            to: PropTypes.string,

        })

    ),

};

ResearchBreadcrumbs.defaultProps = {

    items: [],

};

export default ResearchBreadcrumbs;