import PropTypes from "prop-types";

function ResearchAbstract({

    abstract,

}) {

    if (!abstract) {

        return null;

    }

    return (

        <>

            <h2>

                Abstract

            </h2>

            <p>

                {abstract}

            </p>

        </>

    );

}

ResearchAbstract.propTypes = {

    abstract: PropTypes.string,

};

ResearchAbstract.defaultProps = {

    abstract: "",

};

export default ResearchAbstract;