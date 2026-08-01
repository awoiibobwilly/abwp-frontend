import PropTypes from "prop-types";

function ResearchAbstract({ abstractText }) {

    if (!abstractText) {
        return null;
    }

    return (

        <section
            className="research-section research-abstract"
            aria-labelledby="research-abstract-heading"
        >

            <h2 id="research-abstract-heading">
                Abstract
            </h2>

            <p>
                {abstractText}
            </p>

        </section>

    );

}

ResearchAbstract.propTypes = {
    abstractText: PropTypes.string,
};

export default ResearchAbstract;