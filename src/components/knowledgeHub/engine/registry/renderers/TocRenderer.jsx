import PropTypes from "prop-types";

function TocRenderer({

    toc,

}) {

    if (!toc.length) {

        return null;

    }

    return (

        <nav
            className="research-toc"
            aria-label="Table of contents"
        >

            <h3>

                Contents

            </h3>

            <ul className="research-toc-list">

                {

                    toc.map(item => (

                        <li

                            key={item.id}

                            className="research-toc-item"

                        >

                            <a

                                href={`#${item.id}`}

                                className="research-toc-link"

                            >

                                {item.title}

                            </a>

                        </li>

                    ))

                }

            </ul>

        </nav>

    );

}

TocRenderer.propTypes = {

    toc: PropTypes.arrayOf(

        PropTypes.shape({

            id: PropTypes.string.isRequired,

            title: PropTypes.string.isRequired,

        })

    ),

};

TocRenderer.defaultProps = {

    toc: [],

};

export default TocRenderer;