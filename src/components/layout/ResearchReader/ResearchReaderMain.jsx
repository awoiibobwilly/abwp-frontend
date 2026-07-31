import PropTypes from "prop-types";

function ResearchReaderMain({

    children,

}) {

    return (

        <article className="reader-content">

            {children}

        </article>

    );

}

ResearchReaderMain.propTypes = {

    children: PropTypes.node.isRequired,

};

export default ResearchReaderMain;