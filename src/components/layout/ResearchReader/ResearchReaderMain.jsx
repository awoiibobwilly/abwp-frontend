import PropTypes from "prop-types";

function ResearchReaderMain({ children }) {

    return (

        <article className="reader-main">

            {children}

        </article>

    );

}

ResearchReaderMain.propTypes = {
    children: PropTypes.node.isRequired,
};

export default ResearchReaderMain;